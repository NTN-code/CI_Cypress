import ApplyOrder from './PageObjects/ApplyOrder';
import ApplyReviewBag from './PageObjects/ApplyReviewBag';
import Iphone14Page from './PageObjects/Iphone14Page';

describe('Review Bag', () => {
    

    beforeEach(() => {
        ApplyReviewBag.visit();
        
    })

  it('Apply bag', () => {
    Iphone14Page.visit();
    Iphone14Page.makeOrderIphone14();
    ApplyReviewBag.applyReview();

    cy.fixture('order').then(function(order){
        ApplyOrder.typeZipCode(order.zipCode);
    })

    ApplyOrder.chooseShop();
    
    cy.fixture('user').then(function(user){
        ApplyOrder.typePersonInfo(user);
    })

    ApplyOrder.payByCard();
    
    
    cy.fixture('order').then(function(order){
        ApplyOrder.paymentInfo(order);
    })

    


  })

})