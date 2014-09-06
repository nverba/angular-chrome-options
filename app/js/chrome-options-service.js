angular.module('optionsService', ['optionsConfig'])
  .factory('options',
    function ($window, $rootScope, $q, config) {

      var optionsService = {};

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

      optionsService.ready.then(function () {
        $rootScope.$watch( function (){ return optionsService.categories; }, function () {
          $window.chrome.storage.local.set({ 'clearCodeOptions': optionsService.categories });
        }, true);
      });

      $window.chrome.storage.onChanged.addListener(function(changes, namespace) {
        if (namespace !== 'local' || !changes.clearCodeOptions || angular.equals(optionsService.categories, changes.clearCodeOptions.newValue)) { return; }
        angular.copy(changes.clearCodeOptions.newValue, optionsService.categories);
      });

      return optionsService;

    });
