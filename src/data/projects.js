/**
 * ---------------------------------------------------------------------------
 * PROJETOS - ordenados do MAIS ANTIGO para o MAIS RECENTE (linha do tempo)
 * ---------------------------------------------------------------------------
 * Cada projeto contem: nome, descricao (pt/en), tecnologias, link do
 * repositorio no GitHub, link do deploy (opcional) e imagens/GIFs.
 *
 * Para trocar as imagens: coloque os arquivos em /public/images/ e
 * atualize o array `gallery`, ex: '/images/meu-print.png'
 */

export const projects = [
  {
    id: 'login-api-rest',
    title: 'Sistema de Login com API REST',
    period: '2024',
    date: '2024-09',
    highlight: false,
    description: {
      pt: 'Sistema completo de autenticação e gerenciamento de usuários, com telas de login e cadastro integradas a uma API REST. Contempla operações de CRUD, validação de formulários e persistência dos dados em banco relacional.',
      en: 'Complete authentication and user management system, with login and sign-up screens integrated to a REST API. It covers CRUD operations, form validation and data persistence in a relational database.',
    },
    features: {
      pt: ['Login e cadastro de usuários', 'Autenticação e validação de sessão', 'CRUD completo de usuários', 'Consumo de API REST'],
      en: ['User login and sign-up', 'Authentication and session validation', 'Full user CRUD', 'REST API consumption'],
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'API REST', 'MySQL'],
    repo: 'https://github.com/Rafaelhenriques01/ProjetoWeb1',
    demo: null,
    gallery: ['/images/projeto-login-1.svg', '/images/projeto-login-2.svg'],
  },
  {
    id: 'diretorio-receitas',
    title: 'Diretório de Receitas',
    period: '2025',
    date: '2025-03',
    highlight: false,
    description: {
      pt: 'Aplicação web para consulta e organização de receitas culinárias, integrando front-end e back-end através de uma API. O usuário pode navegar por categorias, buscar receitas e visualizar ingredientes e modo de preparo.',
      en: 'Web application for browsing and organizing cooking recipes, integrating front-end and back-end through an API. Users can browse categories, search recipes and view ingredients and instructions.',
    },
    features: {
      pt: ['Listagem e busca de receitas', 'Organização por categorias', 'Integração front-end + back-end', 'Layout responsivo'],
      en: ['Recipe listing and search', 'Category organization', 'Front-end + back-end integration', 'Responsive layout'],
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'API REST'],
    repo: 'https://github.com/Rafaelhenriques01/ProjetoWeb1',
    demo: null,
    gallery: ['/images/projeto-receitas-1.svg', '/images/projeto-receitas-2.svg'],
  },
  {
    id: 'resumidor-videos',
    title: 'Tubify — Resumidor de Vídeos',
    period: '2026',
    date: '2026-03',
    highlight: true,
    description: {
      pt: 'Aplicação web que transforma vídeos do YouTube em resumos de leitura rápida. O back-end em Python baixa o vídeo, transcreve o áudio com o Whisper e gera o resumo com modelos de linguagem; a interface apresenta os pontos-chave organizados, com contas de usuário, histórico, favoritos e tema claro/escuro. Desenvolvido em dupla com Luiz Henrique Horta Oliveira.',
      en: 'Web application that turns YouTube videos into quick-read summaries. The Python back-end downloads the video, transcribes the audio with Whisper and generates the summary with language models; the interface shows the organized key points, with user accounts, history, favourites and light/dark theme. Built in a pair with Luiz Henrique Horta Oliveira.',
    },
    features: {
      pt: [
        'Transcrição automática do áudio com Whisper',
        'Resumo em tópicos gerado por IA',
        'Autenticação, dashboard e histórico de resumos',
        'Favoritos e exportação do resumo em PDF',
        'Tema claro/escuro e layout responsivo',
      ],
      en: [
        'Automatic audio transcription with Whisper',
        'AI-generated bullet point summary',
        'Authentication, dashboard and summary history',
        'Favourites and PDF export of the summary',
        'Light/dark theme and responsive layout',
      ],
    },
    tech: ['Python', 'Flask', 'Whisper', 'SQLite', 'Tailwind CSS', 'IA / NLP'],
    repo: 'https://github.com/LuizHenriqueHO/SinteseDeVideo-Youtube-Python',
    demo: null,
    gallery: [
      '/images/tubify-1-home.png',
      '/images/tubify-2-resumo.png',
      '/images/tubify-3-dashboard.png',
      '/images/tubify-4-login.png',
    ],
  },
  {
    id: 'assistente-academico',
    title: 'Assistente Acadêmico',
    period: '2026',
    date: '2026-05',
    highlight: true,
    description: {
      pt: 'Aplicação web criada para ajudar estudantes a organizar suas atividades acadêmicas: disciplinas, prazos de entrega, provas e anotações. Desenvolvida em TypeScript, com foco em usabilidade e organização visual das informações.',
      en: 'Web application built to help students organize their academic activities: courses, deadlines, exams and notes. Developed in TypeScript, focused on usability and clear visual organization of information.',
    },
    features: {
      pt: ['Cadastro de disciplinas e atividades', 'Controle de prazos e entregas', 'Painel com visão geral do semestre', 'Interface responsiva'],
      en: ['Course and activity registration', 'Deadline and delivery tracking', 'Semester overview dashboard', 'Responsive interface'],
    },
    tech: ['TypeScript', 'React', 'Node.js', 'CSS3'],
    repo: 'https://github.com/Rafaelhenriques01/oi',
    demo: null,
    gallery: ['/images/projeto-assistente-1.svg', '/images/projeto-assistente-2.svg'],
  },
  {
    id: 'ndtech-system',
    title: 'ND Tech System — ERP para Manutenção Industrial',
    period: '2026 — atual',
    date: '2026-05',
    highlight: true,
    description: {
      pt: 'ERP web e mobile para empresas de manutenção industrial, que centraliza toda a gestão operacional em uma única plataforma. O sistema cobre o fluxo completo da empresa: do cadastro de clientes e da elaboração de orçamentos até a execução dos serviços em campo, controle de estoque, relatórios técnicos e gestão financeira. Foi concebido com foco em produtividade, digitalização de processos e funcionamento offline para as equipes em campo, sincronizando os dados automaticamente quando há conexão.',
      en: 'Web and mobile ERP for industrial maintenance companies, centralizing the whole operation in a single platform. The system covers the complete business flow: from client registration and quotations to field service execution, inventory control, technical reports and financial management. It was designed around productivity, process digitalization and offline operation for field teams, syncing data automatically once a connection is available.',
    },
    features: {
      pt: [
        'Gestão de clientes, unidades e equipes',
        'Memorial de cálculo, orçamento e ordem de serviço',
        'RDO (Relatório Diário de Obra) e Relatório Técnico',
        'Controle de almoxarifado e estoque',
        'Gestão financeira',
        'Assinaturas digitais e geração de documentos',
        'Sincronização offline/online para o aplicativo móvel',
      ],
      en: [
        'Management of clients, units and teams',
        'Calculation memorial, quotation and service order',
        'Daily work report (RDO) and technical report',
        'Warehouse and inventory control',
        'Financial management',
        'Digital signatures and document generation',
        'Offline/online synchronization for the mobile app',
      ],
    },
    role: {
      pt: [
        'Levantamento e análise de requisitos junto aos usuários',
        'Definição da arquitetura do sistema',
        'Modelagem do banco de dados',
        'Desenvolvimento Full Stack das aplicações web e mobile',
        'Desenvolvimento da API e integrações',
        'Testes, validação e evolução contínua do produto',
      ],
      en: [
        'Requirements gathering and analysis with the users',
        'Definition of the system architecture',
        'Database modeling',
        'Full Stack development of the web and mobile applications',
        'API development and integrations',
        'Testing, validation and continuous evolution of the product',
      ],
    },
    tech: ['React', 'React Native (Expo)', 'TypeScript', 'Supabase', 'PostgreSQL', 'Fastify', 'Turborepo'],
    // Sistema proprietario: o repositorio e privado, entao nao ha link publico
    repo: null,
    privateRepo: true,
    demo: null,
    gallery: ['/images/ndtech-logo.png'],
  },
  {
    id: 'portfolio',
    title: { pt: 'Portfólio Profissional', en: 'Professional Portfolio' },
    period: '2026',
    date: '2026-09',
    highlight: true,
    description: {
      pt: 'Este próprio site: um portfólio profissional desenvolvido em React com Vite, com navegação SPA, versões em português e inglês, linha do tempo de projetos e formulário de contato com envio de e-mail via Serverless Function.',
      en: 'This very website: a professional portfolio built with React and Vite, featuring SPA navigation, Portuguese and English versions, a project timeline and a contact form that sends e-mail through a Serverless Function.',
    },
    features: {
      pt: ['Site multilíngue (PT/EN)', 'Linha do tempo de projetos', 'Formulário de contato funcional', 'Design responsivo e animações'],
      en: ['Multilingual website (PT/EN)', 'Project timeline', 'Working contact form', 'Responsive design and animations'],
    },
    tech: ['React', 'Vite', 'React Router', 'Framer Motion', 'Vercel'],
    repo: 'https://github.com/Rafaelhenriques01/Portfolio',
    demo: null,
    gallery: ['/images/projeto-portfolio-1.svg', '/images/projeto-portfolio-2.svg'],
  },
]

/** Todas as tecnologias usadas nos projetos, sem repeticao (para o filtro). */
export const allTechnologies = [...new Set(projects.flatMap((p) => p.tech))].sort()
