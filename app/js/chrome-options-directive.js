ChromeOptionsApp.directive('chrOption', function (config, options) {
  'use strict';

  return {

    restrict: 'A',
    scope: { chrOption: '=', chrCategory: '=' },
    templateUrl: "js/chrome-options-directive.html",
    link: function (scope, elem, attrs) {

      scope.category = scope.chrCategory.toLowerCase().replace(/ /g, "_");
      scope.option   = scope.chrOption.id.toLowerCase().replace(/ /g, "_");
      scope.options  = options.categories;
    }
  };
});
