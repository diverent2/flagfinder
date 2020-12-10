describe('Searchfilter', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-6');
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
    cy.percySnapshot('filter--show-remove-filter-button', {
      percyCSS: `.flag-results { display: none !important; }`,
    });
    cy.get('[data-cy-search-reset-all]').click();

    // got cleared
    cy.get('#search').should('be.empty');
    cy.get('[data-cy-filter-color].selected').should('have.length', 0);
    cy.get('[data-cy-filter-category].selected').should('have.length', 0);
  });
});

describe('Category filter', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(100);
    //open search filters
    cy.get('[data-cy-search-filters-expand]').click();
  });

  it('returns less results applying one filter', () => {
    cy.get('[data-cy-searchresults-number]').then((resultCount) => {
      const no_filter_length = parseFloat(resultCount.text());
      cy.get('[data-cy-filter-category="attraction"]')
        .click()
        .then(() => {
          cy.get('[data-cy-searchresults-number]').then((resultCount_one) => {
            const one_filter_length = parseFloat(resultCount_one.text());
            expect(one_filter_length).to.be.lessThan(no_filter_length);
          });
        });
    });
  });

  it('all results match one filter', () => {
    cy.get('[data-cy-filter-category="gender"]').click();
    cy.get('[data-cy-flagcard]').each(
      (flag) => {
        cy.get(flag)
        .find('[data-cy-flagcard-categories]')
        .invoke('text')
        .then((combined_label_texts) => {
          expect(combined_label_texts).match(/gender/);
        });
      }
    );
  });
  
  it('returns more results applying two filters', () => {
    cy.get('[data-cy-filter-category="gender"]').click();
    cy.get('[data-cy-searchresults-number]').then((resultCount_one) => {
      const one_filter_length = parseFloat(resultCount_one.text());
      cy.get('[data-cy-filter-category="attraction"]')
        .click()
        .then(() => {
          cy.get('[data-cy-searchresults-number]').then((resultCount_two) => {
            const two_filter_length = parseFloat(resultCount_two.text());
            expect(two_filter_length).to.be.greaterThan(one_filter_length);
          });
        });
    });
  });

  it('all results match atleast one of the filters', () => {
    cy.get('[data-cy-filter-category="gender"]').click();
    cy.get('[data-cy-filter-category="attraction"]').click();
    cy.get('[data-cy-flagcard]').each(
      (flag) => {
        cy.get(flag)
        .find('[data-cy-flagcard-categories]')
        .invoke('text')
        .then((combined_label_texts) => {
          expect(combined_label_texts).match(/(attraction|gender)/);
        });
      }
    );
  });
});
