/*global console, beforeEach, afterEach, describe, inject, module, it */

describe("optionsService", function () {
  "use strict";

  var options, $rootScope, digest;

  var storageAPI = {
    set:    function () {},
    get:    function () {},
    remove: function () {},
    clear:  function () {}
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

  var expectedDefaults = { testcat_a: { option_a1: 4 }, testcat_b: { option_b1: 5, option_b2: 6, }, testcat_c: { option_c1: 4 }, testcat_d: { option_e1: 5 }};

  var spyStorageSet    = sinon.spy(storageAPI, "set");
  var spyStorageGet    = sinon.stub(storageAPI, "get").callsArgWith(1, { 'clearCodeOptions': expectedDefaults });
  var spyStorageRemove = sinon.spy(storageAPI, "remove");
  var spyStorageClear  = sinon.spy(storageAPI, "clear");


  beforeEach(module('optionsService'));

  beforeEach(function () {
    angular.mock.module("optionsConfig", function ($provide) {
      $provide.value('config', exampleConfig);
    });
  });

  beforeEach(function () {
    module(function($provide){
      $provide.value('$window', { chrome: { storage: { local: storageAPI }}});
    });
  });

  beforeEach(inject(function(_options_, _$rootScope_) {
    options = _options_;
    $rootScope = _$rootScope_;

    digest = function () {
      setTimeout(function () {
        $rootScope.$digest();
      }, 0);
    };
  }));

  describe("app init:", function () {

    it(".ready should return a promise", function () {

      digest();

      return options.ready.should.be.fulfilled;

    });

    it("map defaults into chrome.local.storage", function () {

      sinon.assert.calledWith(spyStorageSet, { 'clearCodeOptions': expectedDefaults });

    });

    it("exposes a category object", function (done) {

      digest();

      options.ready.then(function () {
        assert.deepEqual(options.categories, {});
      });

    });
  });

  describe("functions:", function () {

    it("maps config to categories of default values, substituting aliased option names", function () {

      assert.deepEqual(options.mapDefaults(exampleConfig), expectedDefaults);

    });
  });

  describe("save/update:", function () {

    it.skip("pushes changes to storage.local when the scope is updated", function () {

    });

    it.skip("can update user style sheets on theme selection", function () {

    });
  });


});
