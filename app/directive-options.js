app.directive('chrOption', ['options', function (options) {
  'use strict';

  return {

    restrict: 'A',
    replace: 'true',
    scope: { chrOption: '=', chrCategory: '=' },
    templateUrl: "directive-options.html",
    link: function (scope, elem, attrs) {

      var actions = {
        reset: function () {
          angular.copy(options.defaults[scope.chrCategory], options.categories[scope.chrCategory]);
        }
      };

      scope.action = function (name) {
        actions[name]();
      };

      options.ready.then(function () {
        scope.options = options.categories;
      });
    }
  };
}]);
