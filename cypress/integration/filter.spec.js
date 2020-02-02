describe('Searchfilter', () => {
  beforeEach(() => {
    cy.visit('/search');
    cy.wait(100);
  });

  it('shows/hides remove filter button correctly', () => {
    //open search filters
    cy.get('.mainOptions .mainOptions__arrow--icon').click();

    // text search
    cy.get('.searchbox__delete').should('not.have.class', 'visible');
    cy.get('#search').type('g');
    cy.get('.searchbox__delete').should('have.class', 'visible');
    cy.get('.searchbox__delete').click();

    // color search
    cy.get('.searchbox__delete').should('not.have.class', 'visible');
    cy.get('.colorButtons .button__color')
      .first()
      .click();
    cy.get('.searchbox__delete').should('have.class', 'visible');
    cy.get('.searchbox__delete').click();

    // color search
    cy.get('.searchbox__delete').should('not.have.class', 'visible');
    cy.get('.filter-categories .button__category')
      .first()
      .click();
    cy.get('.searchbox__delete').should('have.class', 'visible');
    cy.get('.searchbox__delete').click();
  });

  it('removes all filters through remove filter button', () => {
    cy.get('.mainOptions__resultInfo--amount')
      .invoke('text')
      .as('resultCount');

    cy.get('.mainOptions .mainOptions__arrow--icon').click();
    cy.get('#search').type('g');
    cy.get('.colorButtons .button__color:nth-child(2)').click();
    cy.get('.colorButtons .button__color:nth-child(5)').click();
    cy.get('.filter-categories .button__category:nth-child(2)').click();
    cy.get('.filter-categories .button__category:nth-child(4)').click();

    cy.get('.searchbox__delete').click();

    // got cleared
    cy.get('#search').should('be.empty');
    cy.get('.colorButtons .button__color.selected').should('have.length', 0);
    cy.get('.filter-categories .button__category.selected').should(
      'have.length',
      0
    );

    cy.get('@resultCount').then(resultCount => {
      cy.get('.flag-results .flagCard').should('have.length', resultCount);
    });
  });
});