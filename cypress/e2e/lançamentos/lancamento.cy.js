describe('Lançamentos', () => {

        it('deve abrir a página corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
})

    it('deve abrir a página de lançamentos através do submenu lateral corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('#closePopup').click()
    cy.get('#menuToggle').click()
    cy.contains('.menu-item-com-submenu', 'Lançamentos').click()
    cy.contains('.submenu-item', 'SINATRA').click()
    cy.url().should('include', 'sinatra.html')
    cy.title().should('not.be.empty')   

})
})