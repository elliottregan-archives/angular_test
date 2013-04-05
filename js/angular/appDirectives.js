//Adapted from vanilla ngViewDirective 

appmodule.directive('deepnav', function ($http, $templateCache, $route, $anchorScroll, $compile, $controller) {
    return {
        restrict:'ECA',
        terminal:true,
        link:function (scope, parentElm, attr) {
            var TRANSITION_TIME = 1000,
              partials = [],
              inClass = "in",
              outClass = "out",
              currentPartial, lastPartial;
            
            scope.$on('$routeChangeSuccess', update);
            update();
            
            var currentLayer = '';
            if (currentLayer != "main") {
              var lastLayer = 'main';
            }
            else {
              lastLayer = '';
            }
            var layerSwitch = '';
            
            //'Angularize' a partial: Create scope/controller, $compile element, insert into dom
            function setupPartial(partial) {
              var cur = $route.current;
              partial.scope = cur.locals.$scope = scope.$new();
              partial.controller = $controller(cur.controller, cur.locals);
              partial.element.contents().data('$ngControllerController', partial.controller);
              $compile(partial.element.contents())(partial.scope);
              parentElm.append(partial.element);
              partial.scope.$emit('$viewContentLoaded');
              
              lastLayer = currentLayer;
            }
            
            //Create just an element for a partial
            function createPartial(template) {
              console.log("create! "+layerSwitch);
              if (layerSwitch && (currentLayer != "main")) {
                return {
                  element: angular.element('<div id="two" class="page level_two">').html(template)
                };
              }else {
                return {
                  element: angular.element('<div id="one" class="page">').html(template)
                };
              }
              
              
            }
            
            function destroyPartial(partial) {
              partial.scope.$destroy();
              partial.element.remove();
              partial = null;
            } 
            
            /*//Transition end stuff from bootstrap:
            //http://twitter.github.com/bootstrap/assets/js/bootstrap-transition.js
            var transEndEventNames = {
              'WebkitTransition': 'webkitTransitionEnd', 
              'MozTransition': 'transitionend',
              'OTransition': 'oTransitionEnd otransitionend',
              'transition': 'transitionend'
            };
            function onTransitionEnd(el, callback) {
              for (name in transEndEventNames) {
                if (el.style[name] !== undefined) {
                  el.on(transEndEventNames[name], callback);
                }
            }*/
            
            function transition(inPartial, outPartial) {
              inPartial.element.addClass(inClass);
              if (outPartial) outPartial.element.addClass(outClass);
              
              if (outPartial && layerSwitch) {
                
              }
              
              console.log("layerswitch: "+layerSwitch);
              
              setTimeout(function() {
                inPartial.element.removeClass(inClass);
                if (outPartial) destroyPartial(outPartial);
                updatePartialQueue();
              }, TRANSITION_TIME);
            }
            
            function updatePartialQueue() {
              //Bring in a new partial if it exists
              if (partials.length > 0) {            
                var newPartial = partials.pop();
                setupPartial(newPartial);
                transition(newPartial, currentPartial);
                currentPartial = newPartial; 
              }
            } 
            
            function update() {
                if ($route.current && $route.current.locals.$template) {
                  currentLayer = $route.current.layer;
                  
                  console.log("currentLayer: "+currentLayer);
                  console.log("lastLayer: "+lastLayer);
                  //checks to see if view changes layer.
                  console.log((currentLayer == lastLayer));
                  
                  if ( (lastLayer == 'none') || (currentLayer == lastLayer) ) {
                    layerSwitch = false;
                  }
                  else {
                    layerSwitch = true;
                  }
                
                  partials.unshift(createPartial($route.current.locals.$template));
                  updatePartialQueue();
                  
                  
                }
            }
        }
    };
});