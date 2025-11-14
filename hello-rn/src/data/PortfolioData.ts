import { PortfolioData } from '../types/Types';

export const portfolioData: PortfolioData = {
  name: 'Ana Beatriz',
  title: 'Desenvolvedor Full Stack',
  email: 'anabeatrizdasilva263@gmail.com',
  phone: '+55 (81) 98222-8365',
  location: 'Recife-PE',
  
  about: 'Estudante de Análise e Desenvolvimento de Sistemas com sólida capacidade de resolução de problemas e adaptação a contextos dinámicos. Excelente comunicadora e colaboradora em equipe, com experiència prática no desenvolvimento de 3 projetos em parceria com o Porto Digital. Comprometida com aprendizado continuo e alta absorção de novas tecnologias para entregas. de impacto.',

  education: [
    {
      id: 1,
      institution: 'Faculdade Senac Pernambuco',
      degree: 'Análise e Desenvolvimento De Sistemas',
      period: '',
    },
  ],
  
  skills: [
    { name: 'Java', level: 20 },
    { name: 'Python', level: 20 },
    { name: 'JavaScript', level: 60 },
    { name: 'TypeScript', level: 50 },
    { name: 'React', level: 30 },
    { name: 'React Native', level: 15 },
  ],
  
  projects: [
    {
      Id: 1,
      Nome: 'NOME',
      Descriçâo: '',
      Resultados: '',
      technologies: false,
      Status: 'Concluído' as const,
    },
    {
      Id: 2,
      Nome: 'FLAGR',
      Descriçâo: 'Projeto em parceria com o Porto Digital para transformar a plataforma legada desta empresa de Due Diligence em uma solução moderna, centrada no usuário e conformidade com LGPD',
      Resultados: 'Solução premiada no Demoday com adoção imediata pelos stakeholders.',
      technologies: false,
      Status: 'Concluído' as const,
    },
    {
      Id: 3,
      Nome: 'LÁ DO CAMPO',
      Descriçâo: 'Plataforma de e-commerce e logistica que valoriza cultura artesanal',
      Resultados: 'Solução testada e aprovada por 50+ alunos do Senac durante apresentação institucional.',
      technologies: false,
      Status: 'Concluído' as const,
    },
    {
      Id: 4,
      Nome: 'PSYCONET',
      Descriçâo: 'Plataforma que desafia iniquidades em saúde mental ao conectar pacientes a terapia online acessivel e impulsionando carreiras de psicólogos recém-formados em um mercado saturado',
      Resultados: 'Solução testada e aprovada por 30 alunos do Senac durante apresentação institucional.',
      technologies: false,
      Status: 'Concluído' as const,
    },
  ],
  
  experience: [
    {
      id: 1,
      company: 'BYTEGIRL',
      position: 'Mediadora De UX/UI Desing',
      period: '2025 - Atual',
      description: 'Desenvolvimento de aplicativos mobile e manutenção de sistemas.',
    },
  ],

 // Cursos: [              --ajustar
  //  {
  //    id: 1,
  //    institution: 'Faculdade Senac Pernambuco',
  //    degree: 'Análise e Desenvolvimento De Sistemas',
  //    Status: 'Concluído' as const,
  //  }
 // ],
  
};
