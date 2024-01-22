class EnderecoPage {
    editarEmderecoFaturamento(nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep, contato, email) {
        //elementos + ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').click().clear().type(nome)
        cy.get('#billing_last_name').click().clear().type(sobrenome)
        cy.get('#billing_company').click().clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais)
            .get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').click().clear().type(rua)
        cy.get('#billing_address_2').click().clear().type(numero)
        cy.get('#billing_city').click().clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').click().clear().type(cep)
        cy.get('#billing_phone').click().clear().type(contato)
        cy.get('#billing_email').click().clear().type(email)
        cy.get(':nth-child(2) > .button').click()

    }
    editarEnderecoEntrega() {
        //elementos + ações


    }
}

export default new EnderecoPage()