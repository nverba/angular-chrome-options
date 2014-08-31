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
    { page_id: 'TestPage 1', categories:
      [
        { category_id: 'TestCat A', options: [{ option_id: 'Option A1', default: 4, type: 'number' }]},
        { category_id: 'TestCat B', options: [{ option_id: 'Option B1', default: 5, type: 'number' }, { option_id: 'Option B2', default: 6, type: 'number' }]}
      ]
    },
    { page_id: 'TestPage 2', categories:
      [
        { category_id: 'TestCat C', options: [{ option_id: 'Option C1', default: 4, type: 'number' }]},
        { category_id: 'TestCat D', options: [{ option_id: 'Option D1', alias: 'option_e1', default: 5, type: 'number' }]}
      ]
    }
  ];

  var expected_defaults = { testcat_a: { option_a1: 4 }, testcat_b: { option_b1: 5, option_b2: 6, }, testcat_c: { option_c1: 4 }, testcat_d: { option_e1: 5 }};
  var updated_defaults  = { testcat_a: { option_a1: 100 }, testcat_b: { option_b1: 5, option_b2: 6, }, testcat_c: { option_c1: 4 }, testcat_d: { option_e1: 5 }};
  var spyStorageSet     = sinon.spy(storageAPI.local, "set");
  var spyStorageGet     = sinon.stub(storageAPI.local, "get").callsArgWith(1, { 'clearCodeOptions': angular.copy(expected_defaults) });

  beforeEach(function () {

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
        sinon.assert.calledWith(spyStorageSet, { 'clearCodeOptions': expected_defaults });
      });
    });

    describe("options.categories:", function () {
      it("returns the default categories object", function () {
        digest();
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
    afterEach(function () {
      $rootScope.options.testcat_a.option_a1 = 4;
    });
    describe("update scope:", function () {
      it("pushes updates to local storage", function () {
        $rootScope.options.testcat_a.option_a1 = 100;
        sinon.assert.calledWith(spyStorageSet, { 'clearCodeOptions': updated_defaults });
      }) ;
    }) ;
  });

  describe("options storage", function () {
    describe("update storage:", function () {
      it("updates scope on local storage changes", function () {
        //console.log(options.categories);
        //return assert.deepEqual(options.categories, updated_defaults);
      });
    });
  });


});
