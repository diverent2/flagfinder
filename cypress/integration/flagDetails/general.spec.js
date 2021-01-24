/// <reference types="Cypress" />

describe('flag details', () => {
  it('displays the content consistently'),
    () => {
      cy.visit('/flag/gay');
      cy.percySnapshot('flag-details--gay');

      cy.visit('/flag/lesbian');
      cy.percySnapshot('flag-details--lesbian');

      cy.visit('/flag/genderqueer');
      cy.percySnapshot('flag-details--genderqueer');
    };
});

describe('shows the correct content', () => {

  beforeEach(() => {
    cy.visit('/flag/gay');
  });

  it('shows only one tab content on mobile', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy-flag-details-section="general"]').should('be.visible');
    cy.get('[data-cy-flag-details-section="details"]').should('be.not.visible');
  });
  it('shows the full content on desktop', () => {
    cy.viewport('macbook-11');
    cy.get('[data-cy-flag-details-section="general"]').should('be.visible');
    cy.get('[data-cy-flag-details-section="details"]').should('be.visible');
  })
});

describe('flag details have the correct meta data', () => {
  it('always takes a png as og:image', () => {
    cy.visit('/flag/gay');
    cy.get('[data-cy-flag-header-image]').should(
      'have.attr',
      'src',
      'flags/gay/gay.png'
    );
    cy.get('head meta[property="og:image"]').should(
      'have.attr',
      'content',
      'https://prideflags.info/flags/gay/gay.png'
    );

    cy.log('flag image is an svg');
    cy.visit('/flag/omnisexual');
    cy.get('[data-cy-flag-header-image]').should(
      'have.attr',
      'src',
      'flags/omnisexual/omnisexual.svg'
    );
    cy.get('head meta[property="og:image"]').should(
      'have.attr',
      'content',
      'https://prideflags.info/flags/omnisexual/omnisexual.png'
    );
  });
});
