describe('Helper tools', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should list sites via SEO', () => {
    cy.get('head meta[name="robots"]').should(
      'have.attr',
      'content',
      'index, follow'
    );
    cy.visit('/flag/gay');
    cy.get('head meta[name="robots"]')
      .should('have.attr', 'content', 'index, follow')
      .should('not.have.attr', 'content', 'noindex, nofollow');
  });

  it('should NOT list sites via SEO', () => {
    cy.visit('/add');
    cy.get('head meta[name="robots"]').should(
      'have.attr',
      'content',
      'noindex, nofollow'
    );
  });
});
