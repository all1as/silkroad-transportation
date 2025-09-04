import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locals/ru.json';
import en from './locals/en.json';
import uz from './locals/uz.json';
import du from './locals/du.json';

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  uz: { translation: uz },
  de: { translation: du } 
};

const getBrowserLanguage = (): string => {
  if (typeof window === 'undefined') return 'ru';
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  const mainLang = browserLang.split('-')[0].toLowerCase();
  
  const supportedLanguages = ['ru', 'en', 'uz', 'de'];
  
  if (supportedLanguages.includes(mainLang)) {
    return mainLang;
  }
  
  if (mainLang === 'uk' || mainLang === 'be' || mainLang === 'kk') {
    return 'ru'; 
  }
  
  return 'ru'; 
};

const getInitialLanguage = (): string => {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    return savedLanguage;
  }
  
  return getBrowserLanguage();
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(), 
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('selectedLanguage', lng);
  document.documentElement.lang = lng; 
});

document.documentElement.lang = i18n.language;

export default i18n;