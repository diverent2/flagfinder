describe('Flagfinder', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Welcome to Prideflags.info');
  });

  it('navigates to search', () => {
    cy.get('[data-cy-button-search]').click();
    cy.url().should('include', '/search');
  });

  it('resolves absolute link correctly', () => {
    cy.get('[data-cy-button-about]').click();
    cy.url().should('include', '/about');
    cy.get('a[href*="https://www.twitter.com"]').should('exist');
  });
});
