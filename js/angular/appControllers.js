function sidebarCtr($scope) {
  $scope.text = "sidebar success!";
  
  $scope.appPages = {
    "Discovery" : "discover",
    "Fdbk Feed" : "feed",
    "Your Fdbk History" : "history",
    "Your Rewards" : "rewards",
    "Personal Settings" : "settings"
  };
  
};

function formCtr($scope) {

  $scope.fdbkCampaign = {
      id: 'camp0',
      handle: 'crepesandthings',
      description: 'Our main feedback portal.',
      title: 'Crepes & Things',
      local: false,
      location: '',
      discoverable: false,
      questionsList: [
        {
          id: 'asdf',
          type: 'multipleChoice',
          text: "How was your service today?",
          answers: [
            {
              id: 0,
              text: "ass"
            },
            {
              id: 2,
              text: "mehhhhh..."
            },
            {
              id: 3,
              text: "better than not"
            },
            {
              id: 4,
              text: "fabul-fucking-tastic!"
            }
          ]
        },
        {
          id: 'asdf2',
          type: 'binary',
          text: "Yes or no?",
          answers: [
            {
              id: 50,
              text: "yes"
            },
            {
              id: 52,
              text: "no"
            }
          ]
        },
        {
          id: 'asdf3',
          type: 'freeText',
          text: "Tell us about something you like.",
          answers: []
        },
        {
          id: 'asdf4',
          type: 'number',
          text: "How old are you?",
          answers: []
        },
        {
          id: 'asdf5',
          type: 'rating',
          text: "Rate your overall experience.",
          answers: [
            {
              id: 30,
              text: "poor"
            },
            {
              id: 32,
              text: "fair"
            },
            {
              id: 33,
              text: "good"
            },
            {
              id: 34,
              text: "great"
            },
          ]
        }
      ],
      reward:
        {
          title: 'Free espresso!',
          description: 'Come back for a free espresso any time you want.',
          terms: "Just show us your code, and we'll hand you a free espresso drink.",
          exp: "01-02-2014"
        }
  };
 
};

function discoveryCtr($scope) {

  $scope.searchListings = [
    {
      handle : "crepesandthings",
      title : "Crepes & Things"
    },
    {
      handle : "crepesandthings",
      title : "Which tea?"
    },
    {
      handle : "bobs",
      title : "How do you like our stuff??"
    },
    {
      handle : "sharkweek",
      title : "What shark would you like to be?"
    },
    {
      handle : "travelcenter",
      title : "Service Questions"
    }
  ];

};

