import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import ContactButton from '../components/ContactButton';

import busIcon from '/bus.png';
import microIcon from '/micro.png';
import carIcon from '/cb.png';
import onasImage from '/onas.jpg';
import uslugiImage from '/uslugi.jpg';
import visaLogo from '/visa.svg';
import msLogo from '/ms.svg';
import cashLogo from '/cash.svg';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          
          if (isVisible) {
            ref.style.transform = 'translateX(0)';
            ref.style.opacity = '1';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutSectionRef.current) {
              setIsAboutVisible(true);
            } else if (entry.target === servicesSectionRef.current) {
              setIsServicesVisible(true);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px' }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      if (servicesSectionRef.current) {
        observer.unobserve(servicesSectionRef.current);
      }
    };
  }, []);

  const firstRowOptions = [
    {
      title: t('homePage.busCard.title'),
      subtitle: t('homePage.busCard.subtitle'),
      path: "/buses",
      icon: busIcon,
      alt: t('homePage.busCard.alt')
    },
    {
      title: t('homePage.microbusCard.title'),
      subtitle: t('homePage.microbusCard.subtitle'),
      path: "/microbuses",
      icon: microIcon,
      alt: t('homePage.microbusCard.alt')
    }
  ];

  const secondRowOption = {
    title: t('homePage.carCard.title'),
    subtitle: t('homePage.carCard.subtitle'),
    path: "/cars",
    icon: carIcon,
    alt: t('homePage.carCard.alt')
  };

  const servicesListItems = t('homePage.services.listItems', { returnObjects: true }) as string[];

  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-banner__overlay" />
        <div className="hero-banner__content">
          <h1>{t('homePage.heroTitle')}</h1>
          <p>{t('homePage.heroSubtitle')}</p>
        </div>
      </section>

      <section className="transport-section">
        {/* Первый ряд - две кнопки */}
        <div className="transport-row">
          <div className="transport-container">
            {firstRowOptions.map((option, index) => (
              <Link
                key={option.title}
                to={option.path}
                className="transport-card"
              >
                <div className="transport-card__content">
                  <div className="transport-card__text">
                    <h3>{option.title}</h3>
                    <p className="transport-card__subtitle">{option.subtitle}</p>
                  </div>
                  <div
                    className="transport-card__image"
                    ref={(el) => { imageRefs.current[index] = el; }}
                  >
                    <img src={option.icon} alt={option.alt} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Второй ряд - одна кнопка по центру */}
        <div className="transport-row">
          <div className="transport-container-single">
            <Link
              to={secondRowOption.path}
              className="transport-card car-card"
            >
              <div className="transport-card__content">
                <div className="transport-card__text">
                  <h3>{secondRowOption.title}</h3>
                  <p className="transport-card__subtitle">{secondRowOption.subtitle}</p>
                </div>
                <div
                  className="transport-card__image"
                  ref={(el) => { imageRefs.current[2] = el; }}
                >
                  <img src={secondRowOption.icon} alt={secondRowOption.alt} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="blue-background"></div>

      {/* Остальной код остается без изменений */}
      <section className="info-section">
        <div className="info-blocks-container">
          <div className="info-block">
            <div className="info-block-header">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 14 4-4"/>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
                </svg>
              </div>
              <h3>{t('homePage.features.fast.title')}</h3>
            </div>
            <p>{t('homePage.features.fast.description')}</p>
          </div>
          
          <div className="info-block">
            <div className="info-block-header">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/>
                  <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/>
                  <path d="M3 18h18"/>
                </svg>
              </div>
              <h3>{t('homePage.features.comfortable.title')}</h3>
            </div>
            <p>{t('homePage.features.comfortable.description')}</p>
          </div>
          
          <div className="info-block">
            <div className="info-block-header">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 21a8 8 0 0 1 10.821-7.487"/>
                  <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5 5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
                  <circle cx="10" cy="8" r="5"/>
                </svg>
              </div>
              <h3>{t('homePage.features.professional.title')}</h3>
            </div>
            <p>{t('homePage.features.professional.description')}</p>
          </div>
        </div>
      </section>

      <div className="contact-button-container">
        <ContactButton showModal={true}>
          {t('homePage.checkPrice')}
        </ContactButton>
      </div>

      <section className="about-section" ref={aboutSectionRef}>
        <div className="about-container">
          <div className={`about-image ${isAboutVisible ? 'visible' : ''}`}>
            <img src={onasImage} alt={t('homePage.about.imageAlt')} />
          </div>
          <div className="about-content">
            <h2 className={`about-title ${isAboutVisible ? 'visible' : ''}`}>{t('homePage.about.title')}</h2>
            <p className={`about-text ${isAboutVisible ? 'visible' : ''}`}>
              {t('homePage.about.text1')}
            </p>
            <p className={`about-text ${isAboutVisible ? 'visible' : ''}`}>
              {t('homePage.about.text2')}
            </p>
            <p className={`about-text ${isAboutVisible ? 'visible' : ''}`}>
              {t('homePage.about.text3')}
            </p>
            
            <div className={`brands-container ${isAboutVisible ? 'visible' : ''}`}>
              <img src={visaLogo} alt="Visa" className="brand-logo" />
              <img src={msLogo} alt="Mastercard" className="brand-logo" />
              <img src={cashLogo} alt={t('homePage.about.cash')} className="brand-logo" />
            </div>
            
            <p className={`about-footer ${isAboutVisible ? 'visible' : ''}`}>
              {t('homePage.about.footer')}
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" ref={servicesSectionRef}>
        <div className="services-container">
          <div className="services-content">
            <h2 className={`services-title ${isServicesVisible ? 'visible' : ''}`}>{t('homePage.services.title')}</h2>
            <p className={`services-text ${isServicesVisible ? 'visible' : ''}`}>
              {t('homePage.services.text1')}
            </p>
            <p className={`services-text ${isServicesVisible ? 'visible' : ''}`}>
              {t('homePage.services.text2')}
            </p>
            
            <div className={`services-list ${isServicesVisible ? 'visible' : ''}`}>
              <h3>{t('homePage.services.listTitle')}</h3>
                <ul>
                  {servicesListItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                  ))}
                </ul>
            </div>
            
            <p className={`services-text ${isServicesVisible ? 'visible' : ''}`}>
              {t('homePage.services.text3')}
            </p>

            <div className={`services-button ${isServicesVisible ? 'visible' : ''}`}>
              <Link to="/tours" className="tours-promo-button">
                {t('homePage.services.viewTours')}
              </Link>
            </div>
          </div>
          
          <div className={`services-image ${isServicesVisible ? 'visible' : ''}`}>
            <img src={uslugiImage} alt={t('homePage.services.imageAlt')} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;