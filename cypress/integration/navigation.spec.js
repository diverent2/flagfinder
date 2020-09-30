describe('the navigation menu shows the right context', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  it('shows/hides main nav on search for mobile/desktop', () => {
    cy.visit('/');
    cy.percySnapshot('navigation--main--mobile-menu');
    cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
    cy.get('[data-cy-footernav-option="share"]').should('not.exist');
    cy.get('[data-cy-footernav-option="settings"]')
      .should('exist')
      .and('be.visible');
    cy.get('[data-cy-footernav-option="about"]')
      .should('exist')
      .and('be.visible');

    cy.viewport('macbook-11');
    cy.percySnapshot('navigation--main--desktop-menu');
    cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
    cy.get('[data-cy-footernav-option="share"]').should('not.exist');
    cy.get('[data-cy-footernav-option="settings"]').should('not.be.visible');
    cy.get('[data-cy-footernav-option="about"]').should('not.be.visible');
  });

  it('shows flagcontext nav on /flag for mobile and desktop', () => {
    cy.visit('/flag/gay');
    cy.percySnapshot('navigation--flag-gay--mobile-menu');
    cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('exist');
    cy.get('[data-cy-footernav-option="share"]').should('exist');
    cy.get('[data-cy-footernav-option="settings"]').should('not.exist');
    cy.get('[data-cy-footernav-option="about"]').should('not.exist');

    cy.viewport('macbook-11');
    cy.percySnapshot('navigation--flag-gay--desktop-menu');
    cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('exist');
    cy.get('[data-cy-footernav-option="share"]').should('exist');
    cy.get('[data-cy-footernav-option="settings"]').should('not.exist');
    cy.get('[data-cy-footernav-option="about"]').should('not.exist');
  });

  it('shows/hides footertext on /about for mobile/desktop', () => {
    cy.visit('/about');
    cy.percySnapshot('navigation--about--mobile-menu');
    cy.get('[data-cy-footernav-option="footer"]').should('exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
    cy.get('[data-cy-footernav-option="share"]').should('not.exist');
    cy.get('[data-cy-footernav-option="options"]').should('not.exist');
    cy.get('[data-cy-footernav-option="about"]').should('not.exist');

    cy.viewport('macbook-11');
    cy.percySnapshot('navigation--about--desktop-menu');
    cy.get('[data-cy-footernav-option="footer"]').should('exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
    cy.get('[data-cy-footernav-option="share"]').should('not.exist');
    cy.get('[data-cy-footernav-option="options"]').should('not.exist');
    cy.get('[data-cy-footernav-option="about"]').should('not.exist');
  });
});
