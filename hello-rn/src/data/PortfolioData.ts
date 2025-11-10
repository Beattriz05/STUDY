import { PortfolioData } from '../types/Types';

export const portfolioData: PortfolioData = {
  name: 'Ana Beatriz',
  title: 'Desenvolvedor Full Stack',
  email: 'anabeatrizdasilva263@gmail.com',
  phone: '+55 (81) 98222-8365',
  location: 'Recife-PE',
  
  about: 'Desenvolvedor apaixonado por criar soluções inovadoras e eficientes.',
  
  skills: [
    { name: 'React Native', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'React', level: 88 },
    { name: 'SQL & NoSQL', level: 75 },
    { name: 'Git & GitHub', level: 90 },
  ],
  
  projects: [
    {
      id: 1,
      name: 'App de Delivery',
      description: 'Aplicativo de entrega com rastreamento em tempo real e pagamento integrado.',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      status: 'Concluído' as const,
    },
    {
      id: 2,
      name: 'Sistema de Gestão',
      description: 'Sistema completo para gerenciamento de estoque e vendas.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      status: 'Em Desenvolvimento' as const,
    },
    {
      id: 3,
      name: 'App Fitness',
      description: 'Aplicativo para acompanhamento de treinos e nutrição.',
      technologies: ['React Native', 'Redux', 'Charts'],
      status: 'Concluído' as const,
    },
  ],
  
  experience: [
    {
      id: 1,
      company: 'Tech Solutions',
      position: 'Desenvolvedor Mobile',
      period: '2022 - Atual',
      description: 'Desenvolvimento de aplicativos mobile e manutenção de sistemas.',
    },
    {
      id: 2,
      company: 'StartUp XYZ',
      position: 'Desenvolvedor Jr',
      period: '2020 - 2022',
      description: 'Desenvolvimento frontend e backend de aplicações web.',
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
