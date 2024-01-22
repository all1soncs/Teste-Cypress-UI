describe('Deve selecionar um produto', () => {
    beforeEach(() => {
        cy.visit('produtos/')
        //cy.wait(9000); // Atraso de 1 segundo

    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar um produto da lista e adcionar no carrinho', () => {
        cy.get('[class="product-block grid"]').contains('Argus All-Weather Tank').click()


        var quantidade = 3
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Gray').click()
        cy.get('.input-text').clear().type(quantidade)
        //carrinho
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho')
        cy.get('.woocommerce-message > .button').click()

        // cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        // cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

    });


    it.only('Deve selecionar um produto ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Atomic Endurance Running Tee (V-neck)', 'M', 'Green', 5)
    });
});


