/// <reference types = "cypress" />
// para ativar o auto complete do cypress temos que ter a pasta do node no projeto, para seta :  npm i -D cypress

describe('TC_001', () => {
  beforeEach(() => {
    cy.clearAllLocalStorage()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  })
  it('TesteLoginPage ', () => {

    cy.preencherCampos("Admin", "admin123")

    cy.get('.oxd-button').click();

  })
})