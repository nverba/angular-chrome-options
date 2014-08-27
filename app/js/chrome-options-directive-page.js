ChromeOptionsApp.directive('optionsPage', function () {
  'use strict';

  return {

    restrict: 'E',
    scope: { },
    templateUrl: "chrome-options-directive-page.html",
    link: function (scope, elem, attrs) {

      scope.resetCat = function () {

      };
    }
  };
});
