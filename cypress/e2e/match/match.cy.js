describe('match', () => {

        it('deve abrir a página corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
})

    it('deve abrir a página de match através do submenu lateral corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('#closePopup').click()
    cy.get('#menuToggle').click()
    cy.contains('.menu-item', '🔥 Match Imobiliário').click()
    cy.contains('button', 'Começar').click()
    cy.get('[data-value="morar"]').click()
    cy.contains('button', 'Continuar').click({force: true})
    cy.contains('button', 'Continuar').click({force: true})
    cy.get('[data-value="2"]').first().click()
    cy.contains('button', 'Continuar').click({force: true})
    cy.get('[data-value="canoas"]').first().click()
    cy.contains('button', 'Começar a dar match').click()
    cy.get('.control-btn.super').click()
    cy.get('.btn-match-whats').click()
    cy.title().should('not.be.empty')   

})
})