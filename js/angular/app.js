var appmodule = angular.module('appmodule', ['ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html', 
        controller: dashCtr,
        layer: 'main'
      }).
      when('/edit/:campaignId', {
        templateUrl: 'partials/edit.html',
        controller: campaignCtr,
        layer: 'layer1'
      }).
      when('/new', {
        templateUrl: 'partials/new.html',
        controller: dashCtr,
        layer: 'layer1'
      }).
      when('/inbox', {
        templateUrl: 'partials/inbox.html',
        controller: inboxCtr,
        layer: 'main'
      }).
      otherwise({redirectTo: '/dashboard'});
}]);

appmodule.run(function($templateCache,$http) {
  $http.get('partials/dashboard.html', {cache:$templateCache});
  $http.get('partials/new.html', {cache:$templateCache});
  $http.get('partials/edit.html', {cache:$templateCache});
  $http.get('partials/inbox.html', {cache:$templateCache});
});