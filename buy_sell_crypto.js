it('exhange crypto with fixed rate mode', () => {

    cy.visit('https://changenow.io/');
    cy.wait(5000);
    cy.get('a[href*="exchange?from=usd&to=btc&fiatMode=true"]').scrollIntoView().should('be.visible');
    cy.get('a[href*="exchange?from=usd&to=btc&fiatMode=true"]').click();
    cy.get('#recipientWallet').type('bc1qzsvsg6kddjqauqyl2m5hdzh6xhspqapmmga6gv');
    cy.get('.now-button__green').click();
    cy.wait(5000);
    cy.get('.now-button__green').click();
     

    });