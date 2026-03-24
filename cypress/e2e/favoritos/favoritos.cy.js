describe('Favoritos', () => {

        it('deve abrir a página corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
})

    it('deve abrir a página de favoritos através do submenu lateral corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('#closePopup').click()
    cy.get('#menuToggle').click()
    cy.contains('.menu-item', '❤️ Meus Favoritos').click()
    cy.get('.btn-browse').click()
    cy.title().should('not.be.empty')  
    cy.get('#closePopup').click()
    cy.get('.va-avatar-bubble').click()
    cy.get('.va-close').click()

})
})