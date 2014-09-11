ChromeOptionsApp.controller('ChromeOptionsMainController', ['$scope', 'config', function ChromeOptionsMainController($scope, config) {

  config.then(function (configs) {
    $scope.config  = configs;
    $scope.page_id = $scope.config.pages[0].id;
  });

  $scope.search  = {};

  $scope.selectPage = function (id) {
    $scope.page_id = id;
  };
}]);
