/// <reference types="cypress" />

describe('Working with inputs', () =>{
    beforeEach(() =>{
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

    it('Visit the website', () => {
        cy.url().should('include', 'login.html')
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('hadeuhhh')
    });

    it('Should check the checkbox', () => {
        cy.get('#user_remember_me').check()
        cy.get('#user_remember_me').uncheck()
    });

    it ('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('input[name="submit"]').click()

            cy.get('.alert').should('contain.text', 'Login and/or password are wrong.')
        })
    });

});