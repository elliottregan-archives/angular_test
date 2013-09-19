var appmodule = angular.module('appmodule', ['ui.sortable', 'ui.router']).
  config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/account/account01/dashboard")
    
    $stateProvider.
      state('form', {
        templateUrl: 'partials/form.html', 
        controller: formCtr
      }).
      state('account', {
        url: '/account/:accountId',
        templateUrl: 'partials/account.html', 
        controller: accountCtr
      }).
      state('all_accounts', {
        url: '/account/all',
        templateUrl: 'partials/account.html', 
        controller: multiAccountsCtr
      }).
      state('all_accounts.dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/dashboard.html', 
        controller: dashboardCtr
      }).
      state('account.dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/dashboard.html', 
        controller: dashboardCtr
      }).
      state('all_accounts.campaign', {
        url: '/campaign/:campaignId',
        templateUrl: 'partials/campaign.html',
        controller: campaignCtr
      }).
      state('account.campaign', {
        url: '/campaign/:campaignId',
        templateUrl: 'partials/campaign.html',
        controller: campaignCtr
      }).
      state('all_accounts.campaign.conversations', {
        url: '/conversations',
        templateUrl: 'partials/conversations.html',
        controller: conversationsCtr
      }).
      state('account.campaign.conversations', {
        url: '/conversations',
        templateUrl: 'partials/conversations.html',
        controller: conversationsCtr
      }).
      state('all_accounts.campaign.conversations.tools', {
        url: '/:conversationId',
        templateUrl: 'partials/tools.html',
        controller: collabToolsCtr
      }).
      state('account.campaign.conversations.tools', {
        url: '/:conversationId',
        templateUrl: 'partials/tools.html',
        controller: collabToolsCtr
      }).
      state('all_accounts.campaign.edit', {
        url: '/edit',
        templateUrl: 'partials/edit.html',
        controller: campaignBuilderCtr
      }).
      state('account.campaign.edit', {
        url: '/edit',
        templateUrl: 'partials/edit.html',
        controller: campaignBuilderCtr
      }).
      state('feed', {
        url: '/feed',
        templateUrl: 'partials/inbox.html',
        controller: inboxCtr
      }).
      state('user_reward_detail', {
        url: '/rewards/"rewardId',
        templateUrl: 'partials/reward_info.html',
        controller: rewardsCtr
      }).
      state('account.campaign.rewards', {
        url: '/rewards',
        templateUrl: 'partials/campaign_rewards.html',
        controller: CampaignRewardsCtr
      }).
      state('account.campaign.rewards.info', {
        url: '/:rewardId',
        templateUrl: 'partials/campaign_reward_info.html',
        controller: CampaignRewardCtr
      }).
      state('account.campaign.contacts', {
        url: '/contacts',
        templateUrl: 'partials/campaign_contacts.html',
        controller: campaignContactsCtr
      }).
      state('account.campaign.contacts.info', {
        url: '/:userId',
        templateUrl: 'partials/user_info.html',
        controller: campaignContactsCtr
      }).
      state('account.campaign.analytics', {
        url: '/analytics',
        templateUrl: 'partials/analytics.html',
        controller: analyticsCtr
      }).
      state('user_rewards', {
        url: '/rewards',
        templateUrl: 'partials/rewards.html',
        controller: rewardsCtr
      }).
      state('settings', {
        url: '/settings',
        templateUrl: 'partials/settings.html',
      }).
      state('history', {
        url: '/history',
        templateUrl: 'partials/history.html',
      });
});