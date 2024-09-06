/// <reference types="cypress" />

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html', {timeout: 10000})
    });

    it('Should login with valid credentials ', () => {
        cy.fixture('user').then(user => {
            const username = user.validUser.username
            const password = user.validUser.password
    
            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(password)
            cy.get('#login-button').click()

            cy.url().should('include', '/inventory.html')
            cy.get('.bm-burger-button > button').click()
            cy.get('#logout_sidebar_link').click()
        });
    });

    it('Should login with invalid credentials', () => {
        cy.fixture('user').then(user => {
            cy.get('[data-test="username"]').type(user.invalidUser.username);
            cy.get('[data-test="password"]').type(user.invalidUser.password);
            cy.get('#login-button').click()
            cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    })
});