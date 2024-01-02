describe('TAT Customer Service Center', () => {
  it('checks the application title', () => {
    cy.visit('../src/index.html');
    cy.title().should('equal', 'TAT Customer Service Center');
  });
});
