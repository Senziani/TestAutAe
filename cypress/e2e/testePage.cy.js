/// <reference types = "cypress" />
// para ativar o auto complete do cypress temos que ter a pasta do node no projeto, para seta :  npm i -D cypress

describe('featureLoginPage', () => {
  beforeEach(() => {
    cy.clearAllLocalStorage()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
  //it.skip para pular o teste.
  it('Login - Sucesso', () => {
    cy.preencherCampos("Admin", "admin123")
    cy.get("[type='submit']").click();

    // verifica se estamos no lugar correto, e fazendo um double check com com o .get
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')

  })
  it('Login - Falho', () => {

    cy.preencherCampos("Admin", "admin1223")
    cy.get("[type='submit']").click();
    cy.get('.oxd-alert-content > .oxd-text')
  })

})