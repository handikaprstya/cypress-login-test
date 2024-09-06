/// <reference types="cypress" />

describe('Add to Cart Test', ()=> {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html', {timeout: 10000})
        cy.fixture('user').then(user => {
            const username = user.validUser.username
            const password = user.validUser.password

            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(password)
            cy.get('#login-button').click()
        });
    });

    it('Should add an item to the cart', () => {
        cy.get('.inventory_item').first().find('button').click()
        cy.get('.shopping_cart_badge').should('contain.text', '1')
    });

    // it('Should add multiple items to the cart', () => {
    //     cy.get('.inventory_item').each(($el) => {
    //         cy.wrap($el).find('button').click()
    //     });
    //     cy.get('.shopping_cart_badge').should('contain.text', '6')
    // });
});