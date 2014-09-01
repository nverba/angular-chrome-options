ChromeOptionsApp.directive('optionsPages', function (config) {
  'use strict';

  return {

    restrict: 'E',
    scope: { pageId: '=' },
    templateUrl: "chrome-options-directive-page.html",
    link: function (scope, elem, attrs) {

      console.log('loaded directive');

      console.log(scope.pageId);

    }
  };
});
