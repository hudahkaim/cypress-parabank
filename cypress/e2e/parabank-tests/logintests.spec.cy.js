/// <reference types="cypress" />

//import Reg from '../cypress/pageobject/Register';
import Register from '../../pageobject/Register.js';
import { faker } from '@faker-js/faker';

describe("Perform SignIn Action",()=>{
    
    beforeEach(()=>{
     
        cy.visit("https://parabank.parasoft.com/");
        cy.fixture("signup").then(function(data){
            globalThis.data=data
        })

    })

    it("Verify Successful Signup Flow",()=>{
        const familyName =faker.name.firstName()
        Cypress.env('some_variable', familyName)
       const registration = new Register();
       registration.getSignInBtn().click()
       registration.getFirstName().type(data.firstName)
       registration.getLastName().type(data.lastName)
       registration.getAddress().type(data.street)
       registration.getCity().type(data.city)
       registration.getState().type(data.state)
       registration.getZipCode().type(data.zipCode)
       registration.getPhoneNumber().type(data.phoneNumber)
       registration.getSSN().type(data.ssn)
       registration.getUsername().type(familyName)
       registration.getPassword().type(data.password)
       registration.getrepeatedPassword().type(data.password)
       registration.getRegisterBtn().click()

        cy.get("h1").invoke('text').then((text1)=>{
            expect(text1).contains("Welcome")
        })


    })

    it("Perform Login to the parabank application",()=>{
        const registration = new Register();

        registration.getUsernamebtn().type(Cypress.env('some_variable'))
        registration.getPassbtn().type("Test@123")
        registration.getLoginbtn().click()
        cy.get("#accountTable").should("be.visible")


    })

})