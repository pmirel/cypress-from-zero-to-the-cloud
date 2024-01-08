describe('07-TAT Customer Service Center', () => {
  context('test aplication', () => {
    beforeEach(() => {
      cy.visit('../src/index.html');
    });

    it('verifies that the privacy policy page opens in another tab without the need for a click', () => {
      cy.get('a').should('have.attr', 'target', '_blank');
    });
    it('access the privacy policy page by removing the target, then clicking on the link', () => {
      cy.get('a').invoke('removeAttr', 'target').click();
    });
  });
  context('test privacy page', () => {
    it('independently test the privacy policy page', () => {
      cy.visit('../src/privacy.html');
      cy.title().should(
        'equal',
        'TAT Customer Service Center - Privacy Policy'
      );
      cy.get('#title').should('have.text', 'TAT CSC - Privacy Policy');
      cy.get('#white-background').should('be.visible').and('not.be.empty');
    });
  });
});
