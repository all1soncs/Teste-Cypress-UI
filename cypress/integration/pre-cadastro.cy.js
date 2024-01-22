///<reference types="Cypress" />

// No início do arquivo de teste Cypress
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    it('Deve completar o pré cadastro com sucesso', () => {

        let emailFaker = faker.internet.email()
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()

        cy.get('.icon-user-unfollow').click();
        cy.get('#reg_email').type(emailFaker);
        cy.get('#reg_password').type('teste_Aluno2');
        cy.get(':nth-child(4) > .button').click();

        cy.get(':nth-child(3) > [href="http://lojaebac.ebaconline.art.br/minha-conta/edit-account/"]').click();
        cy.get('#account_first_name').type(nomeFaker);
        cy.get('#account_last_name').type(sobrenomeFaker);
        cy.get('.woocommerce-Button').click();

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });
    it.only('Deve completar o pré-cadastro con sucesso usando comandos customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senhaforte#2@m', 'Fabiola', 'Fernando')
    });
});

