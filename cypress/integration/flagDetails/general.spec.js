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
