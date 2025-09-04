import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DynamicMetaTags: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Обновляем язык HTML
    document.documentElement.lang = i18n.language;
    
    // Фиксированное название без перевода
    document.title = "Silk Road Transportation";
    
    // Обновляем meta description
    updateMetaTag('description', t('seo.description'));
    
    // Обновляем meta keywords
    updateMetaTag('keywords', t('seo.keywords'));

    // Обновляем hreflang теги
    updateHreflangTags();

  }, [t, i18n.language]);

  const updateMetaTag = (name: string, content: string) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };

  const updateHreflangTags = () => {
    // Удаляем старые hreflang теги
    const oldLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    oldLinks.forEach(link => link.remove());

    const languages = ['ru', 'en', 'uz', 'de'];

    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `https://silkroadtransportation.com/${lang === 'ru' ? '' : `?lang=${lang}`}`;
      document.head.appendChild(link);
    });

    // Добавляем x-default
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = 'https://silkroadtransportation.com/';
    document.head.appendChild(xDefault);
  };

  return null; 
};

export default DynamicMetaTags;