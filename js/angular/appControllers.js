function sidebarCtr($scope, $routeParams, $location, campaignData, $route) {
  
  init();
  
  function init() {
    $scope.campaignList = campaignData.getCampaigns();
  };
  
  
  $scope.$on("UPDATE_CAMPAIGN_ID", function(event, page_data) {
    $scope.campaignId = page_data.campaignId;
  });
  
  $scope.appPages = {
    "Fdbk Feed" : "feed",
    "Your Fdbk History" : "history",
    "Your Rewards" : "rewards",
    "Personal Settings" : "settings"
  };
  
  $scope.secondSidebar = {
    "edit" : "feed",
    "share" : "history",
    "Rewards List" : "rewards"
  };
  
};

function formCtr($scope, formData, campaignData) {

  init();
  
  function init() {
    $scope.fdbkCampaign = campaignData.getCampaigns().camp0;
    $scope.title = 'Settings';
  };
 
};

function appCtr($scope, $routeParams, $location, $route) {
  
  $scope.$on("ENTERED_CAMPAIGN", function(event, id_from_instances) {
    
    $scope.$broadcast("UPDATE_CAMPAIGN_ID", id_from_instances);
  });
  
  $scope.test_value = "app";
  
  init();
  
  function init() {
    $scope.title = 'default title';
    
  };
  
  $scope.currentCampaign = "camp0";
  
  $scope.sidebar_visible = false;
  
  $scope.toggleSidebar = function(direction) {
    
    if ( (!$scope.sidebar_visible) && (direction != undefined) ) {
      
      $('.main_nav').toggleClass('visible');
      $scope.sidebar_visible = true;
      
      if (direction == 'left') {
        $('main').toggleClass('slide_left');
        $('.main_nav').addClass("invisible");
        $('.main_nav').removeClass("visible");
        $('.second_nav').addClass("visible");
        $('.second_nav').removeClass("invisible");
      }
      else if (direction == 'right') {
        $('main').toggleClass('slide_right');
        $('.main_nav').addClass("visible");
        $('.main_nav').removeClass("invisible");
        $('.second_nav').addClass("invisible");
        $('.second_nav').removeClass("visible");
      }
      
    }
    else {
      $('.main_nav').removeClass('visible');
      $scope.sidebar_visible = false;
      $('main').removeClass('slide_right');
      $('main').removeClass('slide_left');
    }

  };
  
  $scope.togglePanel = function(panelName) {
    $('aside').toggleClass('visible');
    $scope.panel=panelName;
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
  };
  
  $scope.addReply = function(post, comments) {
    comments.push({
      commentId: 1,
      author: "You",
      time: getDate(),
      text: post,
      heard: false
    });
    this.newCommentText = '';
  };
  
  $scope.isExpanded = function(instance_id) {
    return expandedReply == instance_id;
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
  
  $scope.steps = [0,1,2,3,4];
  
  $scope.currentStep = 0;
  
  $scope.resetStep = function() {
    $scope.currentStep = 0;
  };
  
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

function accountCtr($scope, userData, campaignData) {
  
  init();
  
  function init() {
    $scope.userDetails = userData.getUserDetails();
    $scope.instances = userData.getInstances();
    $scope.title = 'Settings';
  };

};

function campaignCtr($scope, $routeParams, $location, campaignData) {
    
  init();
  
  function init() {
    $scope.campaignList = campaignData.getCampaigns();
  };  
    
  if ($scope.campaignList[$routeParams.campaignId] != null) { //first make sure the campaignId from route exists
    $scope.editCampaign = angular.copy($scope.campaignList[$routeParams.campaignId]); //find campaign with id in the list of campaigns
    $scope.viewCampaign = $scope.campaignList[$routeParams.campaignId]; //find message with id in the list of campaigns
  }
  else {
    $location.path( '/dashboard' ); //redirect back to dashboard if campaign isn't found
  }
};

function campaignBuilderCtr($scope, $location, $routeParams, tempObjects, campaignData) {
    
  init();
  
  if ($scope.buildCampaign == undefined) {
     $location.path( '/dashboard' ); //redirect back to dashboard if a new campaign has not been initiated
  };
  
  function init() {
    $scope.title = 'Dashboard';
    tempObjects.updateBuildCampaign(campaignData.getCampaign($routeParams.campaignId ));
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
  
  $scope.saveChanges = function() {
    campaignData.addCampaign($routeParams.campaignId, $scope.buildCampaign);
    $scope.resetStep();
    $location.path( '/dashboard' ); //redirect back to dashboard
    
  };
  
  $scope.activateCampaign = function(campaign_id) {
    campaignData.addCampaign(campaign_id, $scope.buildCampaign);
    $scope.currentStep = 0;
  };
  
};

function dashCtr($scope, $routeParams, $location, campaignData, tempObjects) {
 
 
  $scope.test_value = "dash";
  
  $scope.edit_mode = false;
  $scope.new_mode = false;
  $scope.title = 'Dashboard';
  
  init();
  
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
    
    $location.path( '/campaign/'+datetimeId+'/edit' );
 
  };
  
};

function rewardsCtr($scope, $routeParams, $location, userData) {

  init();
  
  function init() {
    $scope.rewardsList = userData.getRewardsList();
    
    if ($scope.rewardsList[$routeParams.rewardId] != null) { //first make sure the rewardId from route exists.
      $scope.viewReward = $scope.rewardsList[$routeParams.rewardId]; //find reward with id in the list of rewards and save to variable.
      $scope.title = $scope.viewReward.title;
    }
    else {
      $location.path( "/rewards" ); //redirect back to dashboard if campaign isn't found
    };
  };

  $scope.title = 'Rewards';
  

  $scope.claimReward = function (el) {
    el.claimed = new Date();
  }

};

function CampaignRewardsCtr($scope, $routeParams, $location, campaignData) {
  
  var fullRewardsData = {};
  var closedRewards = [];
  var openRewards = [];
  init();
  
  function init() {
    fullRewardsData = campaignData.getRewardsList();
    
  };
  
  function splitRewardsList(reward) {    
    
    if (fullRewardsData[reward].date_claimed == false) {
      openRewards.push(fullRewardsData[reward]);
    }
    else {
      closedRewards.push(fullRewardsData[reward]);
    }
    
  };
  
  
  
  var rewardIds = Object.getOwnPropertyNames(fullRewardsData);
  rewardIds.forEach(splitRewardsList);
  
  

  $scope.title = 'Rewards';
  $scope.campaignId = $routeParams.campaignId;
  
  $scope.$emit("ENTERED_CAMPAIGN", {
    campaignId : $routeParams.campaignId,
  });
  
  $scope.rewardsList = [];

  $scope.rewardsList = openRewards;
  
  $scope.rewardsView = "open";

  $scope.toggleRewardsList = function() {
    if ($scope.rewardsView == "open") {
      $scope.rewardsList = [];
      $scope.rewardsList = closedRewards;
      $scope.rewardsView = "closed";
    }
    else {
      $scope.rewardsList = [];
      $scope.rewardsList = openRewards;
      $scope.rewardsView = "open";
    };
  };
  
  $scope.claimReward = function (el) {
    el.date_claimed = new Date();
        
  }

}

function CampaignRewardCtr($scope, $routeParams, $location, campaignData) {

  var fullRewardsData = {};
  init();
  
  function init() {
    fullRewardsData = campaignData.getRewardsList();
  };
  
  $scope.campaignId = $routeParams.campaignId;
  $scope.rewardId = $routeParams.rewardId;
  $scope.$emit("ENTERED_CAMPAIGN", {
    campaignId : $routeParams.campaignId,
  });
  
  if (fullRewardsData[$routeParams.rewardId] != null) { //first make sure the rewardId from route exists.
    $scope.viewReward = fullRewardsData[$routeParams.rewardId]; //find reward with id in the list of rewards and save to variable.
  }
  else {
    $location.path( "/campaign/"+$routeParams.campaignId+"/rewards" ); //redirect back to dashboard if campaign isn't found
  };
  $scope.title = $scope.viewReward.title;

  $scope.claimReward = function (el) {
    el.date_claimed = new Date();
  }

};

function inboxCtr($scope, campaignData) {
  $scope.title = 'All Incoming Feedback';
  
  init();
  
  function init() {
    $scope.campaignList = campaignData.getCampaigns();
  }; 
    
};

function instancesCtr($scope, $routeParams, $location, campaignData) {

  init();
  
  function init() {
    $scope.campaignList = campaignData.getCampaigns();
  };  

  if ($scope.campaignList[$routeParams.campaignId] != null) { //first make sure the messageId from route exists.
    $scope.viewCampaign = $scope.campaignList[$routeParams.campaignId]; //find message with id in the list of campaigns
    
    $scope.title = $scope.viewCampaign.title + " Instances";
  }
  else  {
    $location.path( "/dashboard" ); //redirect back to dashboard if campaign isn't found
  };
  
  $scope.$emit("ENTERED_CAMPAIGN", {
    campaignId : $scope.viewCampaign.id,
  });
  
  $scope.addReply = function(post, comments) {
    comments.push({
      commentId: 1,
      author: "You",
      time: getDate(),
      text: post,
      heard: false
    });
    this.newCommentText = '';
  };

}

function analyticsCtr($scope, $routeParams) {
  
  $scope.title = "Analytics";
  $scope.campaignId = $routeParams.campaignId;
  $scope.$emit("ENTERED_CAMPAIGN", {
    campaignId : $routeParams.campaignId,
  });
};


function campaignContactsCtr($scope, $routeParams, campaignData) {
  $scope.title = "Contact List";
  $scope.campaignId = $routeParams.campaignId;
  $scope.$emit("ENTERED_CAMPAIGN", {
    campaignId : $routeParams.campaignId,
  });
  
  $scope.contactList = campaignData.getContactList();
  
};