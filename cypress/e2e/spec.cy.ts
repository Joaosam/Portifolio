/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    theme(value: string): Chainable<Element>;
  }
}

describe("Index spec", () => {
  it("should be able navigation in the site", () => {
    cy.contains("li", "Sobre mim").click();
    cy.wait(1500);
    cy.contains("li", "Conhecimentos").click();
    cy.wait(1500);
    cy.contains("li", "Projetos").click();
    cy.wait(1500);
    cy.contains("li", "Home").click();
  });

  it("shoud be able change theme", () => {
    cy.theme("escuro").click();
    cy.theme("claro").should("be.visible");

    cy.wait(1500);

    cy.theme("claro").click();
    cy.theme("escuro").should("be.visible");
  });

  it("should display skills", () => {
    cy.contains("li", "TypeScript").trigger("mouseover");
    cy.get(".sc-hBxehG").should("be.visible");
  });

  it("should display projects", () => {
    cy.get('[data-testid="project"]').eq(0).trigger("mouseover");
  });
});
