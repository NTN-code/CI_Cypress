class ApplyOrder{

    static typeZipCode(zipCode){
        cy.get('.as-buttongroup').children().eq(1).click();
        cy.get('[data-autom="bag-storelocator-input"]').type(zipCode);
        cy.wait(2000);
    }
    
    static chooseShop(){
        cy.get('[data-autom="checkout-cityState-apply"]').click();
        cy.get('.rt-storelocator-store-group').eq(0).click();
        cy.get('[data-autom="pickup-availablewindow-dropdown"]').click();
        cy.get('[data-autom="pickup-availablewindow-dropdown"]').children().eq(0).click();
        cy.get('[data-autom="fulfillment-continue-button"]').click();
        cy.wait(2000);
    }

    static typePersonInfo(userInfo){
        cy.get('[data-autom="form-field-firstName"]').type(userInfo.name);
        cy.get('[data-autom="form-field-lastName"]').type(userInfo.surname);
        cy.get('[data-autom="form-field-emailAddress"]').type(userInfo.email);
        cy.get('[data-autom="form-field-fullDaytimePhone"]').type(userInfo.phone);
        cy.get('[data-autom="continue-button-label"]').click();
        cy.wait(2000);
    }

    static payByCard(){
        cy.get('[data-autom="checkout-billingOptions-CREDIT"]').click();
        cy.wait(2000);
    }
    static paymentInfo(orderInfo){
        cy.get('[data-autom="card-number-input"]').type(orderInfo.card);
        cy.get('[data-autom="expiration-input"]').type(orderInfo.exp);
        cy.get('[data-autom="security-code-input"]').type(orderInfo.CV);
        cy.get('[data-autom="form-field-firstName"]').type(orderInfo.name);
        cy.get('[data-autom="form-field-lastName"]').type(orderInfo.surname);
        cy.get('[data-autom="form-field-street"]').type(orderInfo.city);
        cy.get('[data-autom="form-field-postalCode"]').type(orderInfo.postalCode);
        cy.wait(2000);
            
        cy.get('[data-autom="continue-button-label"]').click();
        cy.wait(2000);

        cy.get('[data-autom="continue-button-label"]').click();
    } 

}


export default ApplyOrder;