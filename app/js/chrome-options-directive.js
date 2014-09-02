ChromeOptionsApp.directive('chrOption', function (options) {
  'use strict';

  return {

    restrict: 'A',
    scope: { chrOption: '=', chrCategory: '=' },
    templateUrl: "js/chrome-options-directive.html",
    link: function (scope, elem, attrs) {

      scope.options = options.categories;

    }
  };
});
