// Reference: https://on.cypress.io/custom-commands

import '@percy/cypress';

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

Cypress.Commands.add('checkIfComponentIsUpdated', (selector, dataAttribute) => {
  cy.get(`${selector}[${dataAttribute}="true"]`);
  cy.get(`${selector}[${dataAttribute}="false"]`);
});
