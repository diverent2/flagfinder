describe('Detail Tabs', () => {
  beforeEach(() => {
    cy.visit('/flag/gay');
  });

  it('updates the active button style', () => {
    const active = 'tabButton--activeTab';
    cy.get('.tabButtons > .tabButton:first-child').should('have.class', active);
    cy.get('.tabButtons .tabButton:nth-child(2)')
      .click()
      .should('have.class', active);
    cy.get('.tabButtons > .tabButton:first-child').should(
      'not.have.class',
      active
    );
  });

  it('changes the active tab on click', () => {
    cy.get('.tabButtons > .tabButton:first-child').then($button => {
      const tabText = $button
        .text()
        .trim()
        .toLowerCase();
      cy.get('main > section').should('have.attr', 'title', tabText);
    });
    cy.get('.tabButtons > .tabButton:nth-child(2)')
      .click()
      .then($button => {
        const tabText = $button
          .text()
          .trim()
          .toLowerCase();
        cy.get('main > section').should('have.attr', 'title', tabText);
      });
  });
});
