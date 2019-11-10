describe('Detail Tabs', () => {
  beforeEach(() => {
    cy.visit('/flag/gay');
    cy.viewport('iphone-6');
  });

  it('updates the active button style', () => {
    const active = 'tabButton--activeTab';
    cy.get('.tabButtons > .tabButton')
      .first()
      .should('have.class', active);

    cy.get('.tabButtons > .tabButton')
      .last()
      .should('not.have.class', active)
      .wait(200) // @TODO: figure out why this is required
      .click()
      .should('have.class', active);

    cy.get('.tabButtons .tabButton')
      .first()
      .should('not.have.class', active);
  });

  it('changes the active tab on click', () => {
    cy.get('.tabButtons > .tabButton')
      .first()
      .then($button => {
        const tabText = $button
          .text()
          .trim()
          .toLowerCase();
        cy.get('main > section').should('have.attr', 'title', tabText);
      });

    cy.get('.tabButtons > .tabButton:not(.tabButton--activeTab)')
      .first()
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
