function sidebarCtr($scope) {
  $scope.text = "sidebar success!";
  
  $scope.appPages = [
    "dashboard", 
    "inbox",
    "settings"
  ];
  
}

function appCtr($scope, $routeParams, $location, $route) {
  
  $scope.title = "default title";
  
  $scope.toggleSidebar = function() {
    $('.main_nav').toggleClass('visible');
    $('main').toggleClass('slide_left');  
  };
  
  $scope.togglePanel = function(panelName) {
    $('aside').toggleClass('visible');
    $scope.panel=panelName;
  };
  
  function Campaign(id, title, local, location, discoverable) {
    
    this.id = id,
    this.title = title,
    this.description = 'This is the default description.',
    this.local = local,
    this.location = location,
    this.discoverable = discoverable,
    this.questionsList = [
      {
        id: 'asdf',
        type: 'text',
        text: "What do you think of me?",
        answers: []
      }
    ],
    this.reward =
      {
        title: '',
        description: '',
        terms: ''
      },
    this.permissions = 
      {
        accepted: [],
        pending: [
          {
            first: '',
            last: '',
            email: '',
            date_sent: '',
            level: ''
          }
        ]
      }
  }
  
  $scope.chooseQType = function(question_type) {
    $scope.buildCampaign.questionsList.push({
        id: "q_"+datetime,
        type: question_type,
        text: '',
        answers: []
    });
    var datetime = new Date();
    console.log($scope.buildCampaign.questionsList);
    
    $scope.togglePanel();
  };
  
  $scope.campaignList = {
    camp0: {
      id: 'camp0',
      description: 'This is the description of the campaign.',
      title: 'Campaign #1',
      local: false,
      location: '',
      discoverable: false,
      questionsList: [
        {
          id: 'asdf',
          type: 'text',
          text: "What do you think of me?",
          answers: []
        }
      ],
      reward:
        {
          title: '',
          description: '',
          terms: ''
        },
      permissions: 
        {
          accepted: [],
          pending: [
            {
              first: '',
              last: '',
              email: '',
              date_sent: '',
              level: ''
            }
          ]
        }
    },
    camp1: {
      id: 'camp1',
      title: 'Campaign #2',
      description: 'This is the description of the campaign.',
      local: false,
      location: '',
      discoverable: false,
      questionsList: [
        {
          id: 'fdsa',
          type: 'text',
          text: "This is the only question for Campaign number 2.",
          answers: []
        }
      ],
      reward:
        {
          title: '',
          description: '',
          terms: ''
        },
      permissions: 
        {
          accepted: [],
          pending: [
            {
              first: '',
              last: '',
              email: '',
              date_sent: '',
              level: ''
            }
          ]
        }
    }
  };
  
// example framework of a campaign
//  $scope.buildCampaign = { 
//    id: '',
//    name: '',
//    description: '',
//    title: '',
//    local: false,
//    location: '',
//    discoverable: false,
//    questionsList: [
//      {
//        id: '',
//        type: '',
//        text: null,
//        answers: []
//      }
//    ],
//    reward:
//      {
//        title: '',
//        description: '',
//        terms: ''
//      },
//    permissions: 
//      {
//        accepted: [],
//        pending: [
//          {
//            first: '',
//            last: '',
//            email: '',
//            date_sent: '',
//            level: ''
//          }
//        ]
//      } 
//  };
  
  $scope.createCampaign = function(new_campaign_title, is_local, new_campaign_locale, discoverable) {
    var datetime = Date.now();
    console.log($scope.buildCampaign);
    $scope.buildCampaign = new Campaign(datetime, new_campaign_title, is_local, new_campaign_locale, discoverable);
    
    console.log($scope.buildCampaign);
    $location.path( '/new' );
    console.log($scope.buildCampaign);
  };
  
  $scope.sendInvite = function(first_input, last_input, email_input, level_input, contact_list) {
    contact_list.push({
      first: first_input,
      last: last_input,
      email: email_input,
      date_sent: getDate(),
      level: level_input
    });
  };
  
  $scope.addAnswer = function(input_text, answers) {
    answers.push({
      id: 'a01',
      text: input_text
    });
    console.log($scope.newAnswerText);
    this.newAnswerText = '';
  };
  
  $scope.addQuestion = function(input_text, questions) {
    questions.push({
      id: 'q01',
      type: 'text',
      text: 'How likely are you to recommend this establishment to your friends?',
      answers: []
    });
    console.log($scope.newAnswerText);
    this.newAnswerText = '';
  };
  
  $scope.toggleHeaderDropdown = function() {
    $('header nav').toggleClass('closed');
  };
  
  $scope.steps = [0,1,2,3,4];
  
  $scope.currentStep = 0;
  
  $scope.changeStep = function(step) {
    $scope.currentStep = step;
    $scope.toggleHeaderDropdown();
  };
  
  $scope.advanceStep = function() {
    if ($scope.currentStep < $scope.steps.length-1) {
      $scope.currentStep = $scope.currentStep+1;
    };
    console.log($scope.buildCampaign.reward);
  };
  
  $scope.activateCampaign = function() {
    $scope.campaignList[$scope.buildCampaign['id']] = $scope.buildCampaign;
  };
  
  $scope.panel = 'default';
  
  getDate = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    
    var yyyy = today.getFullYear();
    if (dd<10) {
      dd='0'+dd
    } 
    if (mm<10) {
      mm='0'+mm
    } 
    
    today = yyyy+'-'+mm+'-'+dd;
    return today;
    
  };
  
};

