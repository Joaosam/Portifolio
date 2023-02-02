/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    theme(value: string): Chainable<Element>;
  }
}
Cypress.Commands.add("theme", (theme: string) => {
  cy.get(
    `[title="Alternar entre modo claro e escuro - atualmente modo ${theme}"]`
  );
});
