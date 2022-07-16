describe('home page', ()=>{
    it("app deve estar online", ()=>{
        cy.viewport(1920, 1080)
        cy.visit("https://buger-eats.vercel.app")
        cy.get('a[href="/deliver"]').click()
        cy.get('h1').should("have.text", "Cadastre-se para  fazer entregas" )


        var entregador={
            nome:"lucas martins",
            cpf:"00000014141",
            email:"lmartins763@gmail.com",
            whatsapp:"11999999999",
            endereco:{
                cep:"06417030",
                rua:"Rua Tupi",
                numero: "279",
                complemento:"casa",
                bairro:"São Silvestre",
                cidade:"Barueri/SP"

            },
            metodo_entrega:"Moto",
            cnh:"cnh-digital.jpg"
        }
        //preenchimento dos dados ---------------------------------------------
        cy.get('input[placeholder="Nome completo"]').type(entregador.nome)
        cy.get('input[placeholder="CPF somente números"]').type(entregador.cpf)
        cy.get('input[placeholder="E-mail"]').type(entregador.email)
        cy.get('input[placeholder="Whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        // buscador de cep------------------------------------------
        cy.get('input[value="Buscar CEP"]').click()
        //validação do preenchimento automatico --------------------------------
        cy.get('input[name="address"]').should("have.value","Rua Tupi")
        cy.get('input[name="district"]').should("have.value","Vila São Silvestre")
        cy.get('input[name="city-uf"]').should("have.value","Barueri/SP")
        //-----------------------------------------------------------------------
        //preenchimento dos dados -----------------------------------------------
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        //selecionar metodo de entrega baseado na variavel entregador.cnh
        cy.contains(".delivery-method li", entregador.metodo_entrega).click()
        // inserir imagem no campo da cnh
        cy.get('input[style="display: none;"]').attachFile(entregador.cnh)
        cy.get('.button-success').click()
        cy.get('.swal2-container .swal2-html-container')
            .should("have.text",'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')





    })
})