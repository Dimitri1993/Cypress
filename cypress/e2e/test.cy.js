describe('template spec', () => {
  it('passes', () => {
    
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
cy.visit('https://www.automationexercise.com/')

// 3. Verify that home page is visible successfully
cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 5. Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should('be.visible')

// 6. Enter name and email address
cy.get('[data-qa="signup-name"]').type('Dimitri')
cy.get('[data-qa="signup-email"]').type('tsotsonava@gmail.com')

// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()

// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.get(':nth-child(1) > b').should('be.visible')

// 9. Fill details: Title, Name, Email, Password, Date of birth
cy.get('.clearfix > :nth-child(3)').click()
cy.get('[data-qa="password"]').type('12345678')
cy.get('[data-qa="days"]').select(3)
cy.get('[data-qa="months"]').select("May")
cy.get('[data-qa="years"]').select("2013")

// 10. Select checkbox 'Sign up for our newsletter!'
cy.get('#newsletter').click()
// 11. Select checkbox 'Receive special offers from our partners!'
cy.get('#optin').click()
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
cy.get('[data-qa="first_name"]').type('dimitri')
cy.get('[data-qa="last_name"]').type('tsotsonava')
cy.get('[data-qa="company"]').type('tsotsocorp')
cy.get('[data-qa="address"]').type('i.abashidze')
cy.get('[data-qa="address2"]').type('iabashidzee222')
cy.get('[data-qa="country"]').select('Canada')
cy.get('[data-qa="state"]').type('georgia')
cy.get('[data-qa="city"]').type('tbilisi')
cy.get('[data-qa="zipcode"]').type('00719')
cy.get('[data-qa="mobile_number"]').type("597506261")

// 13. Click 'Create Account button'
cy.get('[data-qa="create-account"]').click()

// 14. Verify that 'ACCOUNT CREATED!' is visible
cy.get('b').should('be.visible')

// 15. Click 'Continue' button
cy.get('[data-qa="continue-button"]').click()

// 16. Verify that 'Logged in as username' is visible
cy.get(':nth-child(10) > a').should('be.visible')

// 17. Click 'Delete Account' button

cy.get('.shop-menu > .nav > :nth-child(5) > a').click()


// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
cy.get('[data-qa="account-deleted"]').should('be.visible')
cy.get('[data-qa="continue-button"]').click()
















  })
})
