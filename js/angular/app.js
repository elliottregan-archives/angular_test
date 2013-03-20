var appmodule = angular.module('appmodule', ['ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'view1.html', 
        controller: dashCtr
      }).
      when('/edit/:campaignId', {
        templateUrl: 'view2.html',
        controller: campaignCtr
      }).
      when('/new', {
        templateUrl: 'new.html',
        controller: dashCtr
      }).
      otherwise({redirectTo: '/dashboard'});
}]);