import buscador from "../../pages/buscador.page"
describe('login', () => {

    var busca = new buscador()
    //fluxo positivo-----------------------------------------------------------------
    it('usuario deve efetuar o login', () => {
        busca.pagCadastro()

        //criando massa de teste com email e senha ja cadastrados
        var usuario = { email: "teste441@gmail.com", password: "teste123456" }

        busca.loginApp(usuario)

    })
    //fluxo negativo--------------------------------------------------------------
    it('mensagem de erro ao inserir email invalido', () => {
        busca.pagCadastro()

        //email invalido

        //inserindo no campo email o valor abc como email invalido
        cy.get('input[id="email"]').type("abc")
        //inserindo no campo password o valor abc como senha valida
        cy.get('input[id="passwd"]').type("abc")
        //localizando e clicando no botão de login 
        cy.get('button[id="SubmitLogin"]').click()
        //validando mensagem de erro de email invalido
        cy.get('ol > li').should('have.text', 'Invalid email address.')

    })

    it('mensagem de erro ao inserir password invalido', () => {
        busca.pagCadastro()

        //senha invalida

        //inserindo email valido no campo email
        cy.get('input[id="email"]').type("teste441@gmail.com")
        //inserindo uma senha invalida 
        cy.get('input[id="passwd"]').type("abc")
        //localizando e clicando no botão de login
        cy.get('button[id="SubmitLogin"]').click()
        //validando mensagem de erro de senha invalida
        cy.get('ol > li').should('have.text', 'Invalid password.')
    })
})