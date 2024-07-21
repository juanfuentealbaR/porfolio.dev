import SpainFlag from "@/components/flags/Spain.astro";
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro";


export const LANGUAGES = {
    es: { 
      code: 'es', 
      name: 'Español',
      flag: SpainFlag,
    },
    en: {
      code: 'en',
      name: 'English',
      flag: UnitedStatesFlag,
    }
  };
  
  export const defaultLang = 'es';
  export const showDefaultLang = false;
  
  
  export const ui = {
    es: {
      'nav.about': 'Sobre mi',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
    },
    en: {
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.about': 'About me',
      'nav.contact': 'Contact',
    },
  } as const;

  export const routes = {
    es: {
      '#experiencia': '#experiencia',
      '#proyectos': '#proyectos',
      '#sobre-mi': '#sobre-mi',
    },
    en: {
      '#experiencia': '#experience',
      '#proyectos': '#projects',
      '#sobre-mi': '#about-me',
    }
  }