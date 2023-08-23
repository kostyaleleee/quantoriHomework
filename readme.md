npm init -y 
npm init wdio //  Webdriver IO setup

? A project named "quantorihomework" was detected at "E:\quantoriHomework", correct? Yes
*****
? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
*****
? Where is your automation backend located? On my local machine
*****
? Which environment you would like to automate? Web - web applications in the browser
*****
? With which browser should we start? Chrome
*****
? Which framework do you want to use? Mocha (https://mochajs.org/)
*****
? Do you want to use a compiler? No!
*****
? Do you want WebdriverIO to autogenerate some test files? (Y/n)
***** 

? Which reporter do you want to use? (Press <space> to select, <a> to toggle all, <i> to 
invert selection, and <enter> to proceed)
❯◉ spec - enter

? Do you want to add a plugin to your test setup? (Press <space> to select, <a> to toggle 
all, <i> to invert selection, and <enter> to proceed)
❯◯ wait-for - enter

? Do you want to add a service to your test setup? (Press <space> to select, <a> to toggle 
all, <i> to invert selection, and <enter> to proceed)
❯◉ chromedriver - enter

? What is the base url? (http://localhost) - enter

? Do you want me to run `npm install` (Y/n) y

npm install chromedriver@116 --save-dev // current version of chrome

npx wdio wdio.conf.js --spec <pathToFile> - fast way to run scenario