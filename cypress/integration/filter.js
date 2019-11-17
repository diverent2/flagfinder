describe('Searchfilter', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a.button__search').click();
  });

  it('shows/hides remove filter button correctly', () => {
    cy.get('.searchbox__delete').should('not.have.class', 'visible');
    cy.get('#search').type('g');
    cy.get('.searchbox__delete').should('have.class', 'visible');
  });

  it('removes all filters through remove filter button', () => {
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
  });
});
