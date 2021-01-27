describe('the navigation menu shows the right context', () => {

  describe('shows/hides main nav on search for mobile/desktop', () => {
  
    beforeEach(() => {
      cy.visit('/');
    })

    it('shows/hides main nav on search for mobile', () => {
      cy.viewport('iphone-6');
      cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
      cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
      cy.get('[data-cy-footernav-option="share"]').should('not.exist');
      cy.get('[data-cy-footernav-option="settings"]')
        .should('exist')
        .and('be.visible');
      cy.get('[data-cy-footernav-option="about"]')
        .should('exist')
        .and('be.visible');
    });

        
    it('shows/hides main nav on search for desktop', () => {
      cy.viewport('macbook-11');
      cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
      cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
      cy.get('[data-cy-footernav-option="share"]').should('not.exist');
      cy.get('[data-cy-footernav-option="settings"]').should('not.be.visible');
      cy.get('[data-cy-footernav-option="about"]').should('not.be.visible');
      cy.percySnapshot('navigation--search');
    });
  
  });

  describe('shows flagcontext nav on /flag for mobile and desktop', () => {
    beforeEach(() => {
      cy.visit('/flag/gay');
      cy.wait(100);
    });

    it('shows flagcontext nav on /flag for mobile', () => {
      cy.viewport('iphone-6');
      cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
      cy.get('[data-cy-footernav-option="bookmark"]').should('exist');
      cy.get('[data-cy-footernav-option="share"]').should('exist');
      cy.get('[data-cy-footernav-option="settings"]').should('not.exist');
      cy.get('[data-cy-footernav-option="about"]').should('not.exist');
    });
    
    it('shows flagcontext nav on /flag for desktop', () => {
      cy.viewport('macbook-11');
      cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
      cy.get('[data-cy-footernav-option="bookmark"]').should('exist');
      cy.get('[data-cy-footernav-option="share"]').should('exist');
      cy.get('[data-cy-footernav-option="settings"]').should('not.exist');
      cy.get('[data-cy-footernav-option="about"]').should('not.exist');
      cy.percySnapshot('navigation--flag-gay');
    });
  })

  describe('shows/hides footertext on /about for mobile/desktop', () => {

    beforeEach(() => {
      cy.visit('/about');
      cy.wait(100);
    });

    it('shows/hides footertext on /about for mobile', () => {
      cy.viewport('iphone-6');
      cy.get('[data-cy-footernav-option="footer"]').should('exist');
      cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
      cy.get('[data-cy-footernav-option="share"]').should('not.exist');
      cy.get('[data-cy-footernav-option="options"]').should('not.exist');
      cy.get('[data-cy-footernav-option="about"]').should('not.exist');
    })

    it('shows/hides footertext on /about for desktop', () => {
      cy.viewport('macbook-11');
      cy.get('[data-cy-footernav-option="footer"]').should('exist');
      cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
      cy.get('[data-cy-footernav-option="share"]').should('not.exist');
      cy.get('[data-cy-footernav-option="options"]').should('not.exist');
      cy.get('[data-cy-footernav-option="about"]').should('not.exist');
      cy.percySnapshot('navigation--about');
    });
  });
});
