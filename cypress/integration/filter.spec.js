describe('Searchfilter', () => {
  beforeEach(() => {
    cy.visit('/');
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
    cy.get('[data-cy-filter-color]').first().click();
    cy.get('[data-cy-search-reset-all]').should('have.class', 'visible');
    cy.get('[data-cy-search-reset-all]').click();

    // color search
    cy.get('[data-cy-search-reset-all]').should('not.have.class', 'visible');
    cy.get('[data-cy-filter-category]').first().click();
    cy.get('[data-cy-search-reset-all]').should('have.class', 'visible');
    cy.get('[data-cy-search-reset-all]').click();
  });

  it('removes all filters through remove filter button', () => {
    cy.get('#search').type('g');
    cy.get('[data-cy-filter-color="red"]').click();
    cy.get('[data-cy-filter-color="blue"]').click();
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.get('[data-cy-filter-category="kink"]').click();

    cy.percySnapshot('filter--show-remove-filter-button');
    cy.get('[data-cy-search-reset-all]').click();

    // got cleared
    cy.get('#search').should('be.empty');
    cy.get('[data-cy-filter-color].selected').should('have.length', 0);
    cy.get('[data-cy-filter-category].selected').should('have.length', 0);
  });

  it('can filter by category', () => {
    cy.get('[data-cy-flagcard]')
      .its('length')
      .then((no_filter_length) => {
        cy.get('[data-cy-filter-category="attraction"]').click();
        cy.get('[data-cy-search-filters-expand]').click(); //wait for animation end
        cy.get('[data-cy-flagcard]')
          .its('length')
          .should('be.lessThan', no_filter_length);
      });
    cy.get('[data-cy-flagcard] [data-cy-flagcard-categories]').each(
      (categoriesList) => {
        cy.get(categoriesList)
          .find('[data-cy-labelbutton-text]')
          .should('contain', 'attraction');
      }
    );
  });

  it('can filter by multiple categories', () => {
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.wait(300); //wait for animation end
    cy.get('[data-cy-flagcard]')
      .its('length')
      .then((one_filter_length) => {
        cy.get('[data-cy-filter-category="gender"]').click();
        cy.get('[data-cy-flagcard]')
          .its('length')
          .should('be.greaterThan', one_filter_length);
      });
    cy.get('[data-cy-search-filters-expand]').click(); //wait for animation end
    cy.get('[data-cy-flagcard] [data-cy-flagcard-categories]').each(
      (categoriesList) => {
        cy.get(categoriesList)
          .find('[data-cy-labelbutton-text]')
          .invoke('text')
          .then((combined_label_texts) => {
            expect(combined_label_texts).match(/(attraction|gender)/);
          });
      }
    );
  });
});
