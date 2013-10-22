angular.module('customSelect',[]).directive('customSelect', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/better_select.html',
		replace: true,
		scope: {
		  options: '=options',
		  placeholder: '@',
		  returnvalue: '='
		},
		link: function($scope, elem, attr) {
		  $scope.placeholder = attr.placeholder;
		  $scope.show_options = false;
			
			$scope.selectOption = function(choice) {
			  $scope.returnvalue = choice;
			};
			
		  $scope.toggleSelector = function() {
		    $scope.show_options = !$scope.show_options;
		  };
		}
	};
});