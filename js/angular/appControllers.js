function formCtr($scope, formData, accountData) {

  init();
  
  function init() {
    $scope.fdbkCampaign = accountData.getActiveCampaigns()[0];
    $scope.title = 'Settings';
  };
 
};

function controlPanelCtr($scope) {
  
  $scope.receiveFdbk = function() {
    var campaignIndex = ['camp0', 'camp1'].sample();
    messageId = Number.random(10,500);
    var newMessage = {
      id: 'msg10',
      author: "user1",
      time: "just now",
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
          ],
          response: 4
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
          ],
          response: 50
        },
        {
          id: 'asdf3',
          type: 'freeText',
          text: "Tell us about something you like.",
          answers: [],
          response: "I like turtles."
        },
        {
          id: 'asdf4',
          type: 'number',
          text: "How old are you?",
          answers: [],
          response: 18
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
          ],
          response: 33
        }
      ],
      heard: false,
      comments: [],
      reward: {
        id: "rwd1",
        title: 'Free rocket ball',
        description: 'What is a rocket ball?',
        creator: "RocketMan",
        terms: "Guess correctly, and you get it for free!",
        exp_date: "2/28/1993",
        date_claimed: false,
        verified: false,
        owner: "user1",
        passphrase: "applegoat",
        date_issued: "1/2/1013",
        shared_with: ["Joe", "Mark", "Ruby"]
      },
      collaboration: {
        importance: false,
        tags: [],
        tagged_users: [],
        comments: []
      }
    };

    $scope.$emit("NEW_MESSAGE", campaignIndex, newMessage, messageId);
  
  };

};

function appCtr($scope, $stateParams, $state, $location, $timeout, accountData) {
  
  $scope.sortableOptions = {
    axis: 'y',
    distance: 30,
    handle: ".handle"
  };
  
  $scope.$on("NEW_MESSAGE", function(event, campaignIndex, message, messageId) {
    $scope.$broadcast("MESSAGE_RECEIVED", campaignIndex, message, messageId);
    console.log("message sent by app controller");
    
  }); 
  
    
  init();
  
  function init() {
    console.log("initialize app controller");
    $scope.title = 'default title';
    $scope.currentCampaign = "camp0";
    $scope.sidebar_visible = false; 
    
  };
  
 
  
  $scope.toggleSidebar = function(direction) {
    
    if ($stateParams.campaignId) {
      var arrayOfCampaignIds = $stateParams.campaignId.split("+");
      $scope.multipleViewCampaigns = arrayOfCampaignIds.length > 1;
    }
    
    if ( !$scope.sidebar_visible ) {
      
      $scope.sidebar_in_frame = true;
      $scope.sidebar_visible = true;
      
      $('.main_nav').toggleClass('visible');
      
      if (direction == 'left') {
        $('.main_nav').addClass("invisible");
        $('.main_nav').removeClass("visible");
      }
      else if (direction == 'right') {
        $('.main_nav').addClass("visible");
        $('.main_nav').removeClass("invisible");
        
      }
      
    }
    else {
      $('.main_nav').removeClass('visible');
      $scope.sidebar_visible = false;
      $scope.sidebar_in_frame = false;
    }

  };
  
  $scope.personal_pages_visible = false;
  
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
  
  $scope.retreatStep = function() {
    console.log($scope.currentStep)
    if ($scope.currentStep > 0) {
      $scope.currentStep = $scope.currentStep-1;
    };
  };
  
  $scope.panel = 'default';
  
};

function userCtr($scope, userData, $stateParams, accountData) {
  console.log("initialize user controller");
  init();
  
  function init() {
    $scope.$emit("ACCOUNT_CHANGED", "none", "user_settings");
    $scope.userDetails = userData.getUserDetails();
    
    $scope.accounts = accountData.getAccount();
    $scope.accountList = accountData.getAccountList();
    

    Object.keys($scope.accountList).forEach(function(account_id) {
      $scope.accountList[account_id].handle = (accountData.getAccountHandles(account_id));
    });

    $scope.title = 'Settings';
  };

  $scope.togglePersonalPages = function() {
    $scope.personal_pages_visible = !$scope.personal_pages_visible;
  };
  
  $scope.$on('ACCOUNT_CHANGED', function(event, account_id, user_page) {
    $scope.accountId = account_id;
    if (user_page) {
      $scope.personal_pages_visible = true;
      $scope.current_page = user_page;
    }
    else {
      $scope.current_page = undefined;
      $scope.personal_pages_visible = false;
    }
    console.log(user_page, $scope.current_page)
  })

};

