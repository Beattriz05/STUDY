import { PortfolioData } from '../types/Types';

export const portfolioData: PortfolioData = {
  name: 'Ana Beatriz',
  title: 'Desenvolvedor Full Stack',
  email: 'anabeatrizdasilva263@gmail.com',
  phone: '+55 (81) 98222-8365',
  location: 'Recife-PE',
  
  about: '',
  
  skills: [
    { name: '', level: 0 },
    { name: '', level: 0 },
    { name: '', level: 0 },
    { name: '', level: 0 },
    { name: '', level: 0 },
    { name: '', level: 0 },
  ],
  
  projects: [
    {
      Id: 1,
      Nome: 'NOME',
      Descriçâo: '',
      Resultados: '',
      Status: 'Concluído' as const,
    },
    {
      Id: 2,
      Nome: 'FLAGR',
      Descriçâo: 'Projeto em parceria com o Porto Digital para transformar a plataforma legada desta empresa de Due Diligence em uma solução moderna, centrada no usuário e conformidade com LGPD',
      Resultados: 'Solução premiada no Demoday com adoção imediata pelos stakeholders.',
      Status: 'Concluído' as const,
    },
    {
      Id: 3,
      Nome: 'LÁ DO CAMPO',
      Descriçâo: 'Plataforma de e-commerce e logistica que valoriza cultura artesanal',
      Resultados: 'Solução testada e aprovada por 50+ alunos do Senac durante apresentação institucional.',
      Status: 'Concluído' as const,
    },
    {
      Id: 4,
      Nome: 'PSYCONET',
      Descriçâo: 'Plataforma que desafia iniquidades em saúde mental ao conectar pacientes a terapia online acessivel e impulsionando carreiras de psicólogos recém-formados em um mercado saturado',
      Resultados: 'Solução testada e aprovada por 30 alunos do Senac durante apresentação institucional.',
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
  
  education: [
    {
      id: 1,
      institution: 'Faculdade Senac Pernambuco',
      degree: 'Análise e Desenvolvimento De Sistemas',
      period: '2024 - 2025',
    },
  ],
};
