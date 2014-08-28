/*global console, beforeEach, afterEach, describe, inject, module, it */

describe("optionsService", function () {
  "use strict";

  var options;

  beforeEach(module('optionsService'));

  beforeEach(inject(function(_Options_) {
    options = _Options_;
  }));

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

  describe("on load", function () {

    it("loads defaults into chrome.local.storage", function () {
      console.log('options', options);
    });
  });

});
