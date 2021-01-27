describe('Header for flag info', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-6');
  });

  it('changes the header consistantly', () => {
    cy.visit(`/flag/gay`);
    cy.wait(100);
    cy.percySnapshot('flag-header--default');
    cy.scrollTo(0, 100);
    cy.percySnapshot('flag-header--scrolled-down');
    cy.scrollTo(0, 10);
    cy.percySnapshot('flag-header--scrolled-up-again');
  });

  it('updates headerstate on scroll', () => {
    const headerHeightThreshold = 200;
    cy.wrap(['progressive', 'gay', 'lesbian', 'rubber']).each(
      (flagname, index) => {
        cy.visit(`/flag/${flagname}`);
        cy.get('[data-cy-flag-header]').as('header');
        cy.get('@header').should('have.attr', 'data-state', 'full');
        cy.get('@header')
          .invoke('outerHeight')
          .should('be.above', headerHeightThreshold);
        cy.scrollTo(0, 100);
        cy.get('@header').should('have.attr', 'data-state', 'collapsed');
        cy.get('@header')
          .invoke('outerHeight')
          .should('be.below', headerHeightThreshold);
        cy.scrollTo(0, 10);
        cy.get('@header').should('have.attr', 'data-state', 'full');
        cy.get('@header')
          .invoke('outerHeight')
          .should('be.above', headerHeightThreshold);
      }
    );
  });
});
