describe('Searchfilter', () => {
  beforeEach(() => {
    cy.visit('/search');
    cy.wait(100);

    //open search filters
    cy.get('[data-cy-search-filters-expand]').click();
  });

  it('shows/hides remove filter button correctly', () => {
    // text search
    cy.get('.searchbox__delete').should('not.have.class', 'visible');
    cy.get('#search').type('g');
    cy.get('.searchbox__delete').should('have.class', 'visible');
    cy.get('.searchbox__delete').click();

    // color search
    cy.get('.searchbox__delete').should('not.have.class', 'visible');
    cy.get('[data-cy-filter-color]')
      .first()
      .click();
    cy.get('.searchbox__delete').should('have.class', 'visible');
    cy.get('.searchbox__delete').click();

    // color search
    cy.get('.searchbox__delete').should('not.have.class', 'visible');
    cy.get('[data-cy-filter-category]')
      .first()
      .click();
    cy.get('.searchbox__delete').should('have.class', 'visible');
    cy.get('.searchbox__delete').click();
  });

  it('removes all filters through remove filter button', () => {
    cy.get('[data-cy-searchresults-number]')
      .invoke('text')
      .as('resultCount');

    cy.get('#search').type('g');
    cy.get('[data-cy-filter-color="red"]').click();
    cy.get('[data-cy-filter-color="blue"]').click();
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.get('[data-cy-filter-category="kink"]').click();

    cy.get('.searchbox__delete').click();

    // got cleared
    cy.get('#search').should('be.empty');
    cy.get('[data-cy-filter-color].selected').should('have.length', 0);
    cy.get('[data-cy-filter-category].selected').should('have.length', 0);

    cy.get('@resultCount').then(resultCount => {
      cy.get('.flag-results .flagCard').should('have.length', resultCount);
    });
  });

  it('can filter by categories', () => {
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.get('.flag-results .flagCard .flagCard__categories').each(
      categoriesList => {
        cy.get(categoriesList)
          .find('.iconButton__text')
          .invoke('text')
          .then(text => {
            expect(text.trim()).includes('attraction');
          });
      }
    );
  });

  it('can filter by multiple categories', () => {
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.get('[data-cy-filter-category="gender"]').click();
    cy.get('.flag-results .flagCard .flagCard__categories').each(
      categoriesList => {
        cy.get(categoriesList)
          .find('.iconButton__text')
          .invoke('text')
          .then(text => {
            expect(text.trim()).match(/(attraction|gender)/);
          });
      }
    );
  });
});
