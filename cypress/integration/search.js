describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a.button__search').click();
  });

  it('updates result count correctly', () => {
    cy.get('.mainOptions__arrow--icon').click();
    cy.get('.filter-categories .button__category:nth-child(2)').click();
    cy.get('.mainOptions__resultInfo--amount').then($counter => {
      const amount = $counter.text();
      cy.get('.flag-results .flagCard').should('have.length', amount);
    });
  });

  it('can filter by categories', () => {
    cy.get('.mainOptions__arrow--icon').click();
    cy.get('.filter-categories .button__category:nth-child(2)').click();
    cy.get(
      '.flag-results .flagCard .flagCard__category .iconButton__text'
    ).each($categoryTag => {
      cy.get($categoryTag).contains('attraction');
    });
  });

  it('can find flags independent of case or spacing', () => {
    cy.get('.mainOptions__arrow--icon').click();
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
  it('can find flags based on on searchterm with origin', () => {
    cy.get('.mainOptions__arrow--icon').click();

    cy.get('#search').type('Baker');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
    cy.get('.searchbox__delete').click();
    cy.get('#search').type('2010');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
  });
  it('can find flags based on searchterm with color values', () => {
    cy.get('.mainOptions__arrow--icon').click();

    cy.get('#search').type('#fff');
    cy.get('.flag-results .flagCard').should('not.have.length', 0);
  });
});
