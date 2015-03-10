/*global console, beforeEach, afterEach, describe, inject, module, it */

describe("options:", function () {
  "use strict";

  var $rootScope, options, digest, data, configPromise, storage;

    configPromise = { then: sinon.stub().callsArgWith(0, DATA.example_config)};

    beforeEach(function (done) {

      module('options');

      angular.mock.module("config", function ($provide) {
        $provide.value('config', configPromise);
      });

      module(function($provide){
        $provide.value('$window', chromeStorageApi.window);
      });

      inject(function(_options_, _$rootScope_) {

        options            = _options_;
        $rootScope         = _$rootScope_;
        $rootScope.options = options.categories;

        digest = function () {
          setTimeout(function () {
            $rootScope.$digest();
          }, 0);
        };

        options.ready.then(function () {
          done();
        });
        digest();
      });
    });

  describe("on initialise:", function () {
    describe(".ready:", function () {
      it("should return a promise", function () {
        digest();
        return options.ready.should.be.fulfilled;
      });
    });

    describe("chrome.local.storage.set:", function () {
      it("was called with expected defaults", function () {
        return sinon.assert.calledWith(chromeStorageApi.spySet, { 'clearCodeOptions': DATA.expected_defaults });
      });
    });

    describe("options.categories:", function () {
      it("returns the default categories object", function () {
        return assert.deepEqual(options.categories, DATA.expected_defaults);
      });
    });
  });

  describe("options functions:", function () {
    describe(".mapDefaults:", function () {
      it("maps config data to default categories object", function () {
        return assert.deepEqual(options.mapDefaults(DATA.example_config.pages), DATA.expected_defaults);
      });
    });
  });

  describe("options scope:", function () {
    describe("update scope:", function () {
      it("pushes updates to local storage", function () {
        $rootScope.options.testcat_a.option_a1 = 100;
        return sinon.assert.calledWith(chromeStorageApi.spySet, { 'clearCodeOptions': DATA.updated_defaults });
      }) ;
    }) ;
  });

  describe("options storage", function () {
    describe("update storage:", function () {
      it("updates scope on local storage changes", function () {
        return assert.deepEqual(options.categories, DATA.updated_defaults);
      });
    });
  });
});
