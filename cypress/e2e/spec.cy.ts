describe('Test angular-tp', () => {
  beforeEach(() => {
    cy.request('GET', 'http://localhost:8080/reset');
  });

  it('should pass simple test', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('E-Commerce')
    cy.get('app-product').should('have.length', 4)
    cy.contains('Sweat homme').parents('app-product').contains('Acheter').click()
    cy.contains('Votre panier est de $39.00')
    cy.contains('Mon panier').click()
    cy.url().should('eq', 'http://localhost:4200/basket')
    cy.contains('Sweat homme $39.00')
    cy.get('input[name=name]').type('John Doe')
    cy.get('textarea[name=address]').type('1 rue de la paix')
    cy.get('input[name=creditCard]').type('0123456789')
    cy.contains('button', 'Commander').click()
    cy.contains('Commande confirmée')
    cy.contains('button', 'Ok').click()
    cy.wait(1000)
    cy.url().should('eq', 'http://localhost:4200/products')
    cy.contains("Vous n'avez pas encore d'articles dans votre panier.")
    
  })
})