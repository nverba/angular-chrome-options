ChromeOptionsApp.directive('chromeOption', function (config) {
  'use strict';

  return {

    restrict: 'A',
    scope: { chromeOption: '=' },
    templateUrl: "js/chrome-options-directive.html",
    link: function (scope, elem, attrs) {

    }
  };
});
