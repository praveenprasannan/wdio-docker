const video = require('wdio-video-reporter');

const config = {
  specs: [
    './tests/**/*.js'
  ],

  capabilities: [
    {
      maxInstances: 2,
      browserName: 'chrome',
      'goog:chromeOptions': {
        prefs: {
          'profile.managed_default_content_settings.popups': 2,
          'profile.managed_default_content_settings.notifications': 2
        }
      }
    },
    {
      maxInstances: 1,
      browserName: 'firefox'
    }
  ],

  outputDir: './_results_',

  reporters: [
    'spec',
    [video, {
      saveAllVideos: false,
      videoSlowdownMultiplier: 3,
      videoRenderTimeout: 5
    }],
    ['allure', {
      outputDir: './_results_/allure-raw',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true
    }]
  ],

  logLevel: 'info',
  coloredLogs: true,
  deprecationWarnings: true,

  baseURL: 'http://localhost:8080',

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  sync: true,
  bail: 0,
  maxInstances: 10,

  runner: 'local',
  services: undefined,
  waitforTimeout: 60000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  // Setup the browser window
  before: () => {
    browser.setWindowPosition(0, 0);
    browser.setWindowSize(1280, 960);
    // browser.url('https://oneflare.com.au');
  }
};

module.exports = {
  config: {
    ...config
  }
};
