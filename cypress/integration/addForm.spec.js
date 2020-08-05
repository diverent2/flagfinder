describe('Add Flag form', () => {
  beforeEach(() => {
    cy.visit('/add');
    cy.wait(100);
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
    cy.get('textarea[name="history"]').type(
      'This flag was originally designed to represent.'
    );
    cy.get('input[name="author"]').type('Gilbert Backer');
    cy.get('input[name="publicationDate"]').type('1979');
    cy.get('input[name="flagAlteration-title"]').type('First Version');
    cy.get('input[name="flagAlteration-imageUrl"]').type(
      'genderqueer/genderqueer_v1.png'
    );
    cy.get('input[name="flagAlteration-imageAlt"]').type(
      'Original Flag with stripes'
    );
    cy.get('textarea[name="flagAlteration-description"]').type(
      'The first version was created in 2010.'
    );
    cy.get('input[name="keywords"]').type('gay, masc ');
    cy.get('input[name="colorValue"]').type('#9B4797');
    cy.get('select[name="colorHue"]').select('purple');
    cy.log('Id + Name gets autofilled');
    cy.get('input[name="colorName"]').clear().type('violet blue');
    cy.get('input[name="colorId"]').clear().type('violet-blue');
    cy.log('Id + Name got overwritten');
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
    cy.get('input[name="sourceResearchDate"]').eq(1).type('2019-01-01');
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
      .should('contain.value', 'This flag was originally designed to represent')
      .should('contain.value', 'First Version')
      .should('contain.value', 'genderqueer/genderqueer_v1.png')
      .should('contain.value', 'Original Flag with stripes')
      .should('contain.value', 'The first version was created in 2010')
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

  it('colors: can preview colors', () => {
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

  it('colors: hexcode generates id and name', () => {
    cy.get('[data-cy-add-color-button]').click();
    cy.get('input[name="colorValue"]').first().type('#9B4797');
    cy.get('input[name="colorValue"]').last().type('#FFFFFF');
    cy.get('input[name="colorName"]')
      .first()
      .should('have.value', 'medium purple');
    cy.get('input[name="colorId"]')
      .first()
      .should('have.value', 'medium-purple');
    cy.get('input[name="colorName"]').last().should('have.value', 'white');
    cy.get('input[name="colorId"]').last().should('have.value', 'white');
  });

  it('flagAlterations: can add and remove multiple alterations', () => {
    cy.get('#form--addFlag .flagAlterations .flagAlteration').should(
      'have.length',
      1
    );
    cy.get(
      '#form--addFlag .flagAlterations .flagAlteration input[name="flagAlteration-title"]'
    )
      .first()
      .type('title_A');
    cy.get('#form--addFlag button[data-ql-add-flag-alteration-button]').click();
    cy.get('#form--addFlag .flagAlterations .flagAlteration').should(
      'have.length',
      2
    );
    cy.get(
      '#form--addFlag .flagAlterations .flagAlteration input[name="flagAlteration-title"]'
    )
      .eq(1)
      .type('title_B');
    cy.get('#form--addFlag button[data-ql-add-flag-alteration-button]').click();
    cy.get('#form--addFlag .flagAlterations .flagAlteration').should(
      'have.length',
      3
    );
    cy.get(
      '#form--addFlag .flagAlterations .flagAlteration input[name="flagAlteration-title"]'
    )
      .eq(2)
      .type('title_C');

    cy.log('Remove second source element');
    cy.get('#form--addFlag .flagAlteration .removeButton').eq(1).click();
    cy.get('#form--addFlag .flagAlterations .flagAlteration').should(
      'have.length',
      2
    );
    cy.get(
      '#form--addFlag .flagAlterations .flagAlteration input[name="flagAlteration-title"]'
    )
      .first()
      .invoke('val')
      .should('eq', 'title_A');
    cy.get(
      '#form--addFlag .flagAlterations .flagAlteration input[name="flagAlteration-title"]'
    )
      .last()
      .invoke('val')
      .should('eq', 'title_C');
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
    cy.get('#form--addFlag .color .removeButton').eq(1).click();
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

  it('symbols: can add and remove multiple symbols', () => {
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
    cy.get('#form--addFlag .symbol .removeButton').eq(1).click();
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
    cy.get('#form--addFlag .source .removeButton').eq(1).click();
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
