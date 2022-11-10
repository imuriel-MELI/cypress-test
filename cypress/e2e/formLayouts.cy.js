describe('Form Layout', () => {
  it('should contain basic form and submit data', () => {
    cy.visit('/');

    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // cy.contains('nb-card', 'Basic form').find('#exampleInputEmail1').type('test@test.com');
    // cy.contains('nb-card', 'Basic form').find('[type="password"]').type('12345');

    cy.contains('nb-card', 'Basic form').then(form => {
      cy.wrap(form).find('#exampleInputEmail1').type('test@test.com');
      cy.wrap(form).find('[type="password"]').type('12345');
      cy.wrap(form).find('.custom-checkbox').click();
      cy.wrap(form).find('button').click();
    });
  });
});