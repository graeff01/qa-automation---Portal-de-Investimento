describe('Portal de Investimento', () => {
  it('deve abrir o site corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
  })

  it('deve exibir o popup do Match Imobiliário', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('.popup-btn').should('be.visible')
    cy.get('.popup-btn').should('contain', 'FAZER MEU MATCH')
    cy.get('#closePopup').click()
    cy.get('.popup-overlay').should('not.be.visible')
  })

    it('deve selecionar a região Canoas', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com')
    cy.get('#closePopup').click()
    cy.get('#heroCity').select('Canoas - RS')
    cy.get('#heroSearchBtn').click()
    cy.url().should('include', 'canoas.html')
  })

  it('deve abrir a página canoas corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com/canoas.html')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
  })

  it('deve abrir a página moinhos corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com/moinhos.html')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
  })

  it('deve abrir a página santa monica corretamente', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://portalinvestimento.com/santamonica.html')
    cy.url().should('include', 'portalinvestimento.com')
    cy.title().should('not.be.empty')
  })

})