describe('Add Flag form', () => {
  beforeEach(() => {
    cy.visit('/add');
    cy.wait(100);
  });

  it('can generate flag data by filling out the form', () => {
    cy.wait(100);
    cy.filloutFormElement('input#name', 'gay bear pride');
    cy.filloutFormElement('input#id', 'gay-bear');
    cy.get('[data-cy-form-category="sexuality"]').click();
    cy.get('[data-cy-form-category="gender"]').click();
    cy.filloutFormElement('input#image', 'https://prideflags.info/');
    cy.filloutFormElement(
      'textarea#description',
      'A most awesome group of people!'
    );
    cy.filloutFormElement(
      '#history',
      'This flag was originally designed to represent.'
    );
    cy.filloutFormElement('input#author', 'Gilbert Backer');
    cy.filloutFormElement('input#publicationDate', '1979');
    cy.filloutFormElement(
      'input[name="flagAlteration-title"]',
      'First Version'
    );
    cy.filloutFormElement(
      '[name="flagAlteration-imageUrl"]',
      'genderqueer/genderqueer_v1.png'
    );
    cy.filloutFormElement(
      '[name="flagAlteration-imageAlt"]',
      'Original Flag with stripes'
    );
    cy.filloutFormElement(
      '[name="flagAlteration-description"]',
      'The first version was created in 2010.'
    );
    cy.filloutFormElement('input#keywords', 'gay, masc ');
    cy.filloutFormElement('input[name="colorValue"]', '#9B4797');
    cy.get('select[name="colorHue"]').select('purple');
    cy.log('Id + Name gets autofilled');
    cy.get('input[name="colorName"]')
      .should('contain.value', 'medium purple')
      .clear();
    cy.filloutFormElement('input[name="colorName"]', 'violet blue');
    cy.get('input[name="colorId"]').clear();
    cy.filloutFormElement('input[name="colorId"]', 'violet-blue');
    cy.log('Id + Name got overwritten');
    cy.filloutFormElement('input[name="symbolName"]', 'double mars');
    cy.filloutFormElement('input[name="symbolId"]', 'double-mars');
    cy.filloutFormElement(
      'input[name="symbolIcon"]',
      './icons/double-mars.svg'
    );
    cy.filloutFormElement('textarea[name="symbolMeaning"]', 'male* sexuality');
    cy.filloutFormElement(
      'textarea[name="colorMeaning"]',
      'Possible attraction to ...'
    );
    cy.filloutFormElement('input[name="sourceName"]', 'Awesome Website');
    cy.filloutFormElement(
      '[name="sourceLink"]',
      'https://www.awesome-website.com'
    );
    cy.filloutFormElement('[name="sourceResearchDate"]', '2020-01-01');
    cy.log('Add second source');
    cy.get('button[data-ql-add-source]').click();
    cy.filloutFormElement('[name="sourceName"]', 'Another Source Site', 1);
    cy.filloutFormElement(
      '[name="sourceLink"]',
      'https://www.another-source.org',
      1
    );
    cy.filloutFormElement('[name="sourceResearchDate"]', '2019-01-01', 1);
    cy.get('button[type="submit"]').click();

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
    cy.get('select[data-cy-form-color-hue]')
      .should('not.have.value')
      .and('have.css', 'border-left-color', 'rgba(0, 0, 0, 0)');
    cy.get('select[data-cy-form-color-hue]')
      .select('purple')
      .should('have.value', 'purple')
      .and('have.css', 'border-left-color', 'rgb(126, 0, 128)')
      .select('green')
      .should('have.value', 'green')
      .and('have.css', 'border-left-color', 'rgb(17, 131, 1)');
    cy.percySnapshot('addForm--color-preview');

    cy.get('button[data-cy-add-color]').click();
    cy.get('select[data-cy-form-color-hue]')
      .eq(1) //second one
      .select('red')
      .should('have.value', 'red')
      .and('have.css', 'border-left-color', 'rgb(252, 0, 6)');
    cy.get('select[data-cy-form-color-hue]')
      .first()
      .should('have.value', 'green')
      .and('have.css', 'border-left-color', 'rgb(17, 131, 1)');
  });

  it('colors: hexcode generates id and name', () => {
    cy.get('button[data-cy-add-color]').click();
    cy.filloutFormElement('input[name="colorValue"]', '#9B4797', 'first');
    cy.filloutFormElement('input[name="colorValue"]', '#FFFFFF', 'last');
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
    cy.get('.flagAlteration').should('have.length', 1);
    cy.filloutFormElement(
      'input[name="flagAlteration-title"]',
      'title_A',
      'first'
    );
    cy.get('button[data-ql-add-flag-alteration]').click();
    cy.get('[data-ql-flag-alteration]').should('have.length', 2);
    cy.filloutFormElement('input[name="flagAlteration-title"]', 'title_B', 1);
    cy.get('button[data-ql-add-flag-alteration]').click();
    cy.get('[data-ql-flag-alteration]').should('have.length', 3);
    cy.filloutFormElement('input[name="flagAlteration-title"]', 'title_C', 2);
    cy.percySnapshot('addForm--mulitiple-alterations');

    cy.log('Remove second source element');
    cy.get('button[data-ql-remove-flag-alteration]').eq(1).click();
    cy.get('[data-ql-flag-alteration]').should('have.length', 2);
    cy.get('input[name="flagAlteration-title"]')
      .first()
      .invoke('val')
      .should('eq', 'title_A');
    cy.get('input[name="flagAlteration-title"]')
      .last()
      .invoke('val')
      .should('eq', 'title_C');
  });

  it('colors: can add and remove multiple colors', () => {
    cy.get('[data-ql-color]').should('have.length', 1);
    cy.filloutFormElement('[name="colorName"]', 'color_name_A', 'first');
    cy.get('button[data-cy-add-color]').click();
    cy.get('[data-ql-color]').should('have.length', 2);
    cy.filloutFormElement('[name="colorName"]', 'color_name_B', 1);
    cy.get('button[data-cy-add-color]').click();
    cy.get('[data-ql-color]').should('have.length', 3);
    cy.filloutFormElement('[name="colorName"]', 'color_name_C', 2);
    cy.log('Remove second color element');
    cy.get('button[data-ql-remove-color]').eq(1).click();
    cy.get('[data-ql-color]').should('have.length', 2);
    cy.get('input[name="colorName"]')
      .first()
      .invoke('val')
      .should('eq', 'color_name_A');
    cy.get('input[name="colorName"]')
      .last()
      .invoke('val')
      .should('eq', 'color_name_C');
  });

  it('symbols: can add and remove multiple symbols', () => {
    cy.get('[data-ql-symbol]').should('have.length', 1);
    cy.filloutFormElement('input[name="symbolName"]', 'symbol_name_A', 'first');
    cy.get('button[data-ql-add-symbol]').click();
    cy.get('[data-ql-symbol]').should('have.length', 2);
    cy.filloutFormElement('input[name="symbolName"]', 'symbol_name_B', 1);
    cy.get('button[data-ql-add-symbol]').click();
    cy.get('[data-ql-symbol]').should('have.length', 3);
    cy.filloutFormElement('input[name="symbolName"]', 'symbol_name_C', 2);
    cy.log('Remove second symbol element');
    cy.get('button[data-ql-remove-symbol]').eq(1).click();
    cy.get('[data-ql-symbol]').should('have.length', 2);
    cy.get('input[name="symbolName"]')
      .first()
      .invoke('val')
      .should('eq', 'symbol_name_A');
    cy.get('input[name="symbolName"]')
      .last()
      .invoke('val')
      .should('eq', 'symbol_name_C');
  });

  it('sources: can add and remove multiple sources', () => {
    cy.get('[data-ql-source]').should('have.length', 1);
    cy.filloutFormElement('input[name="sourceName"]', 'name_A', 'first');
    cy.get('button[data-ql-add-source]').click();
    cy.get('[data-ql-source]').should('have.length', 2);
    cy.filloutFormElement('input[name="sourceName"]', 'name_B', 1);
    cy.get('button[data-ql-add-source]').click();
    cy.get('[data-ql-source]').should('have.length', 3);
    cy.filloutFormElement('input[name="sourceName"]', 'name_C', 2);
    cy.log('Remove second source element');
    cy.get('button[data-ql-remove-source]').eq(1).click();
    cy.get('.sources .source').should('have.length', 2);
    cy.get('input[name="sourceName"]')
      .first()
      .invoke('val')
      .should('eq', 'name_A');
    cy.get('input[name="sourceName"]')
      .last()
      .invoke('val')
      .should('eq', 'name_C');
  });
});
