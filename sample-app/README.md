Use gulp dist-to-sample to move updated dist folder to sample-app under node_modules
Other node_module dependencies for sample-app need to be loaded separately
The sample-app folder is not submitted to Git, do not edit files there directly!!!


from project root

    gulp dist-to-sample

From sample-app root

    npm install

Then from chrome extensions page, enable __Developer mode__, click __Load unpacked extension__.

To access the sample page options, you can click on the options link in the extensions page under __Chrome Options__, or right click the icon in the browser toolbar.
