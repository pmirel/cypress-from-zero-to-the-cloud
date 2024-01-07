describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('../src/index.html');
  });

  it('checks both checkboxes, then unchecks the last one', () => {
    cy.get('input[type="checkbox"]').as('checkboxes').check();
    cy.get('@checkboxes').each((el) => {
      cy.wrap(el).should('be.checked');
    });

    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
    cy.get('input[type="checkbox"]').last().should('not.be.checked');
  });

  it('displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    cy.get('#phone-checkbox').check();
    cy.get('#firstName')
      .as('firstNameInput')
      .should('be.visible')
      .clear()
      .type('John');
    cy.get('@firstNameInput').should('have.value', 'John');

    cy.get('#lastName')
      .as('lastNameInput')
      .should('be.visible')
      .clear()
      .type('Smith');
    cy.get('@lastNameInput').should('have.value', 'Smith');

    cy.get('#email')
      .as('emailInput')
      .should('be.visible')
      .clear()
      .type('sjohn@email.com');
    cy.get('@emailInput').should('have.value', 'sjohn@email.com');

    cy.get('#open-text-area')
      .as('feedbackInput')
      .should('be.visible')
      .clear()
      .type('no feedback', { delay: 0 });
    cy.get('@feedbackInput').should('have.value', 'no feedback');

    cy.contains('button', 'Send').click();

    cy.get('.error')
      .should('be.visible')
      .and('contain.text', 'Validate the required fields!');
  });
});
