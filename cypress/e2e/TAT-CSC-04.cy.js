describe('04-TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('../src/index.html');
  });
  it('checks the type of service "Feedback', () => {
    cy.get('input[type="radio"]').check('feedback').should('be.checked');
  });
  it('checks each type of service', () => {
    cy.get('input[type="radio"]').each((radio) => {
      cy.wrap(radio).check().should('be.checked');
    });
  });
});
