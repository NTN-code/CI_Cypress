import HomePage from "./PageObjects/HomePage"

describe('HomePage', () => {

  beforeEach(() => {
    HomePage.visit();
  })

  it('visit homepage apple', () => {
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it('choose a country', () => {
    HomePage.takeCountry();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/choose-country-region/`)
  });

  it("close choose a country", () => {
    HomePage.closeTakeCountry();
  });

  it("take first default search", () => {
    HomePage.openSearch();
    HomePage.searchFirstElement()
  });

  it("find iphone 14", () => {
    HomePage.openSearch();
    HomePage.searchInfo("iphone 14");
  });

  it("see my bag", () => {
    HomePage.openSelectMenu();
    HomePage.openMenuTitle(0);
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/shop/bag`)
  })

  it("test play/pause video", () => {
    HomePage.playpauseVideo();
  })

})