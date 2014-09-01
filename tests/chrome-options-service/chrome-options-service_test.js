/*global console, beforeEach, afterEach, describe, inject, module, it */

describe("optionsService:", function () {
  "use strict";

  var options, $rootScope, digest;

  var storageAPI = {
    local : {
      set:    function () {},
      get:    function () {},
      remove: function () {},
      clear:  function () {}
    },

    onChanged: {
      addListener: function () {}
    }
  };

  var exampleConfig = [
    { id: 'TestPage 1', categories:
      [
        { id: 'TestCat A', options: [{ id: 'Option A1', default: 4, type: 'number' }]},
        { id: 'TestCat B', options: [{ id: 'Option B1', default: 5, type: 'number' }, { id: 'Option B2', default: 6, type: 'number' }]}
      ]
    },
    { id: 'TestPage 2', categories:
      [
        { id: 'TestCat C', options: [{ id: 'Option C1', default: 4, type: 'number' }]},
        { id: 'TestCat D', options: [{ id: 'Option D1', alias: 'option_e1', default: 5, type: 'number' }]}
      ]
    }
  ];

  var expected_defaults   = { testcat_a: { option_a1: 4 }, testcat_b: { option_b1: 5, option_b2: 6, }, testcat_c: { option_c1: 4 }, testcat_d: { option_e1: 5 }};
  var updated_defaults    = { testcat_a: { option_a1: 100 }, testcat_b: { option_b1: 5, option_b2: 6, }, testcat_c: { option_c1: 4 }, testcat_d: { option_e1: 5 }};
  var spyStorageSet       = sinon.spy(storageAPI.local, "set");
  var spyStorageGet       = sinon.stub(storageAPI.local, "get").callsArgWith(1, { 'clearCodeOptions': angular.copy(expected_defaults) });
  var spyStorageOnChanged = sinon.stub(storageAPI.onChanged, "addListener").onCall(5).callsArgWith(0, { 'clearCodeOptions': { newValue: updated_defaults } }, 'local');

  beforeEach(function (done) {

    module('optionsService');

    angular.mock.module("optionsConfig", function ($provide) {
      $provide.value('config', exampleConfig);
    });

    module(function($provide){
      $provide.value('$window', { chrome: { storage: storageAPI }});
    });

    inject(function(_options_, _$rootScope_) {
      options = _options_;
      $rootScope = _$rootScope_;
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
        return sinon.assert.calledWith(spyStorageSet, { 'clearCodeOptions': expected_defaults });
      });
    });

    describe("options.categories:", function () {
      it("returns the default categories object", function () {
        return assert.deepEqual(options.categories, expected_defaults);
      });
    });
  });

  describe("options functions:", function () {
    describe(".mapDefaults:", function () {
      it("maps config data to default categories object, substituting aliased option names", function () {
        return assert.deepEqual(options.mapDefaults(exampleConfig), expected_defaults);
      });
    });
  });

  describe("options scope:", function () {
    describe("update scope:", function () {
      it("pushes updates to local storage", function () {
        $rootScope.options.testcat_a.option_a1 = 100;
        return sinon.assert.calledWith(spyStorageSet, { 'clearCodeOptions': updated_defaults });
      }) ;
    }) ;
  });

  describe("options storage", function () {
    describe("update storage:", function () {
      it("updates scope on local storage changes", function () {
        return assert.deepEqual(options.categories, updated_defaults);
      });
    });
  });
});
