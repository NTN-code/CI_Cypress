import Iphone14Page from "./PageObjects/Iphone14Page";

describe('Iphone14Page', () => {
  beforeEach(() => {
    Iphone14Page.visit();
  })
  
  it('visit iphone 14', () => {
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/iphone-14-pro/`);   
  });

  it('buy iphone14', () => {
    Iphone14Page.buyIphone();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/shop/buy-iphone/iphone-14-pro`)
  })

  it('select iphone14 pro', () => {
    Iphone14Page.buyIphone();
    Iphone14Page.buyIphone14Pro();
  })  

  
  it('select iphone14 pro max', () => {
    Iphone14Page.buyIphone();
    Iphone14Page.buyIphone14ProMax();
  })  

  it('select all color', () => {
    Iphone14Page.buyIphone();
    Iphone14Page.buyIphone14ProMax();
    Iphone14Page.selectColor('deeppurple');
    Iphone14Page.selectColor('gold');
    Iphone14Page.selectColor('silver');
    Iphone14Page.selectColor('spaceblack');
  })

  it('select all capacity', () => {
    Iphone14Page.buyIphone();
    Iphone14Page.buyIphone14ProMax();
    Iphone14Page.selectColor('spaceblack');
    Iphone14Page.selectCapacity('256');
  })

  it('make order', () => {
    Iphone14Page.buyIphone();
    Iphone14Page.buyIphone14ProMax();
    Iphone14Page.selectColor('spaceblack');
    Iphone14Page.selectCapacity('256');
    Iphone14Page.noTradeIn();
    Iphone14Page.purchaseFullPrice();
    Iphone14Page.connectToCarrierLater();
    Iphone14Page.noAppleCarierr();
    Iphone14Page.addToCart();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/shop/buy-iphone/iphone-14-pro?bfil=2&cppart=UNLOCKED/US&product=MQ8T3LL/A&purchaseOption=fullPrice&step=attach`);
  })

})