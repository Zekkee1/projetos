
describe('home page', ()=>{
    it("app deve estar online", ()=>{
        cy.viewport(1920, 1080)
        cy.visit("/")
        cy.get('h1').should("have.text","Seja um parceiro entregador pela Buger Eats" )
    })
})