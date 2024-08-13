import valid from "../fixtures/reg.json"


describe('template spec', () => {

    it('passes', () => {
        cy.visit('https://www.automationexercise.com/login')
        cy.log(valid.validCredentials)
        cy.loggin(valid.invalidCredentials.email,valid.invalidCredentials.password)
        cy.get('.login-form > form > p').should('be.visible')})
    
    
    
    it('passes', () => {
        cy.visit('https://www.automationexercise.com/login')

        cy.log(valid.validCredentials)
        cy.loggin(valid.validCredentials.email,valid.validCredentials.password)
        cy.get('[data-qa="login-button"]').click()

    })


})
