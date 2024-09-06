/// <reference types="cypress" />

describe('Checkout Test', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.fixture('user').then((user) => {
        cy.get('[data-test="username"]').type(user.validUser.username);
        cy.get('[data-test="password"]').type(user.validUser.password);
        cy.get('#login-button').click();
      });
  
      // Add an item to the cart
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_link').click();
    });
  
    it('should proceed to checkout and complete purchase', function() {
      cy.get('.btn_action').click();
      cy.get('[data-test="firstName"]').type('Handika');
      cy.get('[data-test="lastName"]').type('Prasetya');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('.btn_primary').click();
      cy.get('.btn_action').click();
      cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');
    });
  });