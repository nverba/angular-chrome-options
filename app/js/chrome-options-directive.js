ChromeOptionsApp.directive('chrOption', function (options, config) {
  'use strict';

  return {

    restrict: 'A',
    replace: 'true',
    scope: { chrOption: '=', chrCategory: '=' },
    templateUrl: "js/chrome-options-directive.html",
    link: function (scope, elem, attrs) {

      var actions = {
        reset: function () {
          angular.copy(options.defaults[scope.chrCategory], options.categories[scope.chrCategory]);
        }
      };

      scope.action = function (name) {
        actions[name]();
      };

      scope.options = options.categories;
    }
  };
});
