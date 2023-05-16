///<reference types="cypress" />
/// <reference types="cypress-xpath" />
require('cypress-xpath')

describe("Verify all the items in the shopping cart",()=>{

it("Find all XL size dresses and add to cart the one lowest in price",()=>{

cy.visit("https://react-shopping-cart-67954.firebaseapp.com/")

cy.xpath('//span[contains(text(),"XL")]').first().click()

////button[contains(text(),"Add to cart")]

cy.get("[class*='sc-124al1g-2 dwOYCh']").invoke('text').then((text1)=>{
    cy.log(text1)
    if(text1.substring(" groovy off white")){
        cy.log("you are perfectly right")
       
    }    
})
  cy
  .get("[class*='sc-124al1g-2 dwOYCh']")
  .contains('Add to cart').click()
  cy.get("[class*='sc-11uohgb-6 cgtUCJ']").contains('+').click()
  cy.get("[class*='sc-1h98xa9-0 gFkyvN']").contains('X').click()


})


})