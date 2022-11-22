class HomePage {
    
  static visit() {
    cy.visit(Cypress.config("baseUrl"));  
  }

  static takeCountry() {
    cy.get("#ac-ls-dropdown-select").click();
    cy.contains("Other country or region").click();
    cy.get("#ac-ls-continue").click();
  }

  static closeTakeCountry() {
    cy.get("#ac-ls-close").click();
  }

  static openSearch() {
    cy.get("#ac-gn-link-search").click();
  }

  static searchFirstElement() {
    cy.get('#defaultlinks').eq(0).click();
  }

  static searchInfo(text) {
    cy.get("#ac-gn-searchform-input").type(`${text}{enter}`);
  }

  static openSelectMenu() {
    cy.get('#ac-gn-bag').click();
  }

  static openBag() {
    cy.get('[data-ac-autom="gn-bagview-link-bag"]').click();
  }

  static openMenuTitle(id){
    cy.get(".ac-gn-bagview-nav-nobtn li").eq(id).click();
  }

  static playpauseVideo(){
    
    cy.get(".play-pause-button").click();
    cy.get(".play-pause-button").click();
    cy.wait(2000);
    cy.get(".play-pause-button").click();
    
  }

}

export default HomePage;