function appCtr($scope, $routeParams, $location, $route) {
  
  $scope.title = "default title";
  
  $scope.toggleHeaderDropdown = function() {
    $('header .dropdown').toggleClass('closed');
  };
  
  $scope.toggleSidebar = function() {
    $('.main_nav').toggleClass('visible');
    $('main').toggleClass('slide_left');  
  };
  
  $scope.togglePanel = function(panelName) {
    $('aside').toggleClass('visible');
    $scope.panel=panelName;
  };
  
  $scope.duplicateMode = function(state, clicked_campaign) {
    $scope.duplicating_mode = state;
    $scope.temporary_duplicate = angular.copy(clicked_campaign);
    $scope.toggleEditMode();
  };
  
  $scope.edit_mode = false;
  $scope.new_mode = false;
  
  $scope.toggleEditMode = function() {
    $scope.edit_mode = !$scope.edit_mode;
    $scope.new_mode = false;
  };
  
  $scope.toggleNewMode = function() {
    $scope.new_mode = !$scope.new_mode;
  };
  
  $scope.duplicateCampaign = function(title, handle) {
    
    $scope.duplicating_mode = true;
    var datetime = new Date().getTime();
    
    $scope.temporary_duplicate.handle = handle;
    $scope.temporary_duplicate.id = datetime;
    $scope.temporary_duplicate.instances = [];
    
    $scope.campaignList[datetime] = angular.copy($scope.temporary_duplicate);
    $scope.duplicating_mode = false;
    
    $scope.buildCampaign = angular.copy($scope.temporary_duplicate);
    $location.path( '/new' );
  };
  
  $scope.deleteListItem = function(clicked_list_item, parent_object) { //deletes any item from an ng-repeat list
      delete parent_object[clicked_list_item.id];
      $scope.toggleEditMode();
  };
  
  var expandedReply = -1;
  
  $scope.expandReplies = function(instance_id) {
    if (expandedReply != instance_id) {
      expandedReply = instance_id;
    }
    else {
      expandedReply = -1;
    }
  };
  
  $scope.toggleConvo = function() {
    this.collapsed = !this.collapsed;
  };
  
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
  
  $scope.isExpanded = function(instance_id) {
    return expandedReply == instance_id;
    console.log('check');
  };
  
  function Campaign(id, handle, title, local, location, discoverable) {
    
    this.id = id,
    this.handle = handle,
    this.title = title,
    this.description = 'This is the default description.',
    this.local = local,
    this.location = location,
    this.discoverable = discoverable,
    this.questionsList = [],
    this.reward =
      {
        title: '',
        description: '',
        terms: ''
      },
    this.permissions = 
      {
        accepted: [],
        pending: []
      }
  };
  
  $scope.selectedQType = '';
  
  $scope.buildQuestion = {
    id: 'asdf',
    type: 'freeText',
    text: "",
    answers: []
  };
  
  $scope.SelectQuestionType = function(clicked_type, question) {
    question.type = clicked_type;
    
    if (clicked_type == 'binary') {
      question.answers = [
        {
          id: new Date().getTime(),
          text: "true"
        },
        {
          id: new Date().getTime()+1,
          text: "false"
        }
      ];
    }
    else if (clicked_type == 'multipleChoice') {
      question.answers = [
        {
          id: 0,
          text: ""
        }
      ];
    }
    else {
      question.answers = [];
    }
    console.log($scope.buildQuestion.answers);
  };
  
  $scope.addAnswer = function(input_text, answers) {
    answers.push({
      id: new Date().getTime(),
      text: input_text
    });
    this.newAnswerText = '';
  };
  
  $scope.saveQuestion = function() {
    if ($scope.buildQuestion.type == 'rating') {
      $scope.buildQuestion.answers = [
        {
          id: 0,
          text: "poor"
        },
        {
          id: 2,
          text: "fair"
        },
        {
          id: 3,
          text: "good"
        },
        {
          id: 4,
          text: "great"
        },
      ];
    };
    
    $scope.buildCampaign.questionsList.push(angular.copy($scope.buildQuestion));
    $scope.buildQuestion = {
        id: "",
        type: "",
        text: "",
        answers: []
    }
  };
  
  $scope.chooseQType = function(question_type) { //function from the form creator
    $scope.buildCampaign.questionsList.push({
        id: "q_"+datetime,
        type: question_type,
        text: '',
        answers: []
    });
    var datetime = new Date();    
    $scope.togglePanel();
  };
  
  $scope.handleList = ["crepesandthings", "crepesandthings_tea"];
  
  $scope.campaignList = {
    camp0: {
      id: 'camp0',
      handle: $scope.handleList[0],
      description: 'Our main feedback portal.',
      title: 'Crepes & Things',
      local: false,
      location: '',
      discoverable: false,
      questionsList: [
        {
          id: 'asdf',
          type: 'multipleChoice',
          text: "How was your service today?",
          answers: [
            {
              id: 0,
              text: "poor"
            },
            {
              id: 2,
              text: "fair"
            },
            {
              id: 3,
              text: "good"
            },
            {
              id: 4,
              text: "great"
            },
          ]
        }
      ],
      reward:
        {
          title: 'Free espresso!',
          description: 'Come back for a free espresso any time you want.',
          terms: "Just show us your code, and we'll hand you a free espresso drink.",
          exp: "01-02-2014"
        },
      permissions: 
        { accepted: [
            { first: 'Bubbles',
              last: '',
              email: 'yup@ahdoughno.com',
              date_sent: '',
              level: []
            }
          ],
          pending: []
        },
      instances : {
        msg0: {
          id: 'msg0',
          author: "Franz Ferdinand",
          time: "2013-02-13T01:15-05:00",
          text: "This is the main text of the feedback instance",
          heard: "false",
          comments: [
            { commentId: 'fdsahy',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be a response to the feedback.",
              heard: "false"
            },
            { commentId: 'asdfgtr',
              author: "Franz Ferdinand", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be you reply",
              heard: "false"
            }
          ]
        },
        msg1: {
          id: 'msg1',
          author: "Chad Grecko",
          time: "2013-02-13T01:15-05:00",
          text: "This is the main text of the feedback instance",
          heard: "false",
          comments: [
            { commentId: 'asdf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Glad to hear from you. Anything else we can do for you?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "Chad Grecko", 
              time: "2013-02-13T01:15-05:00",
              text: "The text on the menus is too small. Can you make it bigger?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "Chad Grecko", 
              time: "2013-02-13T01:15-05:00",
              text: "Ok, thanks! You guys are the best.",
              heard: "false"
            }
          ]
        }
      }
    },
    camp1: {
      id: 'camp1',
      handle: $scope.handleList[1],
      title: 'Which tea?',
      description: "Asking our customers if they like our green tea or white tea better.",
      local: true,
      location: '',
      discoverable: false,
      questionsList: [
        {
          id: 'fdsa',
          type: 'freeText',
          text: "Which kind of tea did you like best?",
          answers: []
        }
      ],
      reward:
        {
          title: 'Free rocket ball',
          description: 'What is a rocket ball?',
          terms: 'Guess correctly, and you get it for free!',
          exp: "01-02-2014"
        },
      permissions: 
        {
          accepted: [],
          pending: [
            {
              first: 'Elliott',
              last: 'Regan',
              email: 'regan.elliott@gmail.com',
              date_sent: '10/2/2013',
              level: 'view'
            }
          ]
        },
      instances : {
        msg0 : {
          id: 'msg0',
          author: "Hans Lipman",
          time: "2013-02-13T01:15-05:00",
          text: "This is the main text of the feedback instance",
          heard: "false",
          comments: [
            { commentId: 'fdsahy',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be a response to the feedback.",
              heard: "false"
            },
            { commentId: 'asdfgtr',
              author: "Hans Lipman", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be you reply",
              heard: "false"
            }
          ]
        },
        msg1 : {
          id: 'msg0',
          author: "Becky Johnson",
          time: "2013-02-13T01:15-05:00",
          text: "This is the main text of the feedback instance",
          heard: "false",
          comments: [
            { commentId: 'asdf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Glad to hear from you. Anything else we can do for you?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "Becky Johnson", 
              time: "2013-02-13T01:15-05:00",
              text: "The text on the menus is too small. Can you make it bigger?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "Becky Johnson", 
              time: "2013-02-13T01:15-05:00",
              text: "Ok, thanks! You guys are the best.",
              heard: "false"
            }
          ]
        }
      }
    }
  };
    
  $scope.rewardsList = {
    rwd0 : {
      id: "rwd0",
      title: 'Free Coffee!',
      description: 'This is an offer for a free coffee.',
      creator: "Crepes & Things",
      terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
      exp_date: "4/1/2014",
      claimed: false
    },
    rwd1 : {
      id: "rwd1",
      title: 'Half off a burrito!',
      description: 'Trade this in for 50% off a burrito.',
      creator: "Long Live Guac",
      terms: "May not be used in Missouri. Sorry.",
      exp_date: "2/28/1993",
      claimed: false
    }
  };
    
// example of a campaign
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
  
  $scope.createCampaign = function(new_campaign_title, handle, is_local, new_campaign_locale, discoverable) {
    var datetime = Date.now();
    $scope.buildCampaign = new Campaign(datetime, handle, new_campaign_title, is_local, new_campaign_locale, discoverable);
    $scope.handleList.push(handle)
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
  
  $scope.steps = [0,1,2,3,4];
  
  $scope.currentStep = 0;
  
  $scope.resetStep = function() {
    $scope.currentStep = 0;
  }
  
  $scope.changeStep = function(step) {
    $scope.currentStep = step;
  };
  
  $scope.advanceStep = function() {
    if ($scope.currentStep < $scope.steps.length-1) {
      $scope.currentStep = $scope.currentStep+1;
    };
    console.log($scope.buildCampaign.reward);
  };
  
  $scope.activateCampaign = function() {
    $scope.campaignList[$scope.buildCampaign['id']] = $scope.buildCampaign;
    $scope.currentStep = 0;
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
    
    today = yyyy+mm+dd;
    return today;
    
  };
  
};

function accountCtr($scope, $routeParams, $location) {

  $scope.title = "Settings";
  
  $scope.userDetails = {
    name: "Elliott Regan",
    email: "oatmealsnap@gmail.com",
    city: "Brooklyn, NY",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    instances : {
      msg0: {
        id: 'msg0',
        author: "You",
        to_name: "Crepes & Things",
        to_handle: '@crepesandthings',
        time: "2013-02-13T01:15-05:00",
        text: "This is the main text of the feedback instance",
        heard: "false",
        reward: "free coffee",
        comments: [
          { commentId: 'fdsahy',
            author: "Crepes & Things", 
            time: "2013-02-13T01:15-05:00",
            text: "This might be a response to the feedback.",
            heard: "false"
          },
          { commentId: 'asdfgtr',
            author: "You", 
            time: "2013-02-13T01:15-05:00",
            text: "This might be your reply",
            heard: "false"
          }
        ]
      },
      msg1: {
        id: 'msg1',
        author: "You",
        time: "2013-02-13T01:15-05:00",
        text: "This is the main text of the feedback instance",
        heard: "false",
        comments: [
          { commentId: 'asdf',
            author: "Crepes & Things", 
            time: "2013-02-13T01:15-05:00",
            text: "Glad to hear from you. Anything else we can do for you?",
            heard: "false"
          },
          { commentId: 'fdsaf',
            author: "You", 
            time: "2013-02-13T01:15-05:00",
            text: "The text on the menus is too small. Can you make it bigger?",
            heard: "false"
          },
          { commentId: 'fdsaf',
            author: "Crepes & Things", 
            time: "2013-02-13T01:15-05:00",
            text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
            heard: "false"
          },
          { commentId: 'fdsaf',
            author: "You", 
            time: "2013-02-13T01:15-05:00",
            text: "Ok, thanks! You guys are the best.",
            heard: "false"
          }
        ]
      }
    }
    
  };

};

function dashCtr($scope, $routeParams, $location) {
    
  $scope.title = 'Dashboard';
  if (($location.$$path == "/new") && (!$scope.buildCampaign)) {
     $location.path( '/dashboard' ); //redirect back to dashboard if a new campaign has not been initiated
  };
};

function rewardsListCtr($scope) {

  $scope.title = 'Rewards';

};

function rewardCtr($scope, $routeParams, $location) {

  if ($scope.rewardsList[$routeParams.rewardId] != null) { //first make sure the rewardId from route exists.
    $scope.viewReward = $scope.rewardsList[$routeParams.rewardId]; //find reward with id in the list of rewards and save to variable.
    $scope.title = $scope.viewReward.title;
  }
  else {
    $location.path( "/rewards" ); //redirect back to dashboard if campaign isn't found
    console.log('redirect')
  }
  
  $scope.claimReward = function (el) {
    el.claimed = new Date();
    console.log("claimed!");
  }

}

function instanceCtr($scope, $routeParams, $location) {
  console.log($scope.campaignList[$routeParams.campaignId].instances)
  if ($scope.campaignList[$routeParams.campaignId].instances != null) { //first make sure the messageId from route exists.
    $scope.viewInstance = $scope.campaignList[$routeParams.campaignId].instances[$routeParams.instanceId]; //find message with id in the list of campaigns
      console.log("success")
  }
  else {
    console.log("redirect")
    $location.path( "/campaign/"+$scope.campaign ); //redirect back to dashboard if campaign isn't found
  }
};

function campaignCtr($scope, $routeParams, $location) {
  
  function Campaign(id, handle, title, local, location, discoverable) {
    
    this.id = id,
    this.handle = handle,
    this.title = title,
    this.description = 'This is the default description.',
    this.local = local,
    this.location = location,
    this.discoverable = discoverable,
    this.questionsList = [],
    this.reward =
      {
        title: '',
        description: '',
        terms: ''
      },
    this.permissions = 
      {
        accepted: [],
        pending: []
      }
  };
    
  if ($scope.campaignList[$routeParams.campaignId] != null) { //first make sure the campaignId from route exists
    $scope.editCampaign = angular.copy($scope.campaignList[$routeParams.campaignId]); //find campaign with id in the list of campaigns
    $scope.viewCampaign = $scope.campaignList[$routeParams.campaignId]; //find message with id in the list of campaigns
    
  }
  else {
    console.log($routeParams.campaignId)
    $location.path( '/dashboard' ); //redirect back to dashboard if campaign isn't found
  }
    
  $scope.saveChanges = function() {
    $scope.campaignList[$scope.editCampaign.id] = $scope.editCampaign;
  };
};

function inboxCtr($scope, $routeParams) {
  $scope.title = 'All Instaces';
  
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

function instancesCtr($scope, $routeParams, $location) {

  if ($scope.campaignList[$routeParams.campaignId] != null) { //first make sure the messageId from route exists.
    $scope.viewCampaign = $scope.campaignList[$routeParams.campaignId]; //find message with id in the list of campaigns
  }
  else {
    $location.path( "/campaign/"+$routeParams.campaignId ); //redirect back to dashboard if campaign isn't found
  }

  $scope.title = $scope.viewCampaign.title + " Instances"
  console.log($scope.viewCampaign.instances);

}

function panelCtr($scope) {
  $scope.text = "panel success!";
  
};