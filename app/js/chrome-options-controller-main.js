ChromeOptionsApp.controller('ChromeOptionsMainController', function ChromeOptionsMainController($scope, config) {

  $scope.config  = config;
  $scope.page_id = $scope.config[0].id;

  $scope.selectPage = function (id) {
    $scope.page_id = id;
  };
});
