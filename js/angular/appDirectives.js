appmodule.directive('jqDraggable', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attr, ctrl) {
			elem.draggable();
		}
	};
});