function dashCtr($scope, $routeParams, $location) {
    
  $scope.text = "This is the dashboard!";
  $scope.title = 'Dashboard';
  
  if (($location.$$path == "/new") && (!$scope.buildCampaign)) {
     $location.path( '/dashboard' ); //redirect back to dashboard if a new camapaign has not been initiated
  }
};

function campaignCtr($scope, $routeParams, $location) {
  
  var campaign = $routeParams.campaignId; //get current campaign id from route
  
  if ($scope.campaignList[campaign] != null) {
    $scope.buildCampaign = $scope.campaignList[campaign]; //find campaign with id in the list of campaigns
  }
  else {
    $location.path( '/dashboard' ); //redirect back to dashboard if campaign isn't found
  }
    
  $scope.saveChanges = function() {
    
    console.log($scope.buildCampagin);
    console.log($scope.campaignList);
    $scope.campaignList[$scope.buildCampaign[campaign]] = $scope.buildCampaign;
    console.log($scope.buildCampagin);
    console.log($scope.campaignList);
  };
};

function inboxCtr($scope, $routeParams) {
    
  $scope.text = "This is the inbox!";
  $scope.title = 'Dashboard';
  
  $scope.instances = [
    {
      instanceId: 'htrsh',
      author: "Franz Ferdinand",
      time: "2013-02-13T01:15-05:00",
      text: "This is the main text of the feedback instance",
      heard: "false",
      comments: [
        {
          commentId: 'fdsahy',
          author: "Elliott Regan", 
          time: "2013-02-13T01:15-05:00",
          text: "This might be a response to the feedback.",
          heard: "false"
        },
        {
          commentId: 'asdfgtr',
          author: "You", 
          time: "2013-02-13T01:15-05:00",
          text: "This might be you reply",
          heard: "false"
        }
      ]
    },
    {
      commentId: 'grjteiog',
      author: "Elliott Regan",
      time: "2013-02-13T01:15-05:00",
      text: "This is the main text of the feedback instance",
      heard: "false",
      comments: [
        {
          commentId: 'asdf',
          author: "Elliott Regan", 
          time: "2013-02-13T01:15-05:00",
          text: "This might be a response to the feedback.",
          heard: "false"
        },
        {
          commentId: 'fdsaf',
          author: "You", 
          time: "2013-02-13T01:15-05:00",
          text: "This might be you reply",
          heard: "false"
        }
      ]
    
    }
  ];
  
  $scope.hearIt = function(el) {
    el.heard = "true";
    console.log("heard!")
  };
  
  $scope.addReply = function(post, comments) {
    comments.push({
      commentId: 1,
      author: "You",
      time: getDate(),
      text: post,
      heard: false
    });
    console.log($scope.newCommentText);
    this.newCommentText = '';
  };
    
};

function panelCtr($scope) {
  $scope.text = "panel success!";
  
};