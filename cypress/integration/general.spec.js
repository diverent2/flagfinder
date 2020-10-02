describe('landingpage', () => {
  it('displays the content consistently'),
    () => {
      cy.visit('/');
      cy.percySnapshot('search--overview');
    };
});

describe('Flagfinder general', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it.only('shows 404 if page is not found', () => {
    cy.visit('/not-existing', { failOnStatusCode: false });
    cy.get('h1').should('contain', '404');
    cy.percySnapshot('404');
  });

  it('redirects from /search to index', () => {
    cy.visit('/search');
    cy.url().should('not.include', '/search');
  });

  it('resolves absolute link correctly', () => {
    cy.get('[data-cy-sidenav-button="about"]').click();
    cy.url().should('include', '/about');
    cy.get('a[href*="https://www.twitter.com"]').should('exist');
  });
});
