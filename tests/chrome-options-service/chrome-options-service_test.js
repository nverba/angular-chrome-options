/*global console, beforeEach, afterEach, describe, inject, module, it */

describe("optionsService", function () {
  "use strict";

  var options;

  var storageAPI = { chrome: { storage: { local: {
    set:    function () {},
    get:    function () {},
    remove: function () {},
    clear:  function () {}
  }}}};

  var spyStorageSet    = sinon.spy(storageAPI.chrome.storage.local, "set");
  var spyStorageGet    = sinon.spy(storageAPI.chrome.storage.local, "get");
  var spyStorageRemove = sinon.spy(storageAPI.chrome.storage.local, "remove");
  var spyStorageClear  = sinon.spy(storageAPI.chrome.storage.local, "clear");

  beforeEach(module('optionsService'));

  beforeEach(function () {
    angular.mock.module("optionsConfig", function ($provide) {
      $provide.value('config', [

        { page_id: 'TestPage A', sections:
          [
            { category_id: 'TestCat A', options: [{ option_id: 'Option A1', default: 4, type: 'number', min: 1, max: 8 }]},
            { category_id: 'TestCat B', options: [{ option_id: 'Option B1', default: 4, type: 'number', min: 1, max: 8 }]}
          ]
        }
      ]);
    });
  });

  beforeEach(function () {
    module(function($provide){
      $provide.value('$window', storageAPI);
    });
  });

  beforeEach(inject(function(_Options_) {
    options = _Options_;
  }));

  describe("on load", function () {

    it("loads maps defaults into chrome.local.storage", function () {


    });
  });

});
