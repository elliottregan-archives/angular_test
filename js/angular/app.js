var appmodule = angular.module('appmodule', ['ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html', 
        controller: dashCtr,
        layer: 'main'
      }).
      when('/inbox', {
        templateUrl: 'partials/inbox.html',
        controller: inboxCtr,
        layer: 'main'
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
        controller: dashCtr,
        layer: 'layer1'
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
});