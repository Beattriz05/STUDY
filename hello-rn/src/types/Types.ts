export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  Id: number;
  Nome: string;
  Descriçâo: string;
  Resultados: string;
  Status: 'Concluído' | 'Em Desenvolvimento';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

export interface Cursos {
  id: number;
  institution: string;
  degree: string;
  Status: 'Concluído' | 'Em Desenvolvimento';
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

export interface Colors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  background: string;
  cardBackground: string;
  cardBorder: string;
  text: string;
  textSecondary: string;
  accent: string;
  gradientStart: string;
  gradientEnd: string;
}

export interface Gradients {
  purple: string[];
  purpleDark: string[];
}
