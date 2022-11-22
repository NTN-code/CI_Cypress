class Iphone14Page {
    static visit (){
        cy.visit(`${Cypress.config("baseUrl")}/iphone-14-pro/`);
    }

    static buyIphone(){
        cy.get(".ac-ln-action-button").click();
    }

    static buyIphone14Pro(){
        cy.get('[data-autom="dimensionScreensize6_1inch"]').click();
    }

    static buyIphone14ProMax(){
        cy.get('[data-autom="dimensionScreensize6_7inch"]').click();
    }

    static selectColor(color) {
        let colorMapper = {
            "deeppurple": 0,
            "gold": 1,
            "silver": 2,
            "spaceblack": 3
        };
        cy.get('.colornav-items').children().eq(colorMapper[color]).click();
    }

    static selectCapacity(data){
        let capacity = {
            "128": '[data-autom="dimensionCapacity128gb"]',
            "256": '[data-autom="dimensionCapacity256gb"]',
            "512": '[data-autom="dimensionCapacity512gb"]',
            "1": '[data-autom="dimensionCapacity1tb"]'
        }
        cy.get(capacity[data]).click();
    }

    static noTradeIn(){
        cy.get('[data-autom="choose-noTradeIn"]').click();
    }

    static purchaseFullPrice(){
        cy.get('[data-autom="purchaseGroupOptionfullprice"]').click();
    }

    static connectToCarrierLater(){
        cy.get('[data-autom="carrierModelUNLOCKED/US"]').click();
    }

    static noAppleCarierr() {
        cy.get('[data-autom="applecareplus_59_noapplecare"]').click();
    }

    static addToCart() {
        cy.wait(2000);
        cy.get('[data-autom="add-to-cart"]').click();
    }

    static makeOrderIphone14(){
        Iphone14Page.buyIphone();
        Iphone14Page.buyIphone14ProMax();
        Iphone14Page.selectColor('spaceblack');
        Iphone14Page.selectCapacity('256');
        Iphone14Page.noTradeIn();
        Iphone14Page.purchaseFullPrice();
        Iphone14Page.connectToCarrierLater();
        Iphone14Page.noAppleCarierr();
        Iphone14Page.addToCart();
    }
}


export default Iphone14Page;
