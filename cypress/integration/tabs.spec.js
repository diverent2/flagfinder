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
        const tabText = $button.text();
        cy.get('section [data-section-title]').should('contain', tabText);
        cy.contains(tabText);
      });
    cy.percySnapshot('tabs--first-tab-active');

    cy.get('@tab')
      .not('[data-tab-active]')
      .wait(100) // @TODO: figure out why this is required
      .click()
      .then(($button) => {
        const tabText = $button.text();
        cy.get('section [data-section-title]').should('contain', tabText);
        cy.contains(tabText);
      });
    cy.percySnapshot('tabs--second-tab-active');
  });
  it('only shows tabs on mobile', () => {
    cy.get('@tab').should('be.visible');
    cy.viewport('macbook-11');
    cy.get('@tab').should('not.be.visible');
    cy.viewport('iphone-6');
    cy.get('@tab').should('be.visible');
  });
});
