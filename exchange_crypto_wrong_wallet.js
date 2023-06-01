it('exhange crypto wrong wallet', () => {

    cy.visit('https://changenow.io/');
    cy.wait(5000);
    cy.get('#amount-field').clear();
    cy.get('#amount-field').type('10');
    cy.wait(5000);
    cy.get('.new-stepper-button').click();
    cy.wait(5000);
    cy.get('#recipientWallet').type('8237732993');
    cy.get('.now-button__green').click();
    cy.get('.new-stepper-warning__content').should("have.text", "Please enter a valid address or FIO name");

     

    });