var appmodule = angular.module('appmodule', ['ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/form', {
        templateUrl: 'partials/form.html', 
        controller: formCtr
      }).
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html', 
        controller: dashCtr
      }).
      when('/feed', {
        templateUrl: 'partials/inbox.html',
        controller: inboxCtr
      }).
      when('/rewards', {
        templateUrl: 'partials/rewards.html',
        controller: rewardsCtr
      }).
      when('/rewards/:rewardId', {
        templateUrl: 'partials/reward_info.html',
        controller: rewardsCtr
      }).
      when('/campaign/:campaignId/instances*instanceId', {
        templateUrl: 'partials/instances.html',
        controller: instancesCtr
      }).
      when('/campaign/:campaignId/edit', {
        templateUrl: 'partials/edit.html',
        controller: campaignBuilderCtr
      }).
      when('/campaign/:campaignId/rewards', {
        templateUrl: 'partials/campaign_rewards.html',
        controller: CampaignRewardsCtr
      }).
      when('/campaign/:campaignId/rewards/:rewardId', {
        templateUrl: 'partials/campaign_reward_info.html',
        controller: CampaignRewardCtr
      }).
      when('/campaign/:campaignId/contacts', {
        templateUrl: 'partials/campaign_contacts.html',
        controller: campaignContactsCtr
      }).
      when('/campaign/:campaignId/contacts/:userId', {
        templateUrl: 'partials/user_info.html',
        controller: campaignContactsCtr
      }).
      when('/campaign/:campaignId/analytics', {
        templateUrl: 'partials/analytics.html',
        controller: analyticsCtr
      }).
      when('/settings', {
        templateUrl: 'partials/settings.html',
      }).
      when('/history', {
        templateUrl: 'partials/history.html',
      }).
      otherwise({redirectTo: '/dashboard'});
}]);

appmodule.run(function($templateCache,$http) {
  $http.get('partials/dashboard.html', {cache:$templateCache});
  $http.get('partials/edit.html', {cache:$templateCache});
  $http.get('partials/inbox.html', {cache:$templateCache});
  $http.get('partials/instance.html', {cache:$templateCache});
  $http.get('partials/campaign_info.html', {cache:$templateCache});
  $http.get('partials/rewards.html', {cache:$templateCache});
  $http.get('partials/reward_info.html', {cache:$templateCache});
});