describe('the navigation menu shows the right context', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  it('shows/hides main nav on search for mobile/desktop', () => {
    cy.visit('/');
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
    cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
    cy.get('[data-cy-footernav-option="share"]').should('not.exist');
    cy.get('[data-cy-footernav-option="settings"]').should('not.be.visible');
    cy.get('[data-cy-footernav-option="about"]').should('not.be.visible');
  });

  it('shows flagcontext nav on /flag for mobile and desktop', () => {
    cy.visit('/flag/gay');
    cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('exist');
    cy.get('[data-cy-footernav-option="share"]').should('exist');
    cy.get('[data-cy-footernav-option="settings"]').should('not.exist');
    cy.get('[data-cy-footernav-option="about"]').should('not.exist');

    cy.viewport('macbook-11');
    cy.get('[data-cy-footernav-option="footer"]').should('not.exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('exist');
    cy.get('[data-cy-footernav-option="share"]').should('exist');
    cy.get('[data-cy-footernav-option="settings"]').should('not.exist');
    cy.get('[data-cy-footernav-option="about"]').should('not.exist');
  });

  it('shows/hides footertext on /about for mobile/desktop', () => {
    cy.visit('/about');
    cy.get('[data-cy-footernav-option="footer"]').should('exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
    cy.get('[data-cy-footernav-option="share"]').should('not.exist');
    cy.get('[data-cy-footernav-option="options"]').should('not.exist');
    cy.get('[data-cy-footernav-option="about"]').should('not.exist');

    cy.viewport('macbook-11');
    cy.get('[data-cy-footernav-option="footer"]').should('exist');
    cy.get('[data-cy-footernav-option="bookmark"]').should('not.exist');
    cy.get('[data-cy-footernav-option="share"]').should('not.exist');
    cy.get('[data-cy-footernav-option="options"]').should('not.exist');
    cy.get('[data-cy-footernav-option="about"]').should('not.exist');
  });
});

describe('flag details navigation history', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  it('flag navigation works from direct link', () => {
    cy.visit('/flag/gay');
    cy.wait(1);
    cy.get('[data-cy-flag-goback]').click();
    cy.location('pathname').should('eq', '/');
  });

  it('allows flag details navigation', () => {
    cy.visit('/');
    cy.get('[data-cy-flagcard-id="progressive"]').as('flag-progressive');
    cy.get('@flag-progressive').click();
    cy.get('[data-cy-flag-goback]').as('back-button');
    cy.get('[data-cy-tab]:not([data-tab-active]').as('tab');
    cy.get('@tab').click();
    cy.get('a[href*="flag/transgender"]').first().as('link-trans');
    cy.get('@link-trans').click();
    cy.get('a[href*="flag/agender"]').as('link-agender');
    cy.get('@link-agender').click();
    cy.get('a[href*="flag/nonbinary"]').as('link-nonbinary');
    cy.get('@link-nonbinary').click();
    cy.url().should('include', 'flag/nonbinary');
    cy.get('@back-button').click();
    cy.url().should('include', 'flag/agender');
    cy.get('@back-button').click();
    cy.url().should('include', 'flag/trans');
    cy.get('@back-button').click();
    cy.url().should('include', 'flag/progressive');
    cy.get('@back-button').click();
    cy.location('pathname').should('eq', '/');
  });
});
