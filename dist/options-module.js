(function () { 'use strict';

  angular.module('options', ['config'])
    .factory('options', ['$window', '$rootScope', '$q', 'config', optionsFn]);

  function optionsFn($window, $rootScope, $q, config) {

    var optionsService = {};

    // fn: return 'response' object of defaults from supplied confic object.

    optionsService.mapDefaults = function mapDefaults(configObject) {
      var response = {};
      angular.forEach(configObject, function (page) {
        angular.forEach(page.categories, function (category) {
          response[category.id] = {};
          angular.forEach(category.options, function (option) {
            response[category.id][option.id] = option.default;
          });
        });
      });
      return response;
    };

    // Initialise service with storage results, or fall back to mapped defaults from config object.
    // Whilst the get operation resolves the deferrer, the result is bound to a seperate 'categories' object.
    // Returning the result with the promise would break scope bindings.

    var deferred = $q.defer();
    optionsService.ready = deferred.promise;

    (function initOptions() {
      config.then(function (configs) {
        $window.chrome.storage.local.get({ 'clearCodeOptions': optionsService.mapDefaults(configs.pages) }, function (response) {
          optionsService.categories = response.clearCodeOptions;
          optionsService.defaults   = optionsService.mapDefaults(configs.pages);
          deferred.resolve();
        });
      });
    }());

    // Config watcher to update local storage, whenever scope is updated.

    optionsService.ready.then(function () {
      $rootScope.$watch( function (){ return optionsService.categories; }, function () {
        $window.chrome.storage.local.set({ 'clearCodeOptions': optionsService.categories });
      }, true);
    });

    // Pick up changes in local storage, and push to scope. Allows several instances of options service (client page/options page) to stay in sync.

    $window.chrome.storage.onChanged.addListener(function(changes, namespace) {
      if (namespace !== 'local' || !changes.clearCodeOptions || angular.equals(optionsService.categories, changes.clearCodeOptions.newValue)) { return; }
      angular.copy(changes.clearCodeOptions.newValue, optionsService.categories);
      $rootScope.$apply();
    });

    return optionsService;

  }
})();
