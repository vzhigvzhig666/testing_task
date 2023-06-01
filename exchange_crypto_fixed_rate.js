it('exhange crypto with fixed rate mode', () => {

    cy.visit('https://changenow.io/');
    cy.wait(5000);
    cy.get('#amount-field').clear();
    cy.get('#amount-field').type('1');
    cy.wait(5000);
    cy.get('.new-stepper-button-lock').click();
    cy.get('.new-stepper-button').click();
    cy.wait(5000);
    cy.get('#recipientWallet').type('0x145d77fe5c416ea2e5be6ce1fdf9e7145eefc4a8');
    cy.get('.now-button__green').click();
    cy.wait(5000);
    cy.get('.now-button__green').click();

     

    });