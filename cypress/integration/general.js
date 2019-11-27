describe('Flagfinder', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Welcome to Prideflags.info');
  });

  it('navigates to search', () => {
    cy.get('a.button__search').click();
    cy.url().should('include', '/search');
  });

  it('resolves absolute link correctly', () => {
    cy.get('a.button__about').click();
    cy.url().should('include', '/about');
    cy.get('a[href*="twitter"]')
      .first()
      .should('have.attr', 'href')
      .and('eq', 'https://www.twitter.com/diverent2');
  });
});
