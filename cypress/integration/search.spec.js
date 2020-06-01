describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(100);
    cy.get('[data-cy-search-filters-expand]').click();
  });

  it('updates result count correctly', () => {
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.get('[data-cy-searchresults-number]').then(($counter) => {
      const amount = $counter.text();
      cy.get('[data-cy-flagcard]').should('have.length', amount);
    });
  });

  it('can find flags independent of case or spacing', () => {
    cy.get('#search').type('gay');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);
    cy.get('[data-cy-search-reset-all]').click();

    cy.get('#search').type('Gay');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);
    cy.get('[data-cy-search-reset-all]').click();

    cy.get('#search').type('Gay Pride ');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);
    cy.get('[data-cy-search-reset-all]').click();
  });

  it('can find flags by keywords', () => {
    cy.get('#search').type('rainbow');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);

    cy.get('[data-cy-search-reset-all]').click();
    cy.get('#search').type('♠️');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);

    cy.get('[data-cy-search-reset-all]').click();
    cy.get('#search').type('umbrella term');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);
  });

  it('can find flags based on on searchterm with origin', () => {
    cy.get('#search').type('Baker');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);
    cy.get('[data-cy-search-reset-all]').click();
    cy.get('#search').type('2010');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);
  });

  it('can find flags based on searchterm with color values', () => {
    cy.get('#search').type(' #fFfFff');
    cy.get('[data-cy-flagcard]').should('not.have.length', 0);
  });

  it('show everyone is valid', () => {
    cy.get('[data-cy-searchresults-number]').then(($counter) => {
      const amount = $counter.text();
      cy.get('#search').type('valid');
      cy.get('[data-cy-flagcard]').should('have.length', amount);
    });
  });
});
