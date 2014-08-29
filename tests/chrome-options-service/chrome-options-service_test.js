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

  beforeEach(module('optionsService'));

  beforeEach(function () {
    angular.mock.module("optionsConfig", function ($provide) {
      $provide.value('config', [

        { page_id: 'TestPage A', sections:
          [
            { category_id: 'TestCat A', options: [{ option_id: 'Option A1', default: 4, type: 'number', min: 1, max: 8 }]},
            { category_id: 'TestCat B', options: [{ option_id: 'Option B1', default: 5, type: 'number', min: 1, max: 8 }]}
          ]
        }
      ]);
    });
  });

  beforeEach(function () {
    module(function($provide){
      $provide.value('$window', { chrome: { storage: { local: storageAPI }}});
    });
  });

  beforeEach(inject(function(_Options_) {
    options = _Options_;
  }));

  describe("app init:", function () {

    it.skip("should return a promise for the .ready function", function () {

    });

    it.skip("maps defaults into chrome.local.storage", function () {

      sinon.assert.calledWith(spyStorageSet, { testcat_a: { option_a1: 4 }, testcat_b: { option_b1: 5 }});

    });

    it.skip("exposes a category object", function () {

    });
  });

  describe("save/update:", function () {

    it.skip("pushes changes to storage.local when the scope is updated", function () {

    });

    it.skip("can update user style sheets on theme selection", function () {

    });
  });




});
