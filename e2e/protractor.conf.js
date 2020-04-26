const { SpecReporter } = require('jasmine-spec-reporter')

// https://github.com/angular/protractor/blob/master/lib/config.ts
module.exports.config = {
  baseUrl: 'http://automationpractice.com/',
  specs: ['specs/*.js'],
  onPrepare: () => {
    browser.waitForAngularEnabled(false),
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true
        },
        spec: {
          displayFailed: true,
          displayPending: true,
          displayDuration: true,
          displayStackTrace: true
        },
        summary: {
          displayFailed: true
        }
      })
    )
  }
}