# 🧪 QA Automation — Estudo Prático com Cypress

> Repositório de aprendizado em QA Automation aplicado a um sistema real em produção.
> Os testes são escritos contra o [Portal de Investimento](https://portalinvestimento.com) — plataforma imobiliária real com usuários ativos.

---

## 🚀 Tecnologias

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📚 O que estou aprendendo

Este repositório documenta minha jornada prática em QA Automation. Cada teste foi escrito, executado e debugado por mim — não copiado de tutorial.

### Conceitos aplicados até agora

| Conceito | O que é | Onde apliquei |
|---|---|---|
| `cy.visit()` | Abre uma URL no browser | Todos os testes |
| `cy.get()` | Seleciona elemento por seletor CSS/ID | Todos os testes |
| `cy.get().type()` | Digita texto em um campo de input | `contato.cy.js` |
| `cy.get().click()` | Clica em um elemento | Todos os testes |
| `cy.get().select()` | Seleciona opção em um `<select>` | `contato.cy.js`, `match.cy.js` |
| `.should('contain')` | Assertion: verifica se tem o texto | `spec.cy.js`, `contato.cy.js` |
| `.should('be.visible')` | Assertion: verifica se o elemento está visível | `spec.cy.js` |
| `.should('not.be.visible')` | Assertion: verifica se o elemento sumiu | `spec.cy.js` |
| `.should('have.value')` | Assertion: verifica o valor de um input ou select | `contato.cy.js` |
| `.should('include')` | Assertion: verifica se a URL contém um trecho | `canoas.cy.js`, `poa.cy.js` |
| `cy.on('uncaught:exception')` | Ignora erros JS do site que não são do teste | Todos os testes |
| `describe / it` | Organiza e nomeia os testes | Todos os testes |

---

## 🔍 Aprendizado importante: `value` vs texto visível

Num `<select>`, o texto que o usuário vê na tela pode ser diferente do `value` real do elemento HTML.

```html
<!-- O usuário vê "Comprar", mas o value é "comprar" -->
<option value="comprar">Comprar</option>
```

Por isso `.should('have.value', 'Comprar')` falha — o correto é `.should('have.value', 'comprar')`.
Sempre inspecione o elemento no DevTools antes de escrever a assertion.

---

## 📁 Estrutura dos Testes

```
cypress/
└── e2e/
    ├── spec.cy.js              → Home: URL, título, popup, navegação por região
    ├── home/
    │   ├── contato.cy.js       → Formulário de contato: preenchimento e assertions
    │   └── popup.cy.js         → Comportamento do popup inicial
    ├── canoas/
    │   └── canoas.cy.js        → Página de Canoas e navegação via menu
    ├── favoritos/
    │   └── favoritos.cy.js     → Navegação na aba de favoritos
    ├── lançamentos/
    │   └── lancamento.cy.js    → Seção de lançamentos
    ├── match/
    │   └── match.cy.js         → Fluxo completo do Match Imobiliário
    └── poa/
        └── poa.cy.js           → Página de Porto Alegre
```

---

## ✅ Cobertura de Testes

### `spec.cy.js` — Home
- Verifica se o site abre e a URL está correta
- Valida título da página
- Verifica exibição e fechamento do popup
- Testa navegação para Canoas, Moinhos e Santa Mônica via dropdown

### `contato.cy.js` — Formulário de Contato
- Preenche todos os campos e verifica os valores antes do envio
- Testa comportamento com formulário vazio (teste negativo)

### `canoas.cy.js` — Canoas
- Acesso direto à página de Canoas
- Navegação via menu lateral → Nossas Agências → Canoas

### `lancamento.cy.js` — Lançamentos
- Navegação via menu lateral → Lançamentos → SINATRA

### `match.cy.js` — Match Imobiliário
- Fluxo completo: objetivo, orçamento, quartos, região, match, Super Like, WhatsApp

### `poa.cy.js` — Porto Alegre
- Acesso e validação da página de Porto Alegre

---

## 💡 Por que testei um sistema real?

O Portal de Investimento é uma plataforma que desenvolvi e está em produção com clientes reais. Usar meu próprio sistema como alvo dos testes significa:

- Qualquer bug encontrado pelo Cypress é um bug real
- Os testes rodam contra ambiente de produção, não mock
- Conheço os fluxos e sei exatamente o que deve ser validado

> "Sei onde o software quebra porque já o construí."

---

## 👨‍💻 Autor

**Douglas Graeff**
QA Analyst | Manual Testing | Cypress | Telecom & Networks

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/graeffdouglas)
