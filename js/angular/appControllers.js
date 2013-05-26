function sidebarCtr($scope) {
  $scope.text = "sidebar success!";
  
  $scope.appPages = {
    "Fdbk Feed" : "feed",
    "Your Fdbk History" : "history",
    "Your Rewards" : "rewards",
    "Personal Settings" : "settings"
  };
  
};

function formCtr($scope, formData, campaignData) {

  init();
  
  function init() {
//    $scope.fdbkCampaign = formData.getFdbkCampaign();
    $scope.fdbkCampaign = campaignData.getCampaigns().camp0;
    $scope.title = 'Settings';
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
  console.log('app')
  init();
  
  function init() {
    $scope.title = 'default title';
    
  };
  
  $scope.toggleHeaderDropdown = function() {
    $('header .dropdown').toggleClass('closed');
  };
  
  $scope.sidebar_visible = false;
  
  $scope.toggleSidebar = function(direction) {
    if ( !$scope.sidebar_visible) {
      
      $('.main_nav').toggleClass('visible');
      $scope.sidebar_visible = true;
      
      if (direction == 'left') {
        $('main').toggleClass('slide_left'); 
      }
      else if (direction == 'right') {
        $('main').toggleClass('slide_left');
      }
      
    }
    else {
      $('.main_nav').toggleClass('visible');
      $scope.sidebar_visible = false;
      $('main').toggleClass('slide_left');
    }
    
     
  };
  
  $scope.togglePanel = function(panelName) {
    $('aside').toggleClass('visible');
    $scope.panel=panelName;
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

function accountCtr($scope, $routeParams, $location, userData, campaignData) {
  
  init();
  
  function init() {
    $scope.userDetails = userData.getUserDetails();
    $scope.instances = userData.getInstances();
    $scope.title = 'Settings';
  };

};

function campaignBuilderCtr($scope, $location, tempObjects, campaignData) {
    
  init();
  
  if ($scope.buildCampaign == undefined) {
     $location.path( '/dashboard' ); //redirect back to dashboard if a new campaign has not been initiated
  };
  
  function init() {
    $scope.title = 'Dashboard';
    $scope.buildCampaign = tempObjects.getBuildCampaign();
  };
  
  var selectedQType = '';
  
  $scope.buildQuestion = {
    id: 'asdf',
    type: 'freeText',
    text: "",
    answers: []
  };
  
  $scope.SelectQuestionType = function(clicked_type, question) {
    question.type = clicked_type;
  
    console.log('clicked');
  
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
    console.log($scope.buildCampaign)
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
  
  $scope.activateCampaign = function(campaign_id) {
    console.log(campaign_id)
    campaignData.addCampaign(campaign_id, $scope.buildCampaign);
    $scope.currentStep = 0;
  };
  
};

function dashCtr($scope, $routeParams, $location, campaignData, tempObjects) {
    
  $scope.edit_mode = false;
  $scope.new_mode = false;
  $scope.title = 'Dashboard';
  
  init();
  $scope.form = {type : $scope.handleList[0].value}; //fix for weird empty <option> created by angular.
  
  function init() {
    $scope.campaignList = campaignData.getCampaigns();
    $scope.handleList = campaignData.getHandles();
    $scope.buildCampaign = tempObjects.getBuildCampaign();
  };
    
  $scope.changeHandle = function() {
    if ($scope.handle != "+") {
      $scope.handle_to_submit = $scope.handle;
    }
    else {
      $scope.handle_to_submit = '';
    }
  };
  
  $scope.duplicateMode = function(state, clicked_campaign) {
    $scope.duplicating_mode = state;
    $scope.temporary_duplicate = angular.copy(clicked_campaign);
    $scope.toggleEditMode();
  };
  
  $scope.toggleEditMode = function() {
    $scope.edit_mode = !$scope.edit_mode;
    $scope.new_mode = false;
  };
  
  $scope.toggleNewMode = function() {
    $scope.new_mode = !$scope.new_mode;
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
  
  $scope.createCampaign = function(new_campaign_title, handle, is_local, new_campaign_locale, discoverable) {
    var datetimeId = Date.now();
        
    var temp_builder = new Campaign(datetimeId, handle, new_campaign_title, is_local, new_campaign_locale, discoverable);
    
    tempObjects.updateBuildCampaign(temp_builder);
    campaignData.addCampaign(temp_builder.id, temp_builder);
    
    $location.path( '/new' );
 
  };
  
};

function rewardsListCtr($scope, userData) {
  
  init();
  
  function init() {
    $scope.rewardsList = userData.getRewardsList();
    $scope.title = 'Rewards';
    console.log(userData.getRewardsList());
  };

};

function rewardCtr($scope, $routeParams, $location, userData) {

  init();
  
  function init() {
    $scope.rewardsList = userData.getRewardsList();
    
    if ($scope.rewardsList[$routeParams.rewardId] != null) { //first make sure the rewardId from route exists.
      $scope.viewReward = $scope.rewardsList[$routeParams.rewardId]; //find reward with id in the list of rewards and save to variable.
      $scope.title = $scope.viewReward.title;
    }
    else {
      $location.path( "/rewards" ); //redirect back to dashboard if campaign isn't found
      console.log('redirect')
    };
  };

  $scope.claimReward = function (el) {
    el.claimed = new Date();
  }

}

function instanceCtr($scope, $routeParams, $location) {

  if ($scope.campaignList[$routeParams.campaignId].instances != null) { //first make sure the messageId from route exists.
    $scope.viewInstance = $scope.campaignList[$routeParams.campaignId].instances[$routeParams.instanceId]; //find message with id in the list of campaigns
      console.log("success")
  }
  else {
    console.log("redirect")
    $location.path( "/campaign/"+$scope.campaign ); //redirect back to dashboard if campaign isn't found
  }
};

function campaignCtr($scope, $routeParams, $location, campaignData) {
  
  init();
  
  function init() {
    $scope.campaignList = campaignData.getCampaigns();
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

function instancesCtr($scope, $routeParams, $location, campaignData) {

  init();
  
  function init() {
    $scope.campaignList = campaignData.getCampaigns();
  };

  

  if ($scope.campaignList[$routeParams.campaignId] != null) { //first make sure the messageId from route exists.
    $scope.viewCampaign = $scope.campaignList[$routeParams.campaignId]; //find message with id in the list of campaigns
  }
  else {
    $location.path( "/campaign/"+$routeParams.campaignId ); //redirect back to dashboard if campaign isn't found
  }

  $scope.title = $scope.viewCampaign.title + " Instances"

}