function accountCtr($scope, $stateParams, $location, accountData) {
  console.log("initialize account controller");
  init(); 
  
  $scope.$on("MESSAGE_RECEIVED", function(event, campaignIndex, message, messageId) {
    console.log("message received by account controller");
    accountData.addMessage("account01", campaignIndex, messageId, message);
    $scope.campaignTitleList[campaignIndex].newCounter = $scope.campaignTitleList[campaignIndex].newCounter + 1;
  });
   
  function init() {
    
    $scope.$emit("ACCOUNT_CHANGED", $stateParams.accountId)

    $scope.accountId = $stateParams.accountId;

    $scope.array_of_account_ids = [];
    $scope.array_of_account_ids[0] = $scope.accountId;
    $scope.handleList = accountData.getAccountHandles($scope.accountId);
  };
};

function multiAccountsCtr($scope, $stateParams, $location, accountData) {
  console.log("initialize all accounts controller");
  init();  
  function init() {
    $scope.$emit("ACCOUNT_CHANGED", "all");
    console.log($scope.accountId)
    $scope.campaignTitleList = {};
    $scope.handle = "All Campaigns";
    $scope.campaignTitleList = accountData.getMultiAccountCampaignTitles();
    $scope.archivedCampaignList = {};
    $scope.array_of_account_ids = ["account01", "account02"];  
  };
};

