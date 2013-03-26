var appmodule = angular.module('appmodule', ['ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'dashboard.html', 
        controller: dashCtr,
        layer: 'main'
      }).
      when('/edit/:campaignId', {
        templateUrl: 'edit.html',
        controller: campaignCtr,
        layer: 'layer1'
      }).
      when('/new', {
        templateUrl: 'new.html',
        controller: dashCtr,
        layer: 'layer1'
      }).
      when('/inbox', {
        templateUrl: 'inbox.html',
        controller: inboxCtr,
        layer: 'main'
      }).
      otherwise({redirectTo: '/dashboard'});
}]);