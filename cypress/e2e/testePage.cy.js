/// <reference types = "cypress" />
// para ativar o auto complete do cypress temos que ter a pasta do node no projeto, para seta :  npm i -D cypress

// melhorando escalabilidade dos testes , consumindo um json com dados.

import userData from "../fixtures/userData.json";

const {
  button,
  clickInfo,
  firstName,
  midleName,
  lastName,
  employID,
} = require("../support/commands");

describe("featureLoginPage", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    // setando a url base no arquivo de configuração cypress.config.js
    cy.visit("/auth/login");
  });
  //it.skip para pular o teste.
  it("Login - Sucesso", () => {
    cy.preencherCampos(userData.userSucess.user, userData.userSucess.passWord);
    cy.get(button).click();

    // verifica se estamos no lugar correto, e fazendo um double check com com o .get
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").contains("Dashboard");
  });
  it("Login - Falho", () => {
    cy.preencherCampos(userData.userFail.user, userData.userFail.passWord);
    cy.get(button).click();
    cy.get(".oxd-alert-content > .oxd-text");
  });

  it.only("userUpdar - Seccess", () => {
    cy.preencherCampos(userData.userSucess.user, userData.userSucess.passWord);
    cy.get(button).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.visit(clickInfo);

    cy.get(firstName).clear().type(userData.Dados.firstName);
    cy.get(midleName).clear().type(userData.Dados.midleName);
    cy.get(lastName).clear().type(userData.Dados.lastName);

    // acessar uma posição especifica do HTML collection eq(4) quando ah diversos botoes com o mesmo nome no html
    cy.get(employID).eq(4).clear().type(userData.Dados.employID);


  });
});
