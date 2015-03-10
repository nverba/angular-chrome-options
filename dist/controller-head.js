angular.module('ChromeOptions')
  .controller('HeadCtrl', ['$scope', 'config', HeadCtrlFn]);

function HeadCtrlFn($scope, config) {

  config.then(function (configs) {
    $scope.app_name = configs.app_name;
  });
}
