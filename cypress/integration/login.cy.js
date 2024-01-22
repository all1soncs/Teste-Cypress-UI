///<reference types="Cypress" />
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        // Verificar se o login foi realizado com sucesso
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })

    it.only('Deve realizar login com sucesso - Usando arquivos de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
    })

    it('Deve exibir mensagem de erro e-mail incorreto', () => {

        cy.get('#username').type('aluno_abc@teste.com')
        cy.get('#password').type('teste@.com')
        cy.get('.woocommerce-form > .button').click()

        // Verificar a mensagem esperada
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')


    });

    it('Deve exibir mensagem de erro senha incorreta', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@.com')
        cy.get('.woocommerce-form > .button').click()

        // Verificar a mensagem esperada
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')


    });
})