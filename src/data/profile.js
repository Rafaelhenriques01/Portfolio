/**
 * ---------------------------------------------------------------------------
 * DADOS PESSOAIS
 * ---------------------------------------------------------------------------
 * Este e o unico arquivo que voce precisa editar para atualizar seus dados
 * de contato e redes sociais. Todo o site consome as informacoes daqui.
 */

export const profile = {
  name: 'Rafael Henriques Aquino Correa',
  shortName: 'Rafael Correa',
  initials: 'RC',

  role: {
    pt: 'Estudante de Engenharia de Software',
    en: 'Software Engineering Student',
  },

  headline: {
    pt: 'Desenvolvimento Web · Banco de Dados · UI/UX',
    en: 'Web Development · Databases · UI/UX',
  },

  location: {
    pt: 'Belo Horizonte, Minas Gerais — Brasil',
    en: 'Belo Horizonte, Minas Gerais — Brazil',
  },

  university: 'PUC Minas',

  // Foto de perfil ja recortada em quadrado (ver scripts/recortar-foto.mjs).
  // Se o arquivo nao existir, o site volta sozinho para o avatar ilustrado.
  photo: '/images/foto-perfil.png',
  // Ajuste fino do enquadramento no circulo: '50% 50%' e o centro,
  // '50% 20%' sobe a foto (util quando o rosto fica na parte de cima).
  photoPosition: '50% 50%',

  // ---------------------------------------------------------------------
  // CONTATO
  // ---------------------------------------------------------------------
  email: '7591rafa@gmail.com',
  phone: '+55 (31) 99830-0733',
  whatsapp: '5531998300733', // so digitos, com DDI + DDD (usado no link wa.me)

  github: 'https://github.com/Rafaelhenriques01',
  githubHandle: 'Rafaelhenriques01',

  linkedin: 'https://www.linkedin.com/in/rafael-henriques-691446338',
  linkedinHandle: 'in/rafael-henriques',

  instagram: 'https://www.instagram.com/rafaelhenriques_22/',
  instagramHandle: '@rafaelhenriques_22',
  figma: 'https://www.figma.com/design/e4Malif4A6em6Vo9LXrWvZ/Untitled',

  // Curriculo em PDF: salve o arquivo como /public/curriculo.pdf e descomente a
  // linha abaixo. Enquanto estiver null, o botao 'Baixar Curriculo' fica oculto.
  resume: null, // '/curriculo.pdf'
}

export const about = {
  intro: {
    pt: 'Sou estudante de Engenharia de Software na PUC Minas, apaixonado por transformar problemas reais em soluções digitais bem construídas. Atuo com desenvolvimento web, bancos de dados, UI/UX e automação de processos.',
    en: 'I am a Software Engineering student at PUC Minas, passionate about turning real problems into well-built digital solutions. I work with web development, databases, UI/UX and process automation.',
  },
  paragraphs: {
    pt: [
      'Durante minha trajetória acadêmica participei de projetos com metodologias ágeis (Scrum e Kanban), levantamento de requisitos, modelagem de dados e construção de interfaces centradas no usuário.',
      'Profissionalmente, atuei na Empresa Júnior COMP como membro de projetos e UI/UX Designer, e na Gerência de Tecnologia da Informação (GTI) da PUC Minas como estagiário de desenvolvimento, mantendo sistemas internos em C#, ASCX, JavaScript e MySQL.',
      'Meu objetivo é evoluir continuamente como engenheiro de software, contribuindo em times que valorizam qualidade de código, boa arquitetura e experiência do usuário.',
    ],
    en: [
      'Throughout my academic path I have taken part in projects using agile methodologies (Scrum and Kanban), requirements gathering, data modeling and the development of user-centered interfaces.',
      'Professionally, I worked at COMP Junior Enterprise as a project member and UI/UX Designer, and at PUC Minas IT Management (GTI) as a development intern, maintaining internal systems with C#, ASCX, JavaScript and MySQL.',
      'My goal is to keep growing as a software engineer, contributing to teams that value code quality, solid architecture and user experience.',
    ],
  },
  education: {
    course: {
      pt: 'Bacharelado em Engenharia de Software',
      en: "Bachelor's Degree in Software Engineering",
    },
    school: 'Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
    period: {
      pt: '2024 — cursando',
      en: '2024 — in progress',
    },
  },
  interests: {
    pt: [
      'Desenvolvimento Web Full Stack',
      'Arquitetura de Software',
      'Banco de Dados e Modelagem',
      'UI/UX Design e Acessibilidade',
      'Automação de Processos',
      'Inteligência Artificial aplicada',
    ],
    en: [
      'Full Stack Web Development',
      'Software Architecture',
      'Databases and Data Modeling',
      'UI/UX Design and Accessibility',
      'Process Automation',
      'Applied Artificial Intelligence',
    ],
  },
  goals: {
    pt: 'Busco uma oportunidade de estágio ou desenvolvimento júnior onde eu possa aplicar meus conhecimentos em desenvolvimento web e banco de dados, aprender com profissionais experientes e entregar valor real ao produto.',
    en: 'I am looking for an internship or junior developer opportunity where I can apply my knowledge in web development and databases, learn from experienced professionals and deliver real value to the product.',
  },
}

export const skills = [
  {
    key: 'dev',
    title: { pt: 'Desenvolvimento', en: 'Development' },
    icon: 'code',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'C#', 'Python', 'C/C++'],
  },
  {
    key: 'data',
    title: { pt: 'Banco de Dados', en: 'Databases' },
    icon: 'database',
    items: ['MySQL', 'SQL', 'Modelagem de Dados', 'CRUD', 'APIs REST', 'Relatórios'],
  },
  {
    key: 'design',
    title: { pt: 'Design & UI/UX', en: 'Design & UI/UX' },
    icon: 'design',
    items: ['Figma', 'Wireframes', 'Protótipos', 'Design de Interfaces', 'Responsividade', 'Acessibilidade'],
  },
  {
    key: 'tools',
    title: { pt: 'Ferramentas & Metodologias', en: 'Tools & Methodologies' },
    icon: 'tools',
    items: ['Git', 'GitHub', 'Scrum', 'Kanban', 'n8n', 'VS Code', 'NetBeans'],
  },
]
