(function () { 'use strict';

  angular.module('ChromeOptions')
    .directive('option', ['options', optionFn]);

  function optionFn(options) {

    return {

      restrict: 'A',
      replace: 'true',
      scope: { option: '=', category: '=' },
      templateUrl: "directive-options.html",
      link: function (scope, elem, attrs) {

        var actions = {
          reset: function () {
            angular.copy(options.defaults[scope.category.id], options.categories[scope.category.id]);
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
  }
})();
