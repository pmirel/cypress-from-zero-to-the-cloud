describe('03-TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('../src/index.html');
  });

  it('selects a product (YouTube) by its content', () => {
    cy.get('select').select('YouTube').should('have.value', 'youtube');
  });
  it('selects a product (Mentorship) by its value', () => {
    cy.get('select').select('mentorship').should('have.value', 'mentorship');
  });
  it('selects a product (Blog) by its index', () => {
    cy.get('select').select(1).should('have.value', 'blog');
  });
});
