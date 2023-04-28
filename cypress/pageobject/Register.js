/// <reference types="cypress-xpath" />
require('cypress-xpath')
class Register{

    getVisited(){
        return cy.visit("https://parabank.parasoft.com/")
    }
    getSignInBtn(){
        return cy.xpath('//a[contains(text(),"Register")]')
    }
    getFirstName(){
        return cy.xpath('//input[@name="customer.firstName"]')
    }
    getLastName(){
        return cy.xpath('//input[@name="customer.lastName"]')
    }
    getAddress(){
        return cy.xpath('//input[@name="customer.address.street"]')
    }
    getCity(){
        return cy.xpath('//input[@name="customer.address.city"]')
    }
    getState(){
        return cy.xpath('//input[@name="customer.address.state"]')
    }
    getZipCode(){
        return cy.xpath('//input[@name="customer.address.zipCode"]')
    }
    getPhoneNumber(){
        return cy.xpath('//input[@name="customer.phoneNumber"]')
    }
    getSSN(){
        return cy.xpath('//input[@name="customer.ssn"]')
    }
    getUsername(){
        return cy.xpath('//input[@name="customer.username"]')
    }
    getPassword(){
        return cy.xpath('//input[@name="customer.password"]')
    }
    getrepeatedPassword(){
        return cy.xpath('//input[@name="repeatedPassword"]')
    }
    getRegisterBtn(){
       return cy.xpath('//input[@value="Register"]')
    }
    getUsernamebtn(){
        return cy.xpath('//input[@name="username"]')
     }
     getPassbtn(){
        return cy.xpath('//input[@name="password"]')
     }
     getLoginbtn(){
        return cy.xpath('//input[@type="submit"]')
     }

}

export default Register ;