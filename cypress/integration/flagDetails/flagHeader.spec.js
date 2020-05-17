describe('Header for flag info', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-6');
  });

  it('updates headerstate on scroll', () => {
    cy.wrap([0, 4, 10, 21]).each((positionOfCard, index) => {
      cy.visit('/search');
      cy.get('[data-cy-flagcard]').eq(positionOfCard).scrollIntoView().click();
      cy.get('[data-cy-flag-header]').as('header');
      cy.get('@header').should('have.attr', 'data-state', 'full');
      cy.scrollTo(0, 100);
      cy.get('@header').should('have.attr', 'data-state', 'collapsed');
      cy.scrollTo(0, 10);
      cy.get('@header').should('have.attr', 'data-state', 'full');
    });
  });
});
