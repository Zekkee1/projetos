

class buscador {
    pagCadastro(){
        //colocando pagina no formato 1920x1080
        cy.viewport(1920, 1080)

        //visitando a pagina de cadastro/login da aplicação
        cy.visit("http://automationpractice.com/index.php?controller=my-account")

        ////validando que o teste encontrou a pagina de autenticação localizando o titulo "Authentication"
        cy.get('h1').should("have.text","Authentication")
    }

    loginApp(usuario){
        cy.viewport(1920, 1080)


        cy.get('input[id="email"]').type(usuario.email)
        cy.get('input[id="passwd"]').type(`${usuario.password}{enter}`)
        cy.get('.account').should("have.text","user test")  

    }


     //localizando os campos e inserindo a massa de testes em todos os campos obrigatorios para o cadastro
    inserindoDados(emailaleatorio,usuario){
        cy.get('input[name="email_create"]').type(emailaleatorio).type(usuario.email)
        cy.get('button[id="SubmitCreate"').click()
        cy.get('input[id="id_gender1"]').click()
        cy.get('h1[class="page-heading"]').should("have.text","Create an account")
        cy.get('input[name="customer_firstname"]').type(usuario.nome)
        cy.get('input[name="customer_lastname"]').type(usuario.sobrenome)
        cy.get('input[name="passwd"]').type(usuario.password)
        cy.get('select[id="days"]').select('20')
        cy.get('select[id="months"]').select('2')
        cy.get('select[id="years"]').select('2000')
        cy.get('input[id="address1"]').type(usuario.address)
        cy.get('input[id="city"]').type(usuario.city)
        cy.get('select[name="id_state"]').select('3')
        cy.get('input[id="postcode"]').type(usuario.cep)
        cy.get('select[id="id_country"]').select('21')
        cy.get('input[id="phone_mobile"]').type(usuario.telefone)
        cy.get('button[id="submitAccount"]').click()

    }

    //validação das mensagens de erro ao nao inserir os dados obrigatorios no cadastro
    validarErros(){
        cy.get('ol > :nth-child(1)').should('have.text','You must register at least one phone number.')
        cy.get('ol > :nth-child(2)').should('have.text','lastname is required.')
        cy.get('ol > :nth-child(3)').should('have.text','firstname is required.')
        cy.get('ol > :nth-child(4)').should('have.text','passwd is required.')
        cy.get('ol > :nth-child(5)').should('have.text','address1 is required.')
        cy.get('ol > :nth-child(6)').should('have.text','city is required.')
        cy.get('ol > :nth-child(7)').should('have.text',"The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
        cy.get('ol > :nth-child(8)').should('have.text',"This country requires you to choose a State.")

    }


}

export default buscador;