// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'fillMandatoryFieldsAndSubmit',
  (firstName, lastName, email, feedback) => {
    cy.get('#firstName')
      .as('firstNameInput')
      .should('be.visible')
      .clear()
      .type(firstName);
    cy.get('@firstNameInput').should('have.value', firstName);

    cy.get('#lastName')
      .as('lastNameInput')
      .should('be.visible')
      .clear()
      .type(lastName);
    cy.get('@lastNameInput').should('have.value', lastName);

    cy.get('#email').as('emailInput').should('be.visible').clear().type(email);
    cy.get('@emailInput').should('have.value', email);

    cy.get('#open-text-area')
      .as('feedbackInput')
      .should('be.visible')
      .clear()
      .type(feedback, { delay: 0 });
    cy.get('@feedbackInput').should('have.value', feedback);

    cy.get('button[type="submit"]').should('be.visible').click();
  }
);
