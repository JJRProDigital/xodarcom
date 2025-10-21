// Tipos para el sistema de paneles solares
export interface SolarSystem {
  id: string;
  name: string;
  panels: string;
  generation: string;
  ideal: string;
  installation: string;
  savings: string;
  features: string[];
  cta: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

export interface SuccessCase {
  id: string;
  title: string;
  system: string;
  reduction: string;
  annualSavings: string;
  location: string;
  testimonial: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  systemType: string;
  message?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}
