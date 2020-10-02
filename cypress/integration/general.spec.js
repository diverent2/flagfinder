describe('landingpage', () => {
  it('displays the content consistently'),
    () => {
      cy.visit('/');
      cy.percySnapshot('search--overview');
    };
});

  beforeEach(() => {
    cy.visit('/');
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
