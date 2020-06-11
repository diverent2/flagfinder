describe('Detail Tabs', () => {
  beforeEach(() => {
    cy.visit('/flag/gay');
    cy.viewport('iphone-6');

    cy.get('[data-cy-tab]').as('tab');
  });

  it('updates the active button style', () => {
    const active = 'data-tab-active';

    cy.get('@tab').first().should('have.attr', active);

    cy.get('@tab')
      .last()
      .should('not.match', '[data-tab-active]')
      .wait(100) // @TODO: figure out why this is required
      .click()
      .should('have.attr', active);

    cy.get('@tab').first().should('not.match', '[data-tab-active]');
  });

  it('changes the active tab on click', () => {
    cy.get('@tab')
      .first()
      .then(($button) => {
        const tabText = $button.text().trim().toLowerCase();
        cy.get('section').should('have.attr', 'title', tabText);
      });

    cy.get('@tab')
      .not('[data-tab-active]')
      .wait(100) // @TODO: figure out why this is required
      .click()
      .then(($button) => {
        const tabText = $button.text().trim().toLowerCase();
        cy.get('section').should('have.attr', 'title', tabText);
      });
  });
  it('only shows tabs on mobile', () => {
    cy.get('@tab').should('be.visible');
    cy.viewport('macbook-11');
    cy.get('@tab').should('not.be.visible');
    cy.viewport('iphone-6');
    cy.get('@tab').should('be.visible');
  });
});
