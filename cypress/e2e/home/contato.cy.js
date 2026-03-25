describe('formulário de contato da home', () => {                               // agrupa todos os testes relacionados ao formulário
  it('deve encaminhar para página de contato da respectiva agência', () => {    // descreve o comportamento esperado
        cy.on('uncaught:exception', () => false)                                // ignora erros JS do site que não são do teste
        cy.visit('https://portalinvestimento.com')                               // abre o site no browser
        cy.get('.popup-btn').should('contain', 'FAZER MEU MATCH')                // assertion: verifica se o popup existe com o texto correto
        cy.get('#closePopup').click()                                           // fecha o popup para acessar o formulário
        cy.get('#nome').type('Douglas Graeff')                                   // digita no campo de texto pelo id
        cy.get('#telefone').type('51991597229')                                 // digita no campo de texto pelo id
        cy.get('#objetivo').select('Comprar')                                    // seleciona uma opção num <select> pelo texto visível
        cy.get('#cidade').select('Canoas')                                       // seleciona uma opção num <select> pelo texto visível
        cy.get('#btnEnviar').click()                                            // clica no botão de envio
        cy.get('#nome').should('have.value', 'Douglas Graeff')                   // assertion: verifica o valor de um input de texto
        cy.get('#telefone').should('have.value', '51991597229')                 // assertion: verifica o valor de um input de texto
        cy.get('#objetivo').should('have.value', 'comprar')                      // assertion: verifica o value real do <select> (nem sempre igual ao texto visível)
        cy.get('#cidade').should('have.value', 'canoas')                        // assertion: verifica o value real do <select> (nem sempre igual ao texto visível)

  })
  })
  
describe('formulário de contato da home', () => {                               // agrupa todos os testes relacionados ao formulário
  it('não deve enviar o formulário com campos vazios', () => {    
 cy.on('uncaught:exception', () => false)                                // ignora erros JS do site que não são do teste
        cy.visit('https://portalinvestimento.com')                               // abre o site no browser
        cy.get('.popup-btn').should('contain', 'FAZER MEU MATCH')                // assertion: verifica se o popup existe com o texto correto
        cy.get('#closePopup').click() 
        cy.get('#btnEnviar').click()   

  })
  })