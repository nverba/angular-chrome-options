## angular-chrome-options

__angular-chrome-options__ is an experimental __AngularJS__ app that generates an options page for Chrome apps and extensions from a single JSON manifest located in the root of the application.

Checkout `options.json.sample` to see how to generate an options page.

Options can then be used in your application by injecting the __options-module__ (if your app is also an AngularJS app), or observing changes to `chrome.storage` (for plain JavaScript).

_Whilst this is experimental and not all features are complete, it is stable enough to use, and I have this version working in a production application. [Clear Code](https://chrome.google.com/webstore/detail/clear-code/glnikohjhmkofkfcphgbdlmhjdjffcmg)_

The application makes use of the css from [chrome-bootstrap](https://github.com/better-history/chrome-bootstrap).

The long term plan is to wait for the Chrome developers to finalise their plan to make native options page styles available to all developers, they have specified that this will not include any data binding and will not be able to generate options pages as a feature, so I hope to use some version of this library to fulfill that purpose. Quick and easy options pages.

You can see the spec document for this feature here: [Extension Options V2](https://docs.google.com/document/d/1CLh2RtQs0bx9GnAUl7V2HTzXnfO7z2Q7J623SyNXR4M/edit#heading=h.uoul2c1z9oo4), and follow its progress [here](https://code.google.com/p/chromium/issues/detail?id=386830).


### Sample App

_The sample app must be built, then loaded as an unpacked Chrome Extension._

Use `gulp build-sample` to move updated dist folder to sample-app under node_modules.

_Other node_module dependencies for sample-app need to be loaded separately, the sample-app folder is not submitted to Git, do not edit files there directly!!!_ use `gulp sample-watch` to auto compile any changes into this directory when in development.

    // From sample-app root
    
    npm install
    
    // From project root
    
    gulp dist-to-sample


Then from chrome extensions page, enable __Developer mode__, click __Load unpacked extension__.

To access the sample page options, you can click on the options link in the extensions page under __Chrome Options__, or right click the icon in the browser toolbar.
