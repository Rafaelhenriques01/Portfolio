<h1 align="center">💻 Portfólio Profissional — Rafael Henriques Aquino Correa</h1>

<p align="center">
  Website de portfólio profissional desenvolvido para a disciplina <strong>Projeto de Software</strong><br/>
  Engenharia de Software — PUC Minas · Laboratório 01 (2º semestre/2026)
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img alt="Vercel" src="https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</p>

---

## 🔗 Acesso ao site publicado

> **🌐 Site online:** https://SEU-PROJETO.vercel.app
> _(substitua pelo link gerado após o deploy na Vercel — passo a passo na seção [Deploy](#-deploy-na-vercel))_

**Repositório:** https://github.com/Rafaelhenriques01/Portfolio

---

## 📌 Sobre o projeto

Website de portfólio pessoal, moderno e responsivo, criado para apresentar minha trajetória
acadêmica e profissional, os projetos que desenvolvi, minhas habilidades técnicas e meus canais
de contato — tudo centralizado em um único lugar, com versões em **português e inglês**.

- **Objetivo:** apresentar meu perfil profissional de forma clara, acessível e visualmente coerente.
- **Público-alvo:** recrutadores, empresas, professores e profissionais de tecnologia.
- **Área de atuação:** Engenharia de Software, Desenvolvimento Web, Banco de Dados, UI/UX e Automação.

---

## ✨ Funcionalidades

| Seção | Rota | O que faz |
| ----- | ---- | --------- |
| **Sobre Mim** | `/` | Apresentação com **versões em PT e EN** (troca instantânea no menu), formação, áreas de interesse, objetivos profissionais e habilidades técnicas agrupadas por categoria. |
| **Projetos** | `/projetos` | **Linha do tempo dinâmica** do projeto mais antigo ao mais recente, com filtro por tecnologia, imagens de cada projeto, tecnologias utilizadas, link do repositório no GitHub e **modal com galeria/carrossel** de telas. |
| **Experiências** | `/experiencias` | **Logo oficial da instituição**, cargo, período e descrição, com bloco expansível ("Saiba Mais") contendo as principais atividades e tecnologias. |
| **Contato** | `/contato` | Ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub, Instagram), botão de copiar contato e **formulário funcional** (nome, e-mail, telefone e mensagem) com **envio real de e-mail** via Serverless Function. |

**Recursos transversais:**

- 🌍 **Bilíngue (PT/EN)** — troca de idioma em todo o site, com preferência salva no navegador.
- 📱 **Design responsivo** — layout adaptado para desktop, tablet e celular (menu hambúrguer no mobile).
- ✅ **Validações de formulário** — no front-end (campo a campo) e também no back-end.
- ♿ **Acessibilidade** — navegação por teclado, `aria-labels`, foco visível, *skip link* e respeito a `prefers-reduced-motion`.
- 🎬 **Animações suaves** — transições entre páginas e revelação de conteúdo ao rolar (Framer Motion).
- 🚧 **Página 404** personalizada.

---

## 🎨 Protótipos (Figma)

Os wireframes de média fidelidade foram criados no Figma e serviram de base para a identidade
visual do site (tema escuro, tipografia monoespaçada e verde como cor de destaque).

🔗 **Arquivo no Figma:** https://www.figma.com/design/e4Malif4A6em6Vo9LXrWvZ/Untitled

| Sobre Mim | Projetos |
| :-------: | :------: |
| ![Protótipo Sobre Mim](docs/prototipos/01-sobre-mim.png) | ![Protótipo Projetos](docs/prototipos/02-projetos.png) |

| Detalhe do Projeto | Experiências | Contato |
| :----------------: | :----------: | :-----: |
| ![Protótipo Detalhe](docs/prototipos/03-projeto-detalhe.png) | ![Protótipo Experiências](docs/prototipos/04-experiencias.png) | ![Protótipo Contato](docs/prototipos/05-contato.png) |

> 📎 As imagens acima devem ser exportadas do Figma para `docs/prototipos/`.
> Veja as instruções em [`docs/prototipos/LEIA-ME.md`](docs/prototipos/LEIA-ME.md).

---

## 🛠️ Tecnologias utilizadas

### Front-end

| Tecnologia | Versão | Para que serve no projeto |
| ---------- | ------ | ------------------------- |
| [React](https://react.dev/) | 18 | Biblioteca de interface, com componentes reutilizáveis |
| [Vite](https://vite.dev/) | 6 | Build tool e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | 6 | Navegação entre as páginas (SPA) |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animações de página e revelação ao rolar |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Ícones (LinkedIn, GitHub, WhatsApp, e-mail…) |
| **CSS3 puro** | — | Estilos com variáveis CSS (*design tokens*), Grid e Flexbox |
| **JavaScript (ES2022)** | — | Lógica da aplicação |

### Back-end

| Tecnologia | Para que serve |
| ---------- | -------------- |
| **Vercel Serverless Functions** (Node.js) | Endpoint `POST /api/contact` que recebe o formulário |
| [**Resend API**](https://resend.com/) | Serviço de envio de e-mail (plano gratuito) |

### Ferramentas de desenvolvimento

| Ferramenta | Uso |
| ---------- | --- |
| ESLint 9 (+ plugins React) | Padronização e qualidade do código |
| Git / GitHub | Versionamento |
| GitHub Actions | CI: roda lint e build a cada push |
| Figma | Wireframes e protótipos |
| Vercel | Hospedagem gratuita na nuvem |

---

## 📦 Dependências

**Dependências de produção** (`dependencies`):

```json
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-router-dom": "^6.28.0",
"framer-motion": "^11.15.0",
"react-icons": "^5.4.0"
```

**Dependências de desenvolvimento** (`devDependencies`):

```json
"vite": "^6.0.5",
"@vitejs/plugin-react": "^4.3.4",
"eslint": "^9.17.0",
"eslint-plugin-react": "^7.37.0",
"eslint-plugin-react-hooks": "^5.1.0",
"eslint-plugin-react-refresh": "^0.4.16",
"globals": "^15.14.0",
"@types/react": "^18.3.17",
"@types/react-dom": "^18.3.5"
```

> Todas são instaladas automaticamente com um único `npm install`.

---

## 📁 Estrutura de diretórios

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml                  # Integração contínua (lint + build)
├── api/
│   └── contact.js                  # BACK-END: Serverless Function de envio de e-mail
├── docs/
│   └── prototipos/                 # Imagens dos protótipos do Figma
├── scripts/
│   └── recortar-foto.mjs           # Ferramenta de recorte de imagem (sem dependências)
├── public/
│   ├── curriculo.pdf                # Currículo em PDF (botão "Baixar Currículo")
│   ├── favicon.svg
│   └── images/                     # Imagens dos projetos e logos
│       ├── avatar.svg
│       ├── foto-perfil.png        # Foto de perfil (recortada)
│       ├── tubify-*.png           # Telas reais do projeto Tubify
│       ├── projeto-*.svg           # Telas dos demais projetos
│       ├── logo-puc-minas.png      # Logo oficial da PUC Minas
│       └── logo-comp.svg           # Logo oficial do COMP (Empresa Júnior)
├── src/
│   ├── components/                 # Componentes reutilizáveis
│   │   ├── CompanyLogo.jsx/.css    # Painel com a logo da empresa
│   │   ├── ContactForm.jsx/.css    # Formulário com validação e envio
│   │   ├── Footer.jsx/.css         # Rodapé
│   │   ├── Layout.jsx              # Cabeçalho + conteúdo + rodapé
│   │   ├── Navbar.jsx/.css         # Menu de navegação (com menu mobile)
│   │   ├── PageTransition.jsx      # Animação de troca de página
│   │   ├── ProjectModal.jsx/.css   # Modal com carrossel de imagens do projeto
│   │   ├── Reveal.jsx              # Animação de revelação ao rolar
│   │   ├── ScrollToTop.jsx         # Volta ao topo ao trocar de rota
│   │   ├── SectionHeader.jsx       # Cabeçalho padrão das seções
│   │   └── SocialLinks.jsx/.css    # Ícones das redes sociais
│   ├── context/
│   │   └── LanguageContext.jsx     # Estado global do idioma (PT/EN)
│   ├── data/                       # ⭐ CONTEÚDO DO PORTFÓLIO (edite aqui)
│   │   ├── profile.js              # Dados pessoais, contato, sobre e habilidades
│   │   ├── projects.js             # Projetos da linha do tempo
│   │   └── experiences.js          # Experiências profissionais
│   ├── i18n/
│   │   └── translations.js         # Textos da interface em PT e EN
│   ├── pages/                      # Páginas da aplicação
│   │   ├── About.jsx/.css          # Sobre Mim (rota /)
│   │   ├── Projects.jsx/.css       # Projetos (rota /projetos)
│   │   ├── Experience.jsx/.css     # Experiências (rota /experiencias)
│   │   ├── Contact.jsx/.css        # Contato (rota /contato)
│   │   └── NotFound.jsx/.css       # Página 404
│   ├── styles/
│   │   ├── variables.css           # Design tokens (cores, fontes, espaçamentos)
│   │   ├── global.css              # Reset e estilos globais
│   │   └── utilities.css           # Classes utilitárias (botões, chips, cards)
│   ├── App.jsx                     # Definição das rotas
│   ├── App.css
│   └── main.jsx                    # Ponto de entrada da aplicação
├── .env.example                    # Modelo das variáveis de ambiente
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json                     # Configuração de deploy e rotas SPA
└── vite.config.js
```

---

## 🚀 Instalação e execução local

### Pré-requisitos

- [Node.js](https://nodejs.org/) **18 ou superior**
- npm (já vem com o Node.js) e [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/Rafaelhenriques01/Portfolio.git

# 2. Entrar na pasta do projeto
cd Portfolio

# 3. Instalar as dependências
npm install

# 4. (Opcional) Configurar o envio de e-mail do formulário
cp .env.example .env
# depois abra o arquivo .env e preencha as variáveis

# 5. Rodar em modo de desenvolvimento
npm run dev
```

O site abre automaticamente em **http://localhost:5173**.

### Scripts disponíveis

| Comando | O que faz |
| ------- | --------- |
| `npm run dev` | Sobe o servidor de desenvolvimento (com *hot reload*) |
| `npm run build` | Gera a versão otimizada de produção na pasta `dist/` |
| `npm run preview` | Serve localmente o build de produção |
| `npm run lint` | Verifica o padrão do código com o ESLint |

---

## ✉️ Formulário de contato (back-end)

O formulário envia os dados para a Serverless Function `POST /api/contact`, que valida as
informações no servidor e dispara o e-mail pela API do **Resend**.

### Como configurar

1. Crie uma conta gratuita em **https://resend.com** e gere uma **API Key**.
2. Preencha as variáveis de ambiente (arquivo `.env` local e/ou painel da Vercel):

   | Variável | Descrição | Exemplo |
   | -------- | --------- | ------- |
   | `RESEND_API_KEY` | Chave da API do Resend | `re_123abc...` |
   | `CONTACT_TO_EMAIL` | E-mail que **recebe** as mensagens | `7591rafa@gmail.com` |
   | `CONTACT_FROM_EMAIL` | Remetente | `Portfolio <onboarding@resend.dev>` |

3. Pronto: o formulário passa a enviar e-mails de verdade, tanto local (`npm run dev`)
   quanto em produção.

> 💡 Se as variáveis não estiverem configuradas, o site continua funcionando normalmente:
> o formulário exibe uma mensagem de erro amigável com um link alternativo que abre o
> aplicativo de e-mail do visitante com a mensagem já preenchida.

**Validações aplicadas** (front-end e back-end): nome com no mínimo 3 caracteres,
e-mail em formato válido e mensagem com no mínimo 10 caracteres.

---

## ☁️ Deploy na Vercel

1. Acesse **https://vercel.com** e entre com a sua conta do GitHub.
2. Clique em **Add New → Project** e selecione o repositório `Portfolio`.
3. A Vercel detecta o Vite automaticamente (não é preciso mudar nada):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Em **Environment Variables**, adicione `RESEND_API_KEY`, `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL`.
5. Clique em **Deploy**. Ao final, copie a URL gerada e cole no topo deste README.

> A pasta `api/` é publicada automaticamente como Serverless Function, e o arquivo
> `vercel.json` garante que as rotas do React Router (`/projetos`, `/contato`…)
> funcionem ao recarregar a página.

---

## 🧑‍💻 Como personalizar o conteúdo

Todo o conteúdo do portfólio fica isolado na pasta [`src/data/`](src/data/) — não é preciso
mexer nos componentes:

| Arquivo | O que editar |
| ------- | ------------ |
| `src/data/profile.js` | Nome, cargo, **e-mail, WhatsApp, LinkedIn, Instagram**, texto do "Sobre Mim", formação, interesses, objetivos e habilidades |
| `src/data/projects.js` | Projetos da linha do tempo (nome, descrição PT/EN, tecnologias, link do GitHub e imagens) |
| `src/data/experiences.js` | Experiências (empresa, cargo, período, descrição e atividades) |
| `src/i18n/translations.js` | Textos fixos da interface (botões, títulos, mensagens) |
| `src/styles/variables.css` | Cores, fontes e espaçamentos da identidade visual |

**Para trocar as imagens dos projetos por prints/GIFs reais:** salve os arquivos em
`public/images/` e atualize o campo `gallery` do projeto em `src/data/projects.js`
(ex.: `gallery: ['/images/meu-print.png', '/images/minha-demo.gif']`).

**Para adicionar sua foto:** salve como `public/images/avatar.jpg` e troque o `src`
da imagem em `src/pages/About.jsx`.

**Para atualizar o currículo:** substitua o arquivo `public/curriculo.pdf`.

---

## 📅 Entregas do laboratório

- [x] **Lab01S01** — Repositório com README, wireframes no Figma, protótipo do front-end, navegação e layout principal (cabeçalho, rodapé e área de conteúdo).
- [x] **Lab01S02** — "Sobre Mim" em PT/EN, "Projetos" com timeline dinâmica, "Experiências" com dados organizados, "Contato" com ícones e formulário funcional, validações e responsividade.
- [x] **Lab01S03** — Deploy na nuvem, ajustes visuais e de usabilidade, imagens dos projetos e README final.

---

## 👤 Autor

**Rafael Henriques Aquino Correa**
Estudante de Engenharia de Software — PUC Minas

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-henriques-691446338)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Rafaelhenriques01)
[![E-mail](https://img.shields.io/badge/E--mail-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:7591rafa@gmail.com)

---

<p align="center">
  Desenvolvido para a disciplina <strong>Projeto de Software</strong> — Profa. Milena Menezes Adão<br/>
  PUC Minas · Engenharia de Software · 2026
</p>
