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
    title: 'Resumidor de Vídeos',
    period: '2026',
    date: '2026-03',
    highlight: true,
    description: {
      pt: 'Aplicação que gera resumos automáticos de vídeos, facilitando o consumo e a compreensão de conteúdos longos. O back-end em Python realiza a transcrição e o processamento do conteúdo, enquanto a interface em TypeScript apresenta o resultado de forma organizada.',
      en: 'Application that automatically generates video summaries, making long content easier to consume and understand. The Python back-end handles transcription and content processing, while the TypeScript interface presents the result in an organized way.',
    },
    features: {
      pt: ['Transcrição automática de vídeos', 'Geração de resumo do conteúdo', 'Interface web para envio e leitura', 'Processamento assíncrono'],
      en: ['Automatic video transcription', 'Content summary generation', 'Web interface for upload and reading', 'Asynchronous processing'],
    },
    tech: ['Python', 'TypeScript', 'API REST', 'IA / NLP'],
    repo: 'https://github.com/Rafaelhenriques01/Kodland',
    demo: null,
    gallery: ['/images/projeto-resumidor-1.svg', '/images/projeto-resumidor-2.svg'],
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
