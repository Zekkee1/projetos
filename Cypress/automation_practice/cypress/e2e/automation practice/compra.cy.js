import buscador from "../../pages/buscador.page";


describe('compra', () => {
    var busca = new buscador()

    it('realizando compra', function() {
        var usuario = { email : "teste441@gmail.com", password: "teste123456" }

        busca.pagCadastro()
        busca.loginApp(usuario)

        cy.get('#header_logo').click()
        cy.scrollTo('center')
        cy.get('#homefeatured > .first-in-line.last-line').click()
        cy.get('#add_to_cart').click()
        cy.contains('span','Proceed to checkout').click() 
        cy.get('.cart_description > .product-name > a').should('have.text','Printed Summer Dress')
        cy.get('.cart_navigation > .button').click()
        cy.get('h1').should('have.text','Addresses')
        cy.get('button[name="processAddress"]').click()
        cy.get('#cgv').click()
        cy.get('.btn.btn.standard-checkout').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button').click()
        cy.get('.cheque-indent > .dark').should('have.text','Your order on My Store is complete.')



    })


})

