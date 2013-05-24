var appmodule = angular.module('appmodule', ['ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/discover', {
        templateUrl: 'partials/index.html', 
        controller: discoveryCtr,
        layer: 'main'
      }).
      when('/form', {
        templateUrl: 'partials/form.html', 
        controller: formCtr,
        layer: 'layer1'
      }).
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html', 
        controller: dashCtr,
        layer: 'main'
      }).
      when('/feed', {
        templateUrl: 'partials/inbox.html',
        controller: inboxCtr,
        layer: 'main'
      }).
      when('/rewards', {
        templateUrl: 'partials/rewards.html',
        controller: rewardsListCtr,
        layer: 'main'
      }).
      when('/rewards/:rewardId', {
        templateUrl: 'partials/reward_info.html',
        controller: rewardCtr,
        layer: 'layer1'
      }).
      when('/campaign/:campaignId/instances/', {
        templateUrl: 'partials/instances.html',
        controller: instancesCtr,
        layer: 'layer1'
      }).
      when('/campaign/:campaignId/instance/:instanceId', {
        templateUrl: 'partials/instance.html',
        controller: instanceCtr,
        layer: 'layer2'
      }).
      when('/campaign/:campaignId', {
        templateUrl: 'partials/campaign_info.html',
        controller: campaignCtr,
        layer: 'layer1'
      }).
      when('/campaign/:campaignId/edit', {
        templateUrl: 'partials/edit.html',
        controller: campaignCtr,
        layer: 'layer1'
      }).
      when('/new', {
        templateUrl: 'partials/new.html',
        controller: campaignBuilderCtr,
        layer: 'layer1'
      }).
      when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: accountCtr,
        layer: 'main'
      }).
      when('/history', {
        templateUrl: 'partials/history.html',
        controller: accountCtr,
        layer: 'main'
      }).
      otherwise({redirectTo: '/dashboard'});
}]);

appmodule.run(function($templateCache,$http) {
  $http.get('partials/dashboard.html', {cache:$templateCache});
  $http.get('partials/new.html', {cache:$templateCache});
  $http.get('partials/edit.html', {cache:$templateCache});
  $http.get('partials/inbox.html', {cache:$templateCache});
  $http.get('partials/instance.html', {cache:$templateCache});
  $http.get('partials/campaign_info.html', {cache:$templateCache});
  $http.get('partials/rewards.html', {cache:$templateCache});
  $http.get('partials/reward_info.html', {cache:$templateCache});
});