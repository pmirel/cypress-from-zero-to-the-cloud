describe('TAT Customer Service Center', () => {
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

    cy.get('button[type="submit"]').should('be.visible').click();

    cy.get('.success')
      .should('be.visible')
      .and('contain.text', 'Message successfully sent.');
  });
  it.only('displays an error message when submitting the form with an email with invalid formatting', () => {
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

    cy.get('button[type="submit"]').should('be.visible').click();

    cy.get('.error')
      .should('be.visible')
      .and('contain.text', 'Validate the required fields!');
  });
});
