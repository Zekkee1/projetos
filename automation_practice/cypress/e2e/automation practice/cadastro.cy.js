import buscador from "../../pages/buscador.page"

describe('automation_practice', () => {
    //criando variavel com o valor da classe importada "buscador"
    var busca = new buscador()
    //fluxo positivo
    it("criando uma conta", () => {
        //acessando a função pagCadastro importada da classe "buscador"
        busca.pagCadastro()

        //criando massa de testes para cadastro de um novo usuario
        var emailaleatorio = (Math.random().toString(34).substring(2))
        var usuario = {
            nome: "user",
            sobrenome: "test",
            email: "@gmail.com",
            password: "test123456",
            address: "rua 31",
            city: "teste",
            cep: "00000",
            telefone: "8715948"

        }
        //executando a função inserirDados da classe "buscador"
        busca.inserindoDados(emailaleatorio, usuario)

        //validando pagina com o login ja efetuado apos o cadastro, localizando o nome da conta criada
        cy.get('.account').should("have.text", "user test")

    })
    //fluxo negativo
    it("erro de email ja existente", () => {
        busca.pagCadastro()
        //localizando e inserindo um email ja cadastrado
        cy.get('input[id="email_create"]').type("kinguer@gmail.com")
        //localizando e apertando no botao de cadastro
        cy.get('button[id="SubmitCreate"]').click()
        //validando a mensagem de erro de email ja cadastrado na aplicação
        cy.get('div[id="create_account_error"]').should("have.text", "An account using this email address has already been registered. Please enter a valid password or request a new one. ")

    })

    it('mensagems de erro ao inserir dados de cadastro invalidos', () => {
        busca.pagCadastro()
        var emailaleatorio = (Math.random().toString(34).substring(2))
        var email = "@gmail.com"

        //inserindo email aleatorio valido
        cy.get('#email_create').type(`${emailaleatorio + email}{enter}`)
        //localizando botao de cadastro e clicando sem inserir os dados obrigadorios
        cy.get('#submitAccount').click()

        //executando a função go importado da classe "buscador" 
        busca.validarErros()
    })

})