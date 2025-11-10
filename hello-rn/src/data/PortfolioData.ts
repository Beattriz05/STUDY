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
      id: 1,
      name: 'NOME',
      description: '',
      technologies: ['', '', ''],
      status: 'Concluído' as const,
    },
    {
      id: 2,
      name: 'FLAGR',
      description: '',
      technologies: ['', '', ''],
      status: 'Concluído' as const,
    },
    {
      id: 3,
      name: 'LÁ DO CAMPO',
      description: '',
      technologies: ['', '', ''],
      status: 'Concluído' as const,
    },
    {
      id: 4,
      name: 'PSYCONET',
      description: '',
      technologies: ['', '', ''],
      status: 'Concluído' as const,
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
      period: '2016 - 2020',
    },
  ],
};
