/// <reference types="cypress" />
import "../../support/commands.js";
import NewAccountPage from '../../pageobject/NewAccountPage.js';

describe("Verify multiple actions of Bank Account",()=>{

    beforeEach(()=>{

        cy.visit("https://parabank.parasoft.com/");
        cy.loginTotheApp()

    
    })

    it("Verify Opening a bank account",()=>{

        const newAccPage= new NewAccountPage();
        newAccPage.getOpenNewAccountBtn().click()
        newAccPage.getAccountDropdown().select("CHECKING")

    })


})