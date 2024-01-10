describe('12-TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('../src/index.html');
  });

  it('find the cat', () => {
    cy.get('#cat').invoke('show').should('be.visible');
  });
});
