describe('01-02-TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('../src/index.html');
  });
  it('checks the application title', () => {
    cy.title().should('equal', 'TAT Customer Service Center');
  });
  it('fills in the required fields and submits the form', () => {
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

    const longText = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going`;
    cy.get('#open-text-area')
      .as('feedbackInput')
      .should('be.visible')
      .clear()
      .type(longText, { delay: 0 });
    cy.get('@feedbackInput').should('have.value', longText);

    cy.contains('button', 'Send').click();

    cy.get('.success')
      .should('be.visible')
      .and('contain.text', 'Message successfully sent.');
  });
  it('displays an error message when submitting the form with an email with invalid formatting', () => {
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
      .type('sjohn..eamail.c');
    cy.get('@emailInput').should('have.value', 'sjohn..eamail.c');

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
  it('non-numeric are not typed in phone input', () => {
    cy.get('#phone').as('phoneInput').type('abc');
    cy.get('@phoneInput').should('have.value', '');
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
  it('type and clear', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('John')
      .should('have.value', 'John')
      .clear()
      .should('have.value', '');

    cy.get('#lastName')
      .should('be.visible')
      .type('Smith')
      .should('have.value', 'Smith')
      .clear()
      .should('have.value', '');

    cy.get('#email')
      .should('be.visible')
      .type('sjohn@email.com')
      .should('have.value', 'sjohn@email.com')
      .clear()
      .should('have.value', '');

    cy.get('#phone')
      .should('be.visible')
      .type('1234567')
      .should('have.value', '1234567')
      .clear()
      .should('have.value', '');
  });
  it('displays an error message when submitting the form without filling the required fields', () => {
    cy.contains('button', 'Send').click();
    cy.get('.error')
      .should('be.visible')
      .and('contain.text', 'Validate the required fields!');
  });
  it('successfully submits the form using a custom command', () => {
    cy.fillMandatoryFieldsAndSubmit(
      'John',
      'Smith',
      'johnsmith@rmail.com',
      'no feedback'
    );

    cy.get('.success')
      .should('be.visible')
      .and('contain.text', 'Message successfully sent.');
  });
});
