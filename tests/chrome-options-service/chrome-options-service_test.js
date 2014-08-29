/*global console, beforeEach, afterEach, describe, inject, module, it */

describe("optionsService", function () {
  "use strict";

  var options;

  var storageAPI = {
    set:    function () {},
    get:    function () {},
    remove: function () {},
    clear:  function () {}
  };

  var spyStorageSet    = sinon.spy(storageAPI, "set");
  var spyStorageGet    = sinon.spy(storageAPI, "get");
  var spyStorageRemove = sinon.spy(storageAPI, "remove");
  var spyStorageClear  = sinon.spy(storageAPI, "clear");

  var exampleConfig = [
    { page_id: 'TestPage 1', categories:
      [
        { category_id: 'TestCat A', options: [{ option_id: 'Option A1', default: 4, type: 'number', min: 1, max: 8 }]},
        { category_id: 'TestCat B', options: [{ option_id: 'Option B1', default: 5, type: 'number', min: 1, max: 8 }]}
      ]
    },
    { page_id: 'TestPage 2', categories:
      [
        { category_id: 'TestCat C', options: [{ option_id: 'Option C1', default: 4, type: 'number', min: 1, max: 8 }]},
        { category_id: 'TestCat D', options: [{ option_id: 'Option D1', alias: 'option_e1', default: 5, type: 'number', min: 1, max: 8 }]}
      ]
    }
  ];

  var expectedDefaults = { testcat_a: { option_a1: 4 }, testcat_b: { option_b1: 5 }, testcat_c: { option_c1: 4 }, testcat_d: { option_e1: 5 }};

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

  beforeEach(inject(function(_options_) {
    options = _options_;
  }));

  describe("app init:", function () {

    it.skip("should return a promise for the .ready function", function () {

      return options.ready.should.be.fulfilled;

    });

    it.skip("maps defaults into chrome.local.storage", function () {

      sinon.assert.calledWith(spyStorageSet, { testcat_a: { option_a1: 4 }, testcat_b: { option_b1: 5 }});

    });

    it.skip("exposes a category object", function () {

    });
  });

  describe("functions:", function () {

    it("maps a config array to object of defaults, substituting aliased option names", function () {

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
