describe('poa', () => {

    it('deve abrir a página corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
})

    it('deve selecionar a região poa', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('#closePopup').click()
    cy.get('#heroCity').select('Porto Alegre - RS')
    cy.get('#heroSearchBtn').click()
    cy.url().should('include', 'moinhos.html')
})


    it('deve abrir a página canoas através do submenu lateral corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('#closePopup').click()
    cy.get('#menuToggle').click()
    cy.get('.menu-item-com-submenu').first().click()
    cy.contains('.submenu-item', 'Porto Alegre').click()
    cy.url().should('include', 'moinhos.html')
    cy.title().should('not.be.empty')
})



})