describe('Search', () => {
  beforeEach(() => {
    cy.visit('/search');
    cy.wait(100);
    cy.get('[data-cy-search-filters-expand]').click();
  });

  it('updates result count correctly', () => {
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.get('[data-cy-searchresults-number]').then($counter => {
      const amount = $counter.text();
      cy.get('.flag-results .flagCard').should('have.length', amount);
    });
  });

  it('can find flags independent of case or spacing', () => {
    cy.get('#search').type('gay');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
    cy.get('.searchbox__delete').click();

    cy.get('#search').type('Gay');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
    cy.get('.searchbox__delete').click();

    cy.get('#search').type('Gay Pride ');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
    cy.get('.searchbox__delete').click();
  });

  it('can find flags by keywords', () => {
    cy.get('#search').type('rainbow');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);

    cy.get('[data-cy-search-reset-all]').click();
    cy.get('#search').type('♠️');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);

    cy.get('[data-cy-search-reset-all]').click();
    cy.get('#search').type('umbrella term');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
  });

  it('can find flags based on on searchterm with origin', () => {
    cy.get('#search').type('Baker');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
    cy.get('.searchbox__delete').click();
    cy.get('#search').type('2010');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
  });

  it('can find flags based on searchterm with color values', () => {
    cy.get('#search').type(' #fFfFff');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
  });
});
