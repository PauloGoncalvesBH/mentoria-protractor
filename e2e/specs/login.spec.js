const helper = require('protractor-helper')

const login = require('../page_objects/login.po')

describe('Testes de login', () => {
  beforeEach(() => login.visit())
  
  it('tentativa de login sem senha', () => {
    login.login('teste@gmail.com', '')
    helper.waitForElementVisibility(login.msgPasswordRequired)
  })

  it('login sem sucesso', () => {
    login.login('teste@gmail.com', 'senha')
    helper.waitForElementVisibility(login.msgErro)
  })

  it('tentativa de login sem email', () => {
    login.login('', 'senha')
    helper.waitForElementVisibility(login.msgEmailRequired)
  })
})
