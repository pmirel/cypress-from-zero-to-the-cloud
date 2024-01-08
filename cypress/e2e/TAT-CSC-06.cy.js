describe('06-TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('../src/index.html');
  });

  it('selects a file from the fixtures folder', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json');
      });
  });
  it('selects a file simulating a drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json');
      });
  });
  it('selects a file using a fixture to which an alias was given', () => {
    cy.fixture('example.json').as('example');
    cy.get('#file-upload')
      .selectFile('@example', { action: 'drag-drop' })
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json');
      });
  });
});
