describe('Searchfilter', () => {
  beforeEach(() => {
    cy.visit('/search');
    cy.wait(100);

    //open search filters
    cy.get('[data-cy-search-filters-expand]').click();
  });

  it('shows/hides remove filter button correctly', () => {
    // text search
    cy.get('[data-cy-search-reset-all]').should('not.have.class', 'visible');
    cy.get('#search').type('g');
    cy.get('[data-cy-search-reset-all]').should('have.class', 'visible');
    cy.get('[data-cy-search-reset-all]').click();

    // color search
    cy.get('[data-cy-search-reset-all]').should('not.have.class', 'visible');
    cy.get('[data-cy-filter-color]')
      .first()
      .click();
    cy.get('[data-cy-search-reset-all]').should('have.class', 'visible');
    cy.get('[data-cy-search-reset-all]').click();

    // color search
    cy.get('[data-cy-search-reset-all]').should('not.have.class', 'visible');
    cy.get('[data-cy-filter-category]')
      .first()
      .click();
    cy.get('[data-cy-search-reset-all]').should('have.class', 'visible');
    cy.get('[data-cy-search-reset-all]').click();
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

    cy.get('[data-cy-search-reset-all]').click();

    // got cleared
    cy.get('#search').should('be.empty');
    cy.get('[data-cy-filter-color].selected').should('have.length', 0);
    cy.get('[data-cy-filter-category].selected').should('have.length', 0);

    cy.get('@resultCount').then(resultCount => {
      cy.get('[data-cy-flagcard]').should('have.length', resultCount);
    });
  });

  it('can filter by categories', () => {
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.wait(500); //wait for animation end
    cy.get('[data-cy-flagcard] [data-cy-flagcard-categories]').each(
      categoriesList => {
        cy.get(categoriesList)
          .find('[data-cy-iconbutton-text]')
          .invoke('text')
          .then(text => {
            expect(text.trim()).includes('attraction');
          });
      }
    );
  });

  it('can filter by multiple categories', () => {
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.wait(500); //wait for animation end
    cy.get('[data-cy-searchresults-number]').then($resultsCount => {
      const resultsCount_singleCategory = parseFloat($resultsCount.text());

      cy.get('[data-cy-filter-category="gender"]').click();
      cy.wait(500) //wait for animation end
        .then(() => {
          const resultsCount_multiCategories = parseFloat($resultsCount.text());

          cy.expect(resultsCount_multiCategories).to.be.greaterThan(
            resultsCount_singleCategory
          );
        });
    });

    cy.get('[data-cy-flagcard] [data-cy-flagcard-categories]').each(
      categoriesList => {
        cy.get(categoriesList)
          .find('[data-cy-iconbutton-text]')
          .invoke('text')
          .then(text => {
            expect(text.trim()).match(/(attraction|gender)/);
          });
      }
    );
  });
});
