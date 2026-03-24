# 🧪 QA Automation — Portal de Investimento

Testes E2E automatizados com **Cypress** aplicados em sistema real em produção.

> Este repositório faz parte do meu portfólio de QA. Os testes são escritos e executados contra o [Portal de Investimento](https://portalinvestimento.com) — uma plataforma imobiliária real com usuários ativos.

---

## 🚀 Tecnologias

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📁 Estrutura dos Testes

```
cypress/
└── e2e/
    ├── spec.cy.js          → Testes gerais da home (URL, título, popup)
    ├── canoas/
    │   └── canoas.cy.js    → Testes da página de Canoas e navegação via menu
    ├── lançamentos/
    │   └── lancamento.cy.js → Testes da seção de lançamentos
    ├── match/
    │   └── match.cy.js     → Testes do fluxo completo do Match Imobiliário
    └── poa/
        └── poa.cy.js       → Testes da página de Porto Alegre
```

---

## ✅ Cobertura de Testes

### `spec.cy.js` — Home
- Verifica se o site abre corretamente
- Valida URL e título da página
- Verifica exibição do popup do Match Imobiliário
- Testa fechamento do popup
- Testa seleção de região via dropdown
- Testa navegação para páginas de Canoas, Moinhos e Santa Mônica

### `canoas.cy.js` — Canoas
- Acesso direto à página de Canoas
- Navegação via menu lateral → Nossas Agências → Canoas

### `lancamento.cy.js` — Lançamentos
- Navegação via menu lateral → Lançamentos → SINATRA

### `match.cy.js` — Match Imobiliário
- Fluxo completo do onboarding:
  - Seleção de objetivo (Morar)
  - Definição de orçamento
  - Seleção de número de quartos
  - Seleção de região (Canoas)
  - Início do match
  - Interação com card (Super Like)
  - Redirecionamento para WhatsApp

### `poa.cy.js` — Porto Alegre
- Acesso e validação da página de Porto Alegre

---

## ⚙️ Como executar

### Pré-requisitos
- Node.js v18+
- npm v9+

### Instalação

```bash
git clone https://github.com/graeff01/qa-automation---Portal-de-Investimento.git
cd qa-automation---Portal-de-Investimento
npm install
```

### Abrindo a interface visual

```bash
npx cypress open
```

### Executando todos os testes via terminal

```bash
npx cypress run
```

---

## 💡 Sobre o projeto

O **Portal de Investimento** é uma plataforma imobiliária desenvolvida por mim e que está em produção com clientes reais. Decidi usar meu próprio sistema como alvo dos testes automatizados porque:

- Conheço profundamente os fluxos e sei o que deve ser testado
- Os testes rodam contra um ambiente real, não um mock
- Qualquer bug encontrado pelo Cypress é um bug real

> "Sei onde o software quebra porque já o construí."

---

## 👨‍💻 Autor

**Douglas Graeff**  
QA Analyst | Manual Testing | Cypress | Telecom & Networks  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/graeffdouglas)

