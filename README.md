Markdown
# 💻 Portfólio Profissional — João Prado Campos

> Website de portfólio profissional moderno e responsivo desenvolvido para a disciplina de Laboratório de Desenvolvimento de Software (PUC Minas).

---

## 📌 Descrição do Projeto

Este projeto consiste em um website de portfólio pessoal interativo com o objetivo de apresentar minha trajetória acadêmica e profissional, habilidades técnicas, histórico de projetos e canais de contato de forma clara e acessível.

* **Objetivo:** Exibir perfil profissional, linha do tempo de projetos, histórico de experiências e disponibilizar canal direto de contato com formulário de envio por e-mail e links sociais.
* **Público-alvo:** Recrutadores, desenvolvedores, professores e profissionais da área de tecnologia.

---

## 📄 Seções da Aplicação

O sistema conta com 4 páginas principais acessadas através do menu de navegação:

1. **Sobre Mim (`/`):** Breve apresentação em português e inglês, destacando formação, áreas de atuação (Engenharia de Software/Desenvolvimento), interesses e objetivos profissionais.
2. **Projetos (`/projetos`):** Linha do tempo dinâmica dos projetos desenvolvidos, contendo nome, descrição, tecnologias utilizadas, link para repositório do GitHub e mídia interativa (imagens/GIFs).
3. **Experiências (`/experiencias`):** Espaço estruturado relatando experiências profissionais, estágios, trabalhos freelance e participações em eventos técnicos.
4. **Contato (`/contato`):** Página com ícones sociais clicáveis (E-mail, LinkedIn, GitHub, WhatsApp) e formulário interativo de mensagem com funcionalidade de envio direto por e-mail.

---

## 🛠️ Tecnologias e Dependências

### Core & Frameworks
* **React.js** (v18+) - Biblioteca principal para construção da interface de usuário.
* **Vite** - Build tool e ambiente de desenvolvimento rápido.
* **JavaScript (ES6+)** - Linguagem base do projeto.

### Dependências & Bibliotecas
* **`react-router-dom`** - Gerenciamento de rotas e navegação client-side SPA.
* **`lucide-react`** - Conjunto de ícones para componentes e botões de contato.

### Ferramentas de Design & Versionamento
* **Figma** - Prototipação de média/alta fidelidade da interface.
* **Git & GitHub** - Controle de versão e hospedagem do código-fonte.
* **ESLint** - Padronização e qualidade de código.

---

## 🎨 Protótipos (Wireframes & UI Design)

> 🔗 **Link do Figma:** [Clique aqui para acessar o protótipo no Figma](https://www.figma.com) *(Substitua pelo seu link do Figma)*

### Layouts das Telas
![Wireframe / Protótipo - Sobre Mim](./src/assets/prototipo-sobre-mim.png)
![Wireframe / Protótipo - Projetos](./src/assets/prototipo-projetos.png)
![Wireframe / Protótipo - Experiências](./src/assets/prototipo-experiencias.png)
![Wireframe / Protótipo - Contato](./src/assets/prototipo-contato.png)

---

## 📁 Estrutura de Diretórios do Projeto

```text
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/           # Imagens, GIFs e logotipos
│   ├── components/       # Componentes reutilizáveis (Navbar, Footer, Cards, etc.)
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.jsx        # Página Sobre Mim (PT/EN)
│   │   ├── Projects.jsx    # Página de Projetos (Timeline)
│   │   ├── Experience.jsx  # Página de Experiências
│   │   └── Contact.jsx     # Página de Contato + Formulário
│   ├── App.jsx           # Componente raiz com layout base
│   ├── main.jsx          # Ponto de entrada do React
│   ├── routes.jsx        # Configuração centralizada de rotas
│   └── index.css         # Estilos globais e resets CSS
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
🚀 Como Executar o Projeto Localmente
Pré-requisitos
Node.js (versão 18 ou superior)

npm ou yarn instalado

Passo a passo
Clonar o repositório:

Bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
Acessar a pasta do projeto:

Bash
cd NOME_DO_REPOSITORIO
Instalar as dependências:

Bash
npm install
Iniciar o servidor de desenvolvimento:

Bash
npm run dev
Abra o navegador e acesse a URL exibida no terminal (geralmente http://localhost:5173).

🌐 Hospedagem na Nuvem
Link de Acesso (Produção): https://seu-portfolio.vercel.app (Em breve / A ser atualizado na Sprint 03)

👤 Autor
João Prado Campos

Estudante de Engenharia de Software — PUC Minas
