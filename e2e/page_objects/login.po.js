
const helper = require('protractor-helper')

const emailInput = element(by.id('email'))
const passwordInput = element(by.id('passwd'))
const SubmitButton = element(by.id('SubmitLogin'))

const msgPasswordRequired = element(by.cssContainingText('.alert-danger', 'Password is required.'))
const msgEmailRequired = element(by.cssContainingText('.alert-danger', 'An email address required.'))
const msgErro = element.all(by.className('alert alert-danger')).first()

function visit() {
  browser.get('index.php?controller=authentication&back=my-account')
}

function login(email, senha) {
  helper.fillFieldWithText(emailInput, email)
  helper.fillFieldWithText(passwordInput, senha)
  helper.click(SubmitButton)
}

module.exports = {
  msgEmailRequired,
  msgErro,
  msgPasswordRequired,
  visit,
  login
}
