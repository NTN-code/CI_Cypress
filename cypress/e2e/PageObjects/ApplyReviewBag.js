class ApplyReviewBag {
    static visit() {
        cy.visit(`${Cypress.config("baseUrl")}/shop/buy-iphone/iphone-14-pro?bfil=2&cppart=UNLOCKED/US&product=MQ8T3LL/A&purchaseOption=fullPrice&step=attach`);
    }
    
    static applyReview() { 
        cy.get('[data-autom="proceed"]').click();
        cy.wait(2000);
    
        cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/shop/bag`);
        cy.wait(2000);
    
        cy.get('[data-autom="checkout"]').eq(0).click();
        cy.wait(3000);
    
        cy.get('[data-autom="guest-checkout-btn"]').click();
        cy.wait(2000);
    }
}

export default ApplyReviewBag;