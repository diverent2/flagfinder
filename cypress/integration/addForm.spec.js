describe('Add Flag form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/add"]').click();
  });

  it('can generate flag data by filling out the form', () => {
    cy.get('input[name="name"]').type('gay bear pride');
    cy.get('input[name="id"]').type('gay-bear');
    cy.get('#form--addFlag [data-cy-form-category="sexuality"]').click();
    cy.get('#form--addFlag [data-cy-form-category="gender"]').click();
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
    cy.get('input[name="symbolName"]').type('double mars');
    cy.get('input[name="symbolId"]').type('double-mars');
    cy.get('input[name="symbolIcon"]').type('./icons/double-mars.svg');
    cy.get('textarea[name="symbolMeaning"]').type('male* sexuality');
    cy.get('textarea[name="colorMeaning"]').type('Possible attraction to ...');
    cy.get('input[name="sourceName"]').type('Awesome Website');
    cy.get('input[name="sourceLink"]').type('https://www.awesome-website.com');
    cy.get('input[name="sourceResearchDate"]').type('2020-01-01');
    cy.log('Add second source');
    cy.get('#form--addFlag button[data-ql-add-source-button]').click();
    cy.get('#form--addFlag .sources .source input[name="sourceName"]')
      .eq(1)
      .type('Another Source Site');
    cy.get('input[name="sourceLink"]')
      .eq(1)
      .type('https://www.another-source.org');
    cy.get('input[name="sourceResearchDate"]')
      .eq(1)
      .type('2019-01-01');
    cy.get('#form--addFlag button[type="submit"]').click();

    cy.get('#output')
      .should('contain.value', 'gay bear pride')
      .should('contain.value', 'gay-bear')
      .should('contain.value', 'sexuality')
      .should('contain.value', 'gender')
      .should('contain.value', 'https://prideflags.info/')
      .should('contain.value', 'A most awesome group of people!')
      .should('contain.value', 'Gilbert Backer')
      .should('contain.value', '1979')
      .should('contain.value', '"gay",\n    "masc"')
      // matches
      .should('contain.value', '"colors": [\n      "purple"\n    ]')
      .should('contain.value', '"symbols": [\n      "double-mars"\n    ]')
      .and('not.contain.value', 'masc ')
      .should('contain.value', 'violet blue')
      .should('contain.value', 'violet-blue')
      .should('contain.value', '#9B4797')
      .should('contain.value', 'purple')
      .should('contain.value', 'Possible attraction to ...')
      .should('contain.value', 'double mars')
      .should('contain.value', 'double-mars')
      .should('contain.value', './icons/double-mars.svg')
      .should('contain.value', 'male* sexuality')
      .should('contain.value', 'Awesome Website')
      .should('contain.value', 'https://www.awesome-website.com')
      .should('contain.value', '2020-01-01')
      .should('contain.value', 'Another Source Site')
      .should('contain.value', 'https://www.another-source.org')
      .should('contain.value', '2019-01-01');
  });

  it.only('colors: can preview colors', () => {
    cy.get('#form--addFlag .colors .color select[name="colorHue"]')
      .should('not.have.value')
      .and('have.css', 'border-left-color', 'rgba(0, 0, 0, 0)');
    cy.get('#form--addFlag [data-cy-form-color-hue]')
      .select('purple')
      .should('have.value', 'purple')
      .and('have.css', 'border-left-color', 'rgb(126, 0, 128)')
      .select('green')
      .should('have.value', 'green')
      .and('have.css', 'border-left-color', 'rgb(17, 131, 1)');

    cy.get('#form--addFlag button[data-cy-add-color-button]').click();
    cy.get('#form--addFlag [data-cy-form-color-hue]')
      .eq(1) //second one
      .select('red')
      .should('have.value', 'red')
      .and('have.css', 'border-left-color', 'rgb(252, 0, 6)');
    cy.get('#form--addFlag [data-cy-form-color-hue]')
      .first()
      .should('have.value', 'green')
      .and('have.css', 'border-left-color', 'rgb(17, 131, 1)');
  });

  it('colors: can add and remove multiple colors', () => {
    cy.get('#form--addFlag .colors .color').should('have.length', 1);
    cy.get('#form--addFlag .colors .color input[name="colorName"]')
      .first()
      .type('color_name_A');
    cy.get('#form--addFlag button[data-cy-add-color-button]').click();
    cy.get('#form--addFlag .colors .color').should('have.length', 2);
    cy.get('#form--addFlag .colors .color input[name="colorName"]')
      .eq(1)
      .type('color_name_B');
    cy.get('#form--addFlag button[data-cy-add-color-button]').click();
    cy.get('#form--addFlag .colors .color').should('have.length', 3);
    cy.get('#form--addFlag .colors .color input[name="colorName"]')
      .eq(2)
      .type('color_name_C');
    cy.log('Remove second color element');
    cy.get('#form--addFlag .color .removeButton')
      .eq(1)
      .click();
    cy.get('#form--addFlag .colors .color').should('have.length', 2);
    cy.get('#form--addFlag .colors .color input[name="colorName"]')
      .first()
      .invoke('val')
      .should('eq', 'color_name_A');
    cy.get('#form--addFlag .colors .color input[name="colorName"]')
      .last()
      .invoke('val')
      .should('eq', 'color_name_C');
  });

  it('sources: can add and remove multiple symbols', () => {
    cy.get('#form--addFlag .symbols .symbol').should('have.length', 1);
    cy.get('#form--addFlag .symbols .symbol input[name="symbolName"]')
      .first()
      .type('symbol_name_A');
    cy.get('#form--addFlag button[data-ql-add-symbol-button]').click();
    cy.get('#form--addFlag .symbols .symbol').should('have.length', 2);
    cy.get('#form--addFlag .symbols .symbol input[name="symbolName"]')
      .eq(1)
      .type('symbol_name_B');
    cy.get('#form--addFlag button[data-ql-add-symbol-button]').click();
    cy.get('#form--addFlag .symbols .symbol').should('have.length', 3);
    cy.get('#form--addFlag .symbols .symbol input[name="symbolName"]')
      .eq(2)
      .type('symbol_name_C');
    cy.log('Remove second symbol element');
    cy.get('#form--addFlag .symbol .removeButton')
      .eq(1)
      .click();
    cy.get('#form--addFlag .symbols .symbol').should('have.length', 2);
    cy.get('#form--addFlag .symbols .symbol input[name="symbolName"]')
      .first()
      .invoke('val')
      .should('eq', 'symbol_name_A');
    cy.get('#form--addFlag .symbols .symbol input[name="symbolName"]')
      .last()
      .invoke('val')
      .should('eq', 'symbol_name_C');
  });

  it('sources: can add and remove multiple sources', () => {
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
