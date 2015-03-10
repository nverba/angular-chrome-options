(function () { 'use strict';

  angular.module('config', [])
    .factory('config', ['$http', '$q',  function ($http, $q) {

      var defer = $q.defer();

      $http.get('../../../chrome-options.json').success(function (result) {
        defer.resolve(result);
      });

      return defer.promise;

    }]);
})();
