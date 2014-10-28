__angular-chrome-options__ is an experimental __AngularJS__ app that generates an options page for Chrome apps and extensions from a single JSON manifest located in the root of the application.

Checkout `options.json.sample` to see how to generate an options page.

Options can then be used in your application by injecting the `service-options.js` service (if your app is also an AngularJS app), or observing changes to `chrome.storage` (for plain JavaScript).

This application is intended to be distributed as a Bower component, whilst it is experimental, it is stable enough to use, and I have this version working in a production application. [Clear Code](https://chrome.google.com/webstore/detail/clear-code/glnikohjhmkofkfcphgbdlmhjdjffcmg)

The application makes use of the css from [chrome-bootstrap](https://github.com/better-history/chrome-bootstrap). This seems to be in flux at the moment, some of the links on the github page are dead and the Bower listing has disappeared in the last few weeks.

The long term plan is to wait for the Chrome developers to finalise their plan to make native options page styles available to all developers, they have specified that this will not include any data binding and will not be able to generate options pages as a feature, so I hope to use some version of this library to fulfill that purpose. Quick and easy options pages.

You can see the spec document for this feature here: [Extension Options V2](https://docs.google.com/document/d/1CLh2RtQs0bx9GnAUl7V2HTzXnfO7z2Q7J623SyNXR4M/edit#heading=h.uoul2c1z9oo4), and follow its progress [here](https://code.google.com/p/chromium/issues/detail?id=386830).


If you want adapt this script, you will need to check out the angular-chrome-options-container. Due to the nature of distributing a complete AngularJS app as a bower component with parallel dependencies to Angular and other libs, also distributed as bower components, it is developed as a submodule within this parent container. This is also where the tests live.

Watch out for Git submodules if you haven't worked with them before. They're tricky.