function dashboardCtr($scope, $stateParams, $location, accountData) {
  console.log("initialize dashboard controller");
  $scope.campaignTitleList = accountData.getCampaignTitles($scope.accountId, true, true);
  $scope.archivedCampaignList = accountData.getArchivedCampaigns($scope.accountList[$scope.accountId].id);    
    
  checkForArchived();
  
  $scope.view_archived = false;
  $scope.edit_mode = false;
  $scope.new_mode = false;
  $scope.selected_campaigns = [];
  
  $scope.archiveListItem = function(clicked_campaign_id) {
    $scope.toggleEditMode();
    
    temp_updated_campaign = {
      archived : true
    }
        
    accountData.updateCampaign($scope.accountId, clicked_campaign_id, temp_updated_campaign);
    
    $scope.archivedCampaignList = accountData.getArchivedCampaigns($scope.accountList[$scope.accountId].id);    
    $scope.campaignTitleList = accountData.getCampaignTitles($scope.accountId, true, true); 

    checkForArchived();
  };
  
  $scope.unarchiveListItem = function(clicked_campaign_id) {
    
    temp_updated_campaign = {
      archived : false
    }
        
    accountData.updateCampaign($scope.accountId, clicked_campaign_id, temp_updated_campaign);
    
    $scope.archivedCampaignList = accountData.getArchivedCampaigns($scope.accountList[$scope.accountId].id);    
    $scope.campaignTitleList = accountData.getCampaignTitles($scope.accountId, true, true); 

    checkForArchived();
  };

  $scope.step_one = true;
  $scope.new_campaign_title = '';
  
  $scope.chooseToDuplicate = function(choice) {
    $scope.duplicate_mode = choice;
    $scope.new_mode_step = 'two';
  };
  
  function checkForArchived() {
    if ( Object.isEmpty($scope.archivedCampaignList) ) {
      $scope.archiveExists = false;
    }
    else {
      $scope.archiveExists = true;
    }
    
    if ( Object.isEmpty($scope.campaignTitleList) ) {
      $scope.archiveExists = true;
    }
  
  }
  
  $scope.toggleArchived = function() {
    $scope.view_archived = !$scope.view_archived;
  };
  
  $scope.selectCampaign = function(campaign_id, account_id) {
    
    var selected_campaigns_url_string = "";
    
    if ( $scope.selected_campaigns.some(campaign_id) ) {
      $scope.selected_campaigns.remove(campaign_id);
    }
    else {
      $scope.selected_campaigns.push(campaign_id);
    };
    
    if ($scope.selected_campaigns.length == 0) {
      $scope.edit_mode = false;
      $scope.disable_single_edit_buttons = false;
      $scope.edit_link = "";
      selected_campaigns_url_string = "";
    }
    else if ($scope.selected_campaigns.length == 1) {
      $scope.edit_mode = true;
      $scope.disable_single_edit_buttons = false; 
      $scope.edit_link = "#/account/"+account_id+"/campaign/"+$scope.selected_campaigns[0]+"/edit";
      selected_campaigns_url_string = selected_campaigns_url_string.add(campaign_id);
      $scope.view_link = "#/account/"+account_id+"/campaign/{1}/conversations".assign(selected_campaigns_url_string);
    }
    else if ( $scope.selected_campaigns.length >= 2 ) {
      $scope.edit_mode = true;
      $scope.disable_single_edit_buttons = true;
      $scope.edit_link = "";
      $scope.selected_campaigns.forEach(function(campaign_id) {
        selected_campaigns_url_string = selected_campaigns_url_string.add("+"+campaign_id);
        while(selected_campaigns_url_string.charAt(0) === '+') {
            selected_campaigns_url_string = selected_campaigns_url_string.substr(1);
        };
        $scope.view_link = "#/account/"+account_id+"/campaign/{1}/conversations".assign(selected_campaigns_url_string);
      });
    };
    
  };
  
  $scope.toggleEditMode = function() {
    $scope.edit_mode = !$scope.edit_mode;
    $scope.new_mode = false;
    $scope.selected_campaigns = [];
    
  };
  
  $scope.toggleNewMode = function() {
    $scope.new_mode = !$scope.new_mode;
    $scope.duplicate_mode = false;
    $scope.show_handle_options = false;
    $scope.show_campaign_options = false;
    
    if ($scope.new_mode) {
      $scope.new_mode_step = 'one';
    }
    else {
      $scope.new_mode_step = 'two';
    }
  };
  
  $scope.deleteAnyListItems = function(checked_items, parent_object) { //deletes any item from an ng-repeat list
      var shortened_list = Object.reject(parent_object, checked_items);
      $scope.toggleEditMode();
      parent_object = shortened_list;
  };
  
  function Campaign(id, handle, title, local, location, discoverable) {
    
    this.id = id,
    this.archived = false,
    this.newCounter = 0,
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
    console.log(new_campaign_title)
    var datetimeId = Date.now();
        
    var temp_builder = new Campaign(datetimeId, handle, new_campaign_title, is_local, new_campaign_locale, discoverable);
    
    accountData.addCampaign($scope.accountId, temp_builder.id, temp_builder);
    $scope.campaignTitleList = accountData.getCampaignTitles($scope.accountId, true, true);
    
    
    $location.path( '/account/'+$scope.accountId+'/campaign/'+datetimeId+'/edit' );
 
  };
  
  $scope.duplicateCampaign = function(title, campaign_id, handle_id_to_use) {
    
    var datetime = new Date().getTime();
    
    
    var temporary_duplicate = {};
    console.log($scope.accountId, campaign_id)
    var temporary_duplicate = accountData.getMetaData($scope.accountId, campaign_id);
    
    temporary_duplicate.title = title;
    temporary_duplicate.id = datetime;
    temporary_duplicate.handle = handle_id_to_use;
    temporary_duplicate.archived =false;
        
    accountData.addCampaign($scope.accountId, datetime, angular.copy(temporary_duplicate));
    $scope.campaignTitleList = accountData.getCampaignTitles($scope.accountId, true, true); 
          
    console.log($scope.campaignTitleList)
          
    $scope.duplicating_mode = false;
    
    $scope.buildCampaign = angular.copy(temporary_duplicate);
    $location.path( '/account/'+$scope.accountId+'/campaign/'+temporary_duplicate.id+'/edit' );
  };
  
};

function campaignCtr($scope, $state, $stateParams, $location, accountData) {
  console.log("initialize campaign controller")
  
  init();

  $scope.$on("MESSAGE_RECEIVED", function(event, campaignIndex, message, messageId) {
    console.log("message received by campaign controller");
    $scope.viewCampaign.conversations = accountData.getConversations(["account01"], [campaignIndex]);
  });
  
  $scope.$on("CAMPAIGN_PAGE_CHANGED", function() {
  
    $scope.currentPage = $state.current.url;
 
  });
    
  function init() {
    var arrayOfCampaignIds = [];
    arrayOfCampaignIds = $stateParams.campaignId.split("+");
    $scope.arrayOfCampaignIds = arrayOfCampaignIds;
    $scope.currentPage = $state.current.url;
    console.log($scope.currentPage)

    if (arrayOfCampaignIds.length == 1) {     
      if (accountData.checkIfCampaignExist($scope.array_of_account_ids,$stateParams.campaignId)) {
        $scope.campaignId = $stateParams.campaignId;
        console.log("one campaign and it exists in account "+$scope.array_of_account_ids + $scope.campaignId);
        
        $scope.campaignTitleList = accountData.getCampaignTitles($scope.array_of_account_ids, true, false);
        
        $scope.campaignTitle = $scope.campaignTitleList[$scope.campaignId].title;
        $scope.campaignHandle = $scope.campaignTitleList[$scope.campaignId].handle;
        setViewCampaign(arrayOfCampaignIds);
      }
      else {
        console.log("one campaign and it doesn't exist in account");
        $location.path( "account/"+$scope.accountId+"/dashboard" );
      }
      
    }
    else {
      $scope.campaignHandle = $scope.handle;
      $scope.campaignTitle = "Multiple Campaigns";
      setViewCampaign(arrayOfCampaignIds);
    }    
    
    var mergedconversations = {};
    var mergedRewards = {};
    var mergedContacts = {};
    
     
  };  
  
  $scope.campaignNav_true = false;
  $scope.toggleNavbar = function(open) {

    if (open == true) {
      $scope.campaignNav_true = true;
    }
    else if (open == false) {
      $scope.campaignNav_true = false;
    }
    else {
      $scope.campaignNav_true = !$scope.campaignNav_true;
    }
  };
  
  function splitCampaignIdsFromUrl() {
  
     arrayOfCampaignIds = $stateParams.campaignId.split("+");
    
  
  };
  
  function setViewCampaign(array_of_campaign_ids) {
    console.log("set view campaign(s)")
  
    $scope.viewCampaign = {};
    $scope.viewCampaign.conversations = accountData.getConversations($scope.array_of_account_ids, array_of_campaign_ids);
  };
    
};

function campaignBuilderCtr($scope, $location, $stateParams, accountData) {
  console.log("initialize builder controller");  
  init();
  
  if ($scope.buildCampaign == undefined) {
     $location.path( '/account/'+$scope.accountId+'/dashboard' ); //redirect back to dashboard if a new campaign has not been initiated
  };
  
  function init() {
    
    $scope.$emit("CAMPAIGN_PAGE_CHANGED");
    
    var arrayOfCampaignIds = [];
    arrayOfCampaignIds = $stateParams.campaignId.split("+");
    $scope.buildCampaign = {};
    
    var metaData = accountData.getMetaData($scope.array_of_account_ids, arrayOfCampaignIds);
    $scope.buildCampaign.questionsList = metaData.questionsList;
    $scope.buildCampaign.locationsList = metaData.locationsList;
    $scope.buildCampaign.permissions = metaData.permissions;
    $scope.buildCampaign.reward = metaData.activeReward;
    
    if ($scope.reward_type == undefined) {
      $scope.reward_type = "location";
    }
    
  };
  
  $scope.questionTypeOptions = [
    {
      id: 'binary',
      text: "Yes/No"
    },
    {
      id: 'rating',
      text: "Rating"
    },
    {
      id: 'freeText',
      text: "Text"
    },
    {
      id: 'multipleChoice',
      text: "Choice"
    },
    {
      id: 'number',
      text: "Number"
    }
  ];
  
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
      date_sent: new Date().getTime(),
      level: level_input
    });
  };
  
  $scope.addAnswer = function(input_text, answers) {
    answers.push({
      id: new Date().getTime(),
      text: input_text
    });
  };
  
  $scope.deleteQuestion = function(index) {
    $scope.buildCampaign.questionsList.splice(index, 1);  
  };
  
  $scope.deleteListItem = function(index, parent_object) {
    parent_object.splice(index, 1);  
  };
  
  $scope.editing_question = false;
  var buildQuestionIndex;
  
  $scope.togglePanel = function(panelName) {  //this function is also in here because of different scoped buildQuestions. I'm tired. bad note. we just need separate functions for the individual panels. :/
  
    $scope.panel=panelName;
    
    $scope.palette_visible = !$scope.palette_visible;
    
    $scope.buildQuestion = {
        id: "",
        type: "freeText",
        text: "",
        answers: []
    };
    
    $scope.editing_question = false;
  };
  
  $scope.editQuestion = function(index) {
    buildQuestionIndex = index;
    var original_question = angular.copy($scope.buildCampaign.questionsList[index]);
    
    $scope.togglePanel('Create Question');
    $scope.buildQuestion = angular.copy(original_question);
    
    
    //hacky thing that makes the saved question type work with the custom select element. ugh.
    $scope.buildQuestion.type = $scope.questionTypeOptions.find(function(option) {
      return option['id'] == $scope.buildQuestion.type
    });
    console.log($scope.buildQuestion.type)
    
    $scope.editing_question = true;
  };
  
  $scope.addLocation = function(input_location, list_of_locations) {    
    list_of_locations.push({
      id: new Date().getTime(),
      text: angular.copy(input_location)
    });
    this.addLocation_address.text = "";
  };
  
  $scope.saveQuestion = function() {
    
    //hacky thing because the custom-select directive needs to be reworked when I have time.
    $scope.buildQuestion.type = $scope.buildQuestion.type.id;
    
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
        }
      ];
    };
    if ($scope.buildQuestion.type == 'binary') {
      $scope.buildQuestion.answers = [
          {
            id: 0,
            text: "Yes"
          },
          {
            id: 2,
            text: "No"
          }
        ];
    };
    
    if ($scope.editing_question == false) {
      $scope.buildCampaign.questionsList.push(angular.copy($scope.buildQuestion));
    }
    else {
      $scope.buildCampaign.questionsList[buildQuestionIndex] = angular.copy($scope.buildQuestion);
    }
    
    $scope.togglePanel();
    $scope.editing_question = false;
    $scope.buildQuestion = {
        id: "",
        type: "",
        text: "",
        answers: []
    };
  };
  
  $scope.saveChanges = function() {
    var accountId = accountData.getMultiAccountCampaignTitles()[$stateParams.campaignId].account_id;
    accountData.updateCampaign(accountId, $stateParams.campaignId, $scope.buildCampaign);
    $scope.resetStep();
    $location.path( '/account/'+$scope.accountId+'/campaign/'+$stateParams.campaignId+'/conversations' ); //redirect back to dashboard
    
  };
  
  $scope.activateCampaign = function(campaign_id) {
    accountData.addCampaign(campaign_id, $scope.buildCampaign);
    $scope.currentStep = 0;
  };
  
};

function userSettingsCtr($scope) {
  init();

  function init() {
    $scope.$emit("ACCOUNT_CHANGED", "none", "user_settings");
  }
}

function userHistoryCtr($scope) {
  init();

  function init() {
    $scope.$emit("ACCOUNT_CHANGED", "none", "user_history");
  }
}

function userRewardsCtr($scope, $stateParams, $location, userData) {
  console.log("initialize user rewards controller");
  init();
  
  function init() {
    $scope.$emit("ACCOUNT_CHANGED", "none", "user_bonuses");  
    $scope.rewardsList = userData.getRewards("open");

  };

  $scope.title = 'Rewards';
  

  $scope.claimReward = function (el) {
    el.claimed = new Date();
  }

};

function CampaignRewardsCtr($scope, $stateParams, $location, accountData) {
  console.log("initialize rewards controller");
  init();
  
  $scope.title = 'Rewards';
  
  function init() {
    $scope.$emit("CAMPAIGN_PAGE_CHANGED");
    $scope.viewCampaign.rewards = accountData.getRewards($scope.array_of_account_ids, $scope.arrayOfCampaignIds, "open");
    
  };
  
  
  $scope.addRewards = function(queried_status) {
    $scope.viewCampaign.rewards.add(accountData.getRewards($scope.array_of_account_ids, $scope.arrayOfCampaignIds, queried_status));
    $scope.viewCampaign.rewards = $scope.viewCampaign.rewards.unique(function(obj) {
      return obj.id;
    });
  };  
  
  //set search query to be an object and set initial view to show only open rewards
  $scope.search_query = {};
  $scope.rewardsView = "open";
  $scope.search_query.status = $scope.rewardsView;

  $scope.toggleRewardsList = function(queried_status) {
    
    $scope.addRewards(queried_status);
    $scope.rewardsView = queried_status;
      $scope.search_query.status = queried_status;
    
  };
  
  $scope.claimReward = function (el) {
    el.date_claimed = new Date();
    el.status = "redeemed";
  }

};

function CampaignRewardCtr($scope, $stateParams, $location, accountData) {

  var fullRewardsData = {};
  var arrayOfCampaignIds = $stateParams.campaignId.split("+");
  
  init();
  
  function init() {
    fullRewardsData = accountData.getRewardsList(arrayOfCampaignIds);
  };
  
  $scope.campaignId = $stateParams.campaignId;
  $scope.rewardId = $stateParams.rewardId;
  
  if (fullRewardsData[$stateParams.rewardId] != undefined) { //first make sure the rewardId from route exists.
    $scope.viewReward = fullRewardsData[$stateParams.rewardId]; //find reward with id in the list of rewards and save to variable.
    $scope.title = $scope.viewReward.title;
     
  }
  else {
    $location.path( "/campaign/"+$stateParams.campaignId+"/rewards" ); //redirect back to dashboard if campaign isn't found
  };

  $scope.claimReward = function (el) {
    el.date_claimed = new Date();
  }

};

function inboxCtr($scope, accountData) {
  $scope.title = 'All Incoming Feedback';
  init();
  
  function init() {

  }; 
    
};

function conversationsCtr($rootScope, $scope, $stateParams, $location, accountData) {
  console.log("initialize conversation controller");
  $scope.$emit("CAMPAIGN_PAGE_CHANGED");
  $scope.title = "Conversations";
  $scope.conversationDetailView = false;
    
  $scope.toggleToolPanel = function(conversation_object) {
    if (conversation_object) {
      $scope.conversationDetailView = true;
      $scope.viewConversation = conversation_object.collaboration;
      $location.path("/account/"+$scope.accountId+"/campaign/"+$scope.campaignId+"/conversations/"+conversation_object.id);
    }
    else {
      $scope.conversationDetailView = false;
      $location.path("/account/"+$scope.accountId+"/campaign/"+$stateParams.campaignId+"/conversations/");
    }
  };
  
};

function collabToolsCtr($scope, $stateParams) {
  console.log("initialize tools controller");
//  $scope.conversationDetailView = true;
  
  $scope.conversationId = $stateParams.conversationId;
  
  $scope.addTopicTag = function(submitted_tag, conversationAttributes) {
    conversationAttributes.tags.push(submitted_tag);
    $scope.topic_tag.$setPristine();
    $scope.tag_to_submit = "";
  };
  
  $scope.addUserTag = function(submitted_user, conversationAttributes) {
      conversationAttributes.tagged_users.push(submitted_user);
      $scope.user_tag.$setPristine();
      $scope.user_to_submit = "";  
    };
  
  $scope.removeTag = function(tag_to_remove, conversation) {
    var tag_index = conversation.indexOf(tag_to_remove);
    conversation = conversation.splice(tag_index, 1);
  };
  
  $scope.addComment = function(post, comments) {
    comments.push({
      commentId: 1,
      author: "You",
      time: new Date().getTime(),
      text: post,
      heard: false
    });
    
    $scope.comment_text = "";
    $scope.comment_form.$setPristine();
  };

};

function instanceCtr($scope) {

  $scope.full_form_view_on = false;

  $scope.toggleFullFormView = function() {
    $scope.full_form_view_on = !$scope.full_form_view_on;
  };
  
  if ($scope.instance.comments.length >= 3) {
    $scope.isExpandable = true;
  }
  else {
    $scope.isExpandable = false
  };
  
  $scope.hearIt = function(el) {
    el.heard = true;
  };
  
  $scope.instance.heardConditions = true;
  
  $scope.checkHeardConditions = function(textInput) {

    if (textInput) {
      console.log($scope.instance.comments.last().author)
      if ($scope.instance.comments.last().author == "You" || textInput.length > 0 ) {
        $scope.instance.heardConditions = false;
      }
      else {
        $scope.instance.heardConditions = true;
      }
    }else {
      if ($scope.instance.comments.last().author == "You" ) {
        $scope.instance.heardConditions = false;
      }
      else {
        $scope.instance.heardConditions = true;
      }
    }
    
    
    
  };
  
  $scope.expandReplies = function(convo) {
    if ( convo.cap == -2) {
      convo.cap = 8;
      convo.isExpanded = true;
    }
    else {
      convo.cap = -2;
      convo.isExpanded = false;
    }
  };
  
  $scope.addReply = function(post, comments) {
    comments.push({
      commentId: 1,
      author: "You",
      time: new Date().getTime(),
      text: post,
      heard: false
    });
    this.newCommentText = '';
    
    if ($scope.instance.comments.length >= 3) {
      $scope.isExpandable = true;
    }
    else {
      $scope.isExpandable = false;
    };
    $scope.checkHeardConditions();
  };
  
  $scope.addHeard = function() {
    $scope.instance.comments.push({
      commentId: 1,
      author: 'You',
      time: new Date().getTime(),
      text: 'Your word was herd. That\'s the bird.',
      heard: true
    });
    this.newCommentText = '';
    
    if ($scope.instance.comments.length >= 3) {
      $scope.isExpandable = true;
    }
    else {
      $scope.isExpandable = false;
    };
    $scope.checkHeardConditions();
  };
    
};

function analyticsCtr($scope, $stateParams) {
  
  $scope.title = "Analytics";
  $scope.$emit("CAMPAIGN_PAGE_CHANGED");

  $scope.xAxisTickFormat = function(){
     return function(d){
        return d3.time.format('%b %d')(new Date(d));
     }
  }

  $scope.dailyData =  [
    {
      "key": "Series 1",
      "values": [[ 1025409600000 , 2.5] , [ 1026088000000 , 3] , [ 1028088000000 , 3] , [ 1029088000000 , 3] , [ 1030766400000 , 1]]
    },
    {
      "key": "Series 2",
      "values": [[ 1025409600000 , 1] , [ 1026088000000 , 3] , [ 1028088000000 , 4] , [ 1029088000000 , 3] , [ 1030766400000 , 7]] 
    }
  ];

  $scope.xFunction = function(){
    return function(d) {
        return d.key;
    };
  }
  $scope.yFunction = function(){
    return function(d) {
        return d.y;
    };
  }

  $scope.catData = [
    {
      key: "Great!",
      y: 4
    },
    {
      key: "Good",
      y: 2
    },
    {
      key: "Ok",
      y: 2
    },
    {
      key: "Poor",
      y: 1
    },
    {
      key: "Bad",
      y: 1
    }
  ]
};

function campaignContactsCtr($scope, $stateParams, $location, accountData) {
  console.log("initialize contacts controller");
  
  $scope.$emit("CAMPAIGN_PAGE_CHANGED");
  $scope.title = "Contact Details";
  $scope.campaignId = $stateParams.campaignId;
  $scope.userId = $stateParams.userId;
  
  $scope.convoList = [];
  
  var arrayOfCampaignIds = $stateParams.campaignId.split("+");
  
  
  var contactIdList = accountData.getContactList($scope.accountId, arrayOfCampaignIds);
  contactIdList = contactIdList.unique();
  $scope.contactList = [];
  
};