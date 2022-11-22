import SignUp from "./PageObjects/SignUp";

describe('Sign Up', () => {
  // it('visit sign up', () => {
  //   SignUp.visit();
  // });

  it('Input information', () => {
    SignUp.visit();
    SignUp.inputPersonData();
  })

})