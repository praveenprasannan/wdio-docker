var expect = require('chai').expect

describe('WebdriverIO website', () => {
  describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        expect(browser.getTitle()).to.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
  });
});
