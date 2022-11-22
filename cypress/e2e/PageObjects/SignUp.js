class SignUp {
    static visit(){
        cy.visit(`https://appleid.apple.com/account/`);
    }

    static inputPersonData() {
        cy.get('first-name-input').type("Alex");
        cy.get("last-name-input").type("Larkin");
        cy.get("wc-birthday").type("11112000");
        cy.get("email-input").type("test@gmail.com");
        cy.get("new-password").type("adaqqfa123Da2da_12d{enter}");
        cy.get("confirm-password").type("adaqqfa123Da2da_12d");
        cy.get("phone-number").type("2131231231");

    }

}


export default SignUp;