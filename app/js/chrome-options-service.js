angular.module('optionsService', ['optionsConfig', 'angularResolver'])
  .factory('options',
    function ($window, config, Resolver) {

      var optionsService = {};

      //optionsService.ready = Resolver.deferr();

      optionsService.mapDefaults = function mapDefaults(configObject) {
        var response = {};
        angular.forEach(configObject, function (page) {
          angular.forEach(page.categories, function (category) {
            var cat = category.category_id.toLowerCase().replace(' ', '_');
            response[cat] = {};
            angular.forEach(category.options, function (option) {
              var opt = option.alias || option.option_id.toLowerCase().replace(' ', '_');
              response[cat][opt] = option.default;
            });
          });
        });
        return response;
      };

      return optionsService;

    });
