/**
 * ---------------------------------------------------------------------------
 * EXPERIENCIAS - profissionais, estagios, freelas, open source e eventos
 * ---------------------------------------------------------------------------
 * Ordem: da mais recente para a mais antiga.
 */

export const experiences = [
  {
    id: 'gti-puc',
    company: 'GTI — Gerência de Tecnologia da Informação',
    organization: 'PUC Minas',
    role: { pt: 'Estagiário de Desenvolvimento', en: 'Development Intern' },
    period: { pt: '2026 — atual', en: '2026 — present' },
    type: { pt: 'Estágio', en: 'Internship' },
    location: 'Belo Horizonte, MG',
    current: true,
    description: {
      pt: 'Atuação no desenvolvimento e na manutenção de soluções internas da instituição, dando suporte a sistemas utilizados diariamente por alunos e colaboradores.',
      en: 'Development and maintenance of internal institutional solutions, supporting systems used daily by students and staff.',
    },
    activities: {
      pt: [
        'Desenvolvimento e manutenção de páginas utilizando ASCX, HTML, CSS e JavaScript',
        'Apoio ao desenvolvimento de funcionalidades em C#',
        'Manipulação e consultas em bancos de dados MySQL',
        'Criação e manutenção de relatórios internos',
        'Correção de problemas e suporte a sistemas institucionais',
      ],
      en: [
        'Development and maintenance of pages using ASCX, HTML, CSS and JavaScript',
        'Support in the development of C# features',
        'Handling and querying MySQL databases',
        'Creation and maintenance of internal reports',
        'Bug fixing and support for institutional systems',
      ],
    },
    tech: ['C#', 'ASCX', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    logo: {
      src: '/images/logo-puc-minas.png',
      alt: 'PUC Minas',
      invert: true,
      scale: 0.66,
      tint: '34, 197, 94',
    },
  },
  {
    id: 'comp-ej',
    company: 'COMP — Empresa Júnior',
    organization: 'PUC Minas',
    role: { pt: 'Membro de Projetos e UI/UX Designer', en: 'Project Member and UI/UX Designer' },
    period: { pt: '2026', en: '2026' },
    type: { pt: 'Empresa Júnior', en: 'Junior Enterprise' },
    location: 'Belo Horizonte, MG',
    current: false,
    description: {
      pt: 'Participação em projetos reais de desenvolvimento de software e design de interfaces para clientes, aplicando metodologias ágeis e trabalho em equipe multidisciplinar.',
      en: 'Participation in real software development and interface design projects for clients, applying agile methodologies and multidisciplinary teamwork.',
    },
    activities: {
      pt: [
        'Criação de wireframes e protótipos de média e alta fidelidade no Figma',
        'Participação em projetos conduzidos com Scrum e Kanban',
        'Levantamento e análise de requisitos junto aos clientes',
        'Aplicação de conceitos de UI/UX e usabilidade',
        'Colaboração com equipes multidisciplinares',
        'Resolução de problemas durante o desenvolvimento dos projetos',
      ],
      en: [
        'Creation of medium and high fidelity wireframes and prototypes in Figma',
        'Participation in projects run with Scrum and Kanban',
        'Requirements gathering and analysis with clients',
        'Application of UI/UX and usability concepts',
        'Collaboration with multidisciplinary teams',
        'Problem solving throughout project development',
      ],
    },
    tech: ['Figma', 'UI/UX', 'Scrum', 'Kanban', 'Wireframes'],
    logo: {
      src: '/images/logo-comp.svg',
      alt: 'COMP — Empresa Júnior',
      invert: false,
      rounded: true,
      scale: 0.58,
      tint: '7, 74, 255',
    },
  },
  {
    id: 'puc-academico',
    company: 'PUC Minas',
    organization: { pt: 'Projetos Acadêmicos e Laboratórios', en: 'Academic Projects and Labs' },
    role: { pt: 'Estudante de Engenharia de Software', en: 'Software Engineering Student' },
    period: { pt: '2024 — atual', en: '2024 — present' },
    type: { pt: 'Acadêmico', en: 'Academic' },
    location: 'Belo Horizonte, MG',
    current: true,
    description: {
      pt: 'Desenvolvimento de projetos acadêmicos em equipe nos laboratórios da graduação, cobrindo todo o ciclo de vida do software — do levantamento de requisitos à entrega e apresentação.',
      en: 'Team development of academic projects in the undergraduate labs, covering the whole software life cycle — from requirements gathering to delivery and presentation.',
    },
    activities: {
      pt: [
        'Desenvolvimento de aplicações web e desktop em equipe',
        'Modelagem de dados e criação de bancos relacionais',
        'Documentação técnica e apresentação de resultados',
        'Versionamento de código com Git e GitHub',
      ],
      en: [
        'Team development of web and desktop applications',
        'Data modeling and relational database creation',
        'Technical documentation and presentation of results',
        'Code versioning with Git and GitHub',
      ],
    },
    tech: ['Java', 'Python', 'C/C++', 'MySQL', 'Git'],
    logo: {
      src: '/images/logo-puc-minas.png',
      alt: 'PUC Minas',
      invert: true,
      scale: 0.66,
      tint: '34, 197, 94',
    },
  },
]
