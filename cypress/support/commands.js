// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('filloutFormElement', (selector, content, position) => {

  switch (position) {
    case undefined:
      cy.get(selector).type(content);
      break;
    case 'first':
      cy.get(selector).first().type(content);
      break;
    case 'last':
      cy.get(selector).last().type(content);
      break;
    default:
      cy.get(selector).eq(position).type(content);
      break;
  }
});
