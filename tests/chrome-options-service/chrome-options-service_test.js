/*global console, beforeEach, afterEach, describe, inject, module, it */

describe("optionsService", function () {
  "use strict";

  var options;

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
      $provide.value('$window', function () {
        return  {
          chrome:{ storage:{ local: {
            set:    sinon.spy(),
            get:    sinon.spy(),
            remove: sinon.spy(),
            clear:  sinon.spy()
          }}},
          addEventListener: sinon.spy()
        };
      });
    });
  });

  beforeEach(inject(function(_Options_) {
    options = _Options_;
  }));

  describe("on load", function () {

    it("loads defaults into chrome.local.storage", function () {


    });
  });

});
