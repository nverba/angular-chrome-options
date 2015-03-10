var chromeStorageApi = (function () {

  var store = {};

  var mock_window = { chrome: { storage: {

    local: {
      set:    function (datum) { var key = Object.keys(datum)[0]; store[key] = datum[key] },
      get:    function (key) { return store[key] },
      remove: function (key) { delete store[key] }
    },

    onChanged: {
      addListener: function () {}
    }

  }}};

  return {

    window: mock_window,

    spySet: sinon.spy(mock_window.chrome.storage.local, "set"),

    stubGet: sinon.stub(mock_window.chrome.storage.local, "get").callsArgWith(1, { 'clearCodeOptions': angular.copy(DATA.expected_defaults) }),

    stubOnChanged: sinon.stub(mock_window.chrome.storage.onChanged, "addListener").onCall(5).callsArgWith(0, { 'clearCodeOptions': { newValue: DATA.updated_defaults } }, 'local')

  }
})();