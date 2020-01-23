describe('Add Flag form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/add"]').click();
  });

  it('can generate flag data by filling out the form', () => {
    cy.get('input[name="name"]').type('gay pride');
    cy.get('input[name="id"]').type('gay');
    cy.get('.button__category[title="sexuality"]').click();
    cy.get('input[name="image"]').type('https://prideflags.info/');
    cy.get('textarea[name="description"]').type(
      'A most awesome group of people!'
    );
    cy.get('input[name="firstAppearance"]').type('Gilbert Backer');
    cy.get('input[name="timeframe"]').type('1979');
    cy.get('input[name="keywords"]').type('gay, masc ');
    cy.get('input[name="colorName"]').type('violet blue');
    cy.get('input[name="colorId"]').type('violet-blue');
    cy.get('input[name="colorValue"]').type('#9B4797');
    cy.get('select[name="colorHue"]').select('purple');
    cy.get('textarea[name="colorMeaning"]').type('Possible attraction to ...');
    cy.get('input[name="sourceName"]').type('Awesome Website');
    cy.get('input[name="sourceLink"]').type('https://www.awesome-website.com');
    cy.get('input[name="sourceResearchDate"]').type('2020-01-01');
    cy.get('#form--addFlag button[type="submit"]').click();

    cy.get('#output')
      .should('contain.value', 'gay pride')
      .should('contain.value', 'gay')
      .should('contain.value', 'sexuality')
      .should('contain.value', 'https://prideflags.info/')
      .should('contain.value', 'A most awesome group of people!')
      .should('contain.value', 'Gilbert Backer')
      .should('contain.value', '1979')
      .should('contain.value', '"gay",\n    "masc"')
      .and('not.contain.value', 'masc ')
      .should('contain.value', 'violet blue')
      .should('contain.value', 'violet-blue')
      .should('contain.value', '#9B4797')
      .should('contain.value', 'purple')
      .should('contain.value', 'Possible attraction to ...')
      .should('contain.value', 'Awesome Website')
      .should('contain.value', 'https://www.awesome-website.com')
      .should('contain.value', '2020-01-01');
  });

  it.only('can add and remove multiple sources', () => {
    cy.get('#form--addFlag .sources .source').should('have.length', 1);
    cy.get('#form--addFlag .sources .source input[name="sourceName"]')
      .first()
      .type('name_A');
    cy.get('#form--addFlag button[data-ql-add-source-button]').click();
    cy.get('#form--addFlag .sources .source').should('have.length', 2);
    cy.get('#form--addFlag .sources .source input[name="sourceName"]')
      .eq(1)
      .type('name_B');
    cy.get('#form--addFlag button[data-ql-add-source-button]').click();
    cy.get('#form--addFlag .sources .source').should('have.length', 3);
    cy.get('#form--addFlag .sources .source input[name="sourceName"]')
      .eq(2)
      .type('name_C');
    cy.log('Remove second source element');
    cy.get('#form--addFlag .source .removeButton')
      .eq(1)
      .click();
    cy.get('#form--addFlag .sources .source').should('have.length', 2);
    cy.get('#form--addFlag .sources .source input[name="sourceName"]')
      .first()
      .invoke('val')
      .should('eq', 'name_A');
    cy.get('#form--addFlag .sources .source input[name="sourceName"]')
      .last()
      .invoke('val')
      .should('eq', 'name_C');
  });
});
