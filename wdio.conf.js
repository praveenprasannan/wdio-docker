exports.config = {
  path: '/',

  specs: [
    './tests/**/*.js'
  ],

  capabilities: [{
    browserName: 'chrome',
    maxInstances: 2
  }],

  runner: 'local',
  logLevel: 'error',

  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  bail: 0,

  services: ['chromedriver'],
  reporters: ['spec'],
  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
