describe('Canoas', () => {

    it('deve abrir a página canoas corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com/canoas.html')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
})

    it('deve selecionar a região Canoas', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('#closePopup').click()
    cy.get('#heroCity').select('Canoas - RS')
    cy.get('#heroSearchBtn').click()
    cy.url().should('include', 'canoas.html')
})

    it('deve abrir a página canoas através do submenu lateral corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('#closePopup').click()
    cy.get('#menuToggle').click()
    cy.get('.menu-item-com-submenu').first().click()
    cy.contains('.submenu-item', 'Canoas').click()
    cy.url().should('include', 'canoas.html')
    cy.title().should('not.be.empty')
})

})