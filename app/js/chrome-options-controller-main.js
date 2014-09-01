ChromeOptionsApp.controller('ChromeOptionsMainController', function ChromeOptionsMainController($scope, $window, options, config) {

  $scope.config  = config;
  $scope.page_id = $scope.config[0].id;

  options.ready.then(function () {
    $scope.options = options.categories;
  });

});
