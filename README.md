### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)

## Setup Instructions

This is a starter project for creating an HTML/CSS/JS application.

### Application Setup

Step 0. Please completely read and thoroughly understand the instructions below before performing them.

Step 1. Download Install Node.js version 8 or higher. Version 6 or higher MUST be installed. If you have an older Node.js version that you need to keep, then use something like [NVM](https://www.npmjs.com/package/nvm) to manage multiple Node.js installations. To install Node.js click [here](https://nodejs.org).

Note: Seriously, please use Node version 6 or higher. There are certain features such as destructuring and spreads which will not work with earlier versions of Node.js. If you use an earlier version your code will fail.

Step 2. Download the repository as a zip file. Extract the zip file to a working folder on your system.

Step 3. Open a new terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
npm i && npm start
```

This set has been completed successfully when you receive the following message:

```bash
[1] Child html-webpack-plugin for "index.html":
[1]     chunk    {0} index.html 541 kB [entry] [rendered]
[1]         [0] ./~/lodash/lodash.js 540 kB {0} [built]
[1]         [1] ./~/html-webpack-plugin/lib/loader.js!./src/index.html 607 bytes {0} [built]
[1]         [2] (webpack)/buildin/global.js 509 bytes {0} [built]
[1]         [3] (webpack)/buildin/module.js 517 bytes {0} [built]
[1] webpack: Compiled successfully.
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. Open a web browser, and navigate to [http://localhost:8080](http://localhost:8080).  The starter web application should load and be usable.

Note: This command will run, and then wait for file changes to process updated source code from the **public** folder. Webpack does **NOT** exit and return to a terminal prompt. Please do not close this terminal window.

#### To Modify the Web Application

Step 6. Open text editor and modify the files in the **public** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and load it into the memory of the web server. To see the changes, reload your web browser (live reload is enabled so reloading will probably occur automatically).

### NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - starts the web server and REST server
