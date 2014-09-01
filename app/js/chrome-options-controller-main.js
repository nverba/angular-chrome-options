ChromeOptionsApp.controller('ChromeOptionsMainController', function ChromeOptionsMainController($scope, $window, options, config) {

  $scope.config  = config;
  $scope.page_id = $scope.config[0].id;

  $scope.selectPage = function (id) {
    $scope.page_id = id;
  };

  options.ready.then(function () {
    $scope.options = options.categories;
  });

});
