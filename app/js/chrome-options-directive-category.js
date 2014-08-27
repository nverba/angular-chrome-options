ChromeOptionsApp.directive('optionsCategory', function () {
  'use strict';

  return {

    restrict: 'E',
    scope: { },
    templateUrl: "chrome-options-directive-category.html",
    link: function (scope, elem, attrs) {

      scope.resetCat = function () {

      };
    }
  };
});
