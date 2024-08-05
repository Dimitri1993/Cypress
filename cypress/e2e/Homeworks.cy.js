describe('template spec', () => {
    it('passes', () => {
        cy.visit ('https://automationteststore.com/')
        // cy.get('#customer_menu_top > li > a').click()
        // cy.get('#accountFrm > fieldset > .btn').click()
        // cy.get('#AccountFrm_firstname').type("Dimitri")
        // cy.get('#AccountFrm_lastname').type("Tsotsonava")
        // cy.get('#AccountFrm_email').type('dima3tsotsonava@gmail.com')
        // cy.get('#AccountFrm_telephone').type("597506261")
        // cy.get('#AccountFrm_fax').type('12345')

        // cy.get('#AccountFrm_company').type('tsocorp')
        // cy.get('#AccountFrm_address_1').type('abashidze38')
        // cy.get('#AccountFrm_city').type('tbilisi')
        // cy.get('#AccountFrm_country_id').select("Spain")
        // cy.get('#AccountFrm_zone_id').select("Girona")
        // cy.get('#AccountFrm_postcode').type('074241')
        


        // cy.get('#AccountFrm_loginname').type("dimitri3")
        // cy.get('#AccountFrm_password').type("123456")
        // cy.get('#AccountFrm_confirm').type("123456")
        // cy.get('#AccountFrm_newsletter1').click()
        // cy.get('#AccountFrm_agree').click()
        // cy.get('.col-md-2 > .btn').click()


        // დავრეგისტრირდით. 

        let loginname = 'dimitri3'
        let password = '123456'


        cy.visit ('https://automationteststore.com/')
        cy.loggin('dimitri3','newpasword')

        cy.get('.side_account_list > :nth-child(3) > a').click()
        //ჯერ წავშალეთ ტელ და ზიპ კოდი, შევცვალეთ 


        cy.get('#AccountFrm_telephone').clear().type("1111111111111")
        cy.get('#AccountFrm_fax').clear().type('1111111')
        cy.get('.col-md-12 > .btn-orange').click() 
        cy.contains('Success: Your account has been successfully updated.').should('be.visible')
// მონაცემები შეიცვალა. ვამოწმებთ
        cy.get('.side_account_list > :nth-child(3) > a').click()
    //////////////////////////////////////


    //არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება

    cy.get('.side_account_list > :nth-child(5) > a').click()
    cy.get(':nth-child(2) > table > tbody > tr > .pull-right > .btn').click()
    //cy.get('tr > .pull-right > .btn').click()
    cy.get('#AddressFrm_address_1').clear().type("nikaraguas25")
    cy.get('#AddressFrm_city').clear().type("nikaragua")
    cy.get('.col-md-12 > .btn-orange').click()
    cy.get('.alert').contains('Your address has been successfully updated')

    // ახალის მისამართის დაამატება
    cy.get('.col-md-12 > .btn-orange').click()
    cy.get('#AddressFrm_firstname').type('dato')
    cy.get('#AddressFrm_lastname').type('bregvadze')
    cy.get('#AddressFrm_address_1').type('rustaveli2')
    cy.get('#AddressFrm_city').type('batumi')
    cy.get('#AddressFrm_country_id').select('Spain')
    cy.get('#AddressFrm_zone_id').select('Girona')
    cy.get('#AddressFrm_postcode').type('17005')
    cy.get('#AddressFrm_default0').click()
    cy.get('.col-md-12 > .btn-orange').click()

    cy.get('.alert').contains('Your address has been successfully inserted')

    //   პაროლის შეცვლა

    cy.get('.side_account_list > :nth-child(4) > a').click()
    cy.get('#PasswordFrm_current_password').type('123456')
    cy.get('#PasswordFrm_password').type('newpasword')
    cy.get('#PasswordFrm_confirm').type('newpasword')
    cy.get('.col-md-12 > .btn-orange').click()

    cy.get('.col-md-12 > .btn-orange').contains('Success: Your password has been successfully updated.')
// პაროლი შევცვალე წარმატებით მაგრამ შემდეგ დალოგინებისას ახალი პაროლი მომთხოვა. ეხლა შეცვლაზე სხვა სტატისი არის

    













    })
  })
  