angular.module('optionsConfig', [])
  .factory('config', function ($http, $q) {

    var defer = $q.defer();

    $http.get('/options.json').success(function (result) {
      defer.resolve(result);
    });

    return defer.promise;

  });
