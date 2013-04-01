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
  $scope.openedCampaign = [];
  
  $scope.toggleSidebar = function() {
    $('.main_nav').toggleClass('visible');
    $('main').toggleClass('slide_left');  
  };
  
  $scope.togglePanel = function(panelName) {
    $('aside').toggleClass('visible');
    $scope.panel=panelName;
  };
  
  $scope.chooseQType = function(question_type, campaign) {
    console.log(campaign);
    campaign.questionsList.push({
        id: 'test',
        type: question_type,
        text: null,
        answers: []
    });
    $scope.togglePanel();
  };
  
  
  
  $scope.buildCampaign = {
    id: 'camp0',
    name: 'Campaign #1',
    description: 'This is the description of the campaign.',
    title: '',
    local: false,
    location: '',
    discoverable: false,
    questionsList: [
      {
        id: 'q01',
        type: 'text',
        text: null,
        answers: []
      }
    ],
    permissions: 
      {
        accepted: [
          {
            first: 'John',
            last: 'Doe',
            email: 'jdoe@mail.com',
            date_sent: '10/2/2013',
            level: 'view'
          }
        ],
        pending: [
          {
            first: 'Jane',
            last: 'Roberts',
            email: 'jroberts@mail.com',
            date_sent: '10/4/2013',
            level: 'view edit'
          },
          {
            first: 'Arnold',
            last: 'Candy',
            email: 'acandy@mail.com',
            date_sent: '10/4/2013',
            level: 'view edit'
          }
        ]
      }
    
  };
  
  $scope.createCampaign = function(new_campaign_title, is_local, new_campaign_locale, discoverable, campaign) {
    campaign['title'] = new_campaign_title;
    campaign['local'] =  is_local
    campaign['location'] = new_campaign_locale
    campaign['discoverable'] = discoverable
    $location.path( '/new' );
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
  }
  
  $scope.steps = [0,1,2,3,4];
  
  $scope.currentStep = 0;
  
  $scope.changeStep = function(step) {
    $scope.currentStep = step;
    $scope.toggleHeaderDropdown();
  }
  
  $scope.advanceStep = function() {
    if ($scope.currentStep < $scope.steps.length-1) {
      $scope.currentStep = $scope.currentStep+1;
    };
  }
  
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
  
  goLevelTwo = function() {
    $('#page_01').addClass('slide_left');
    $('#page_02').addClass('focus');
    $('#page_02').removeClass('next');
  };
  
  goLevelOne = function() {
    $('#page_01').removeClass('slide_left');
    $('#page_01').addClass('focus');
    $('#page_02').removeClass('focus');
    $('#page_02').addClass('slide_right');
  };
  
};

function dashCtr($scope, $routeParams) {
    
  $scope.text = "This is the dashboard!";
  
  $scope.title = 'Dashboard';
  
  $scope.campaignList = [
    {
      id: 'camp0',
      name: 'Campaign #1',
      description: 'This is the description of the campaign.'
    },
    {
      id: 'camp1',
      name: 'Campaign #2',
      description: 'This is the description of the campaign.'
    }
  ];  
  
};

function campaignCtr($scope, $routeParams) {
  $scope.params = $routeParams;
  
  $scope.campaign = $routeParams.campaign;
  
  $scope.openedCampaign = {
    id: 'camp0',
    name: 'Campaign #1',
    description: 'This is the description of the campaign.',
    questionsList: {
      q01: 'How likely are you to recommend this establishment to your friends?',
      q02: 'Public Tips',
      q03: 'Private Comments'
    }
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