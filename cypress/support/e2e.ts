/// <reference types="cypress" />
import "./custom_commands";

beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.visit("/");
});
