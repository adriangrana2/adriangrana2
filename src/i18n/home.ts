// Import the supported language type.
import type { Locale } from './index';

// Require the same text fields in every language.
interface HomeText {
  description: string;
  role: string;
  focus: string;
  interestsLabel: string;
  interests: string;
  introduction: string;
}

// Store the homepage translations in one place.
export const homeText: Record<Locale, HomeText> = {
  de: {
    description: 'Die persönliche Website von Adrian Granados.',
    role: 'Fachinformatiker für Daten- und Prozessanalyse in Ausbildung',
    focus: 'Python & SQL · Datenanalyse · Datenqualität · Prozessoptimierung ',
    interestsLabel: 'Weitere Themen:',
    interests: 'Cloud · Cybersecurity · Software · Netzwerke',
    introduction:
      'Ich baue Dinge, experimentiere mit Technologie und halte fest, was ich dabei lerne.',
  },

  en: {
    description: 'The personal website of Adrian Granados.',
    role: 'IT Specialist for Data and Process Analysis in training',
    focus: 'Python & SQL · Data analysis · Data quality · Process optimization',
    interestsLabel: 'Other interests:',
    interests: 'Cloud · Cybersecurity · Software · Networks',
    introduction:
      'I build things, experiment with technology, and document what I learn along the way.',
  },

  es: {
    description: 'Web personal de Adrian Granados.',
    role: 'Especialista en TI con enfasis en Análisis de datos y procesos, en formación',
    focus:
      'Python & SQL · Análisis de datos · Calidad de datos · Optimización de procesos ',
    interestsLabel: 'Otros temas de interés en TI:',
    interests: 'Cloud · Ciberseguridad · Software · Redes',
    introduction:
      'Creo proyectos, experimento con tecnología y documento lo que voy aprendiendo.',
  },
};