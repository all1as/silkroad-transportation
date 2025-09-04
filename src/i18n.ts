import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locals/ru.json';
import en from './locals/en.json';
import uz from './locals/uz.json';
import du from './locals/du.json'; 

const resources = {
  ru: {
    translation: ru
  },
  en: {
    translation: en
  },
  uz: {
    translation: uz 
  },
  de: {
    translation: du 
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('selectedLanguage') || 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;