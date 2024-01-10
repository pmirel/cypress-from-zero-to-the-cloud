describe('12-TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('../src/index.html');
  });

  Cypress._.times(3, () => {
    it('clock and tickdisplays an error message when submitting the form without filling the required fields', () => {
      cy.clock();

      cy.contains('button', 'Send').click();
      cy.get('.error')
        .should('be.visible')
        .and('contain.text', 'Validate the required fields!');

      cy.tick(3000);

      cy.get('.error').should('not.be.visible');
    });
  });
  it('clock and tick successfully submits the form using a custom command', () => {
    cy.clock();
    cy.fillMandatoryFieldsAndSubmit(
      'John',
      'Smith',
      'johnsmith@rmail.com',
      'no feedback'
    );

    cy.get('.success')
      .should('be.visible')
      .and('contain.text', 'Message successfully sent.');

    cy.tick(3000);

    cy.get('.success').should('not.be.visible');
  });

  it('displays and hides the success and error messages using .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Message successfully sent.')
      .invoke('hide')
      .should('not.be.visible');
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Validate the required fields!')
      .invoke('hide')
      .should('not.be.visible');
  });

  it('fills in the text area field using the invoke command', () => {
    cy.get('#open-text-area')
      .invoke('val', 'some text')
      .should('have.value', 'some text');
  });

  it('makes an HTTP request', () => {
    cy.request('https://tat-csc.s3.sa-east-1.amazonaws.com/index.html').then(
      (resp) => {
        expect(resp.status).to.equal(200);
        expect(resp.statusText).to.equal('OK');
        expect(resp.body).to.include('TAT CSC');
      }
    );
  });
});
