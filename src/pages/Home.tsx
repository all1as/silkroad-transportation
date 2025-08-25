import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ContactButton from '../components/ContactButton';

import busIcon from '/bus.png';
import microIcon from '/micro.png';
import onasImage from '/onas.jpg';
import uslugiImage from '/uslugi.jpg';
import visaLogo from '/visa.svg';
import msLogo from '/ms.svg';
import cashLogo from '/cash.svg';
import uzbBackground from '/uzb.jpg';

const Home = () => {
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

  const transportOptions = [
    {
      title: "Автобус",
      subtitle: "до 47 человек",
      path: "/buses",
      icon: busIcon,
      alt: "Иконка автобуса"
    },
    {
      title: "Микроавтобусы",
      subtitle: "до 19 человек",
      path: "/microbuses",
      icon: microIcon,
      alt: "Иконка микроавтобуса"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-banner__overlay" />
        <div className="hero-banner__content">
          <h1>ПАССАЖИРСКИЕ ГРУППОВЫЕ ПЕРЕВОЗКИ</h1>
          <p>по Узбекистану</p>
        </div>
      </section>

      <section className="transport-section">
        <div className="transport-container">
          {transportOptions.map((option, index) => (
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
      </section>

      <div className="blue-background"></div>

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
              <h3>Быстро</h3>
            </div>
            <p>
              Мы ценим ваше время. Silk Road Transportation гарантирует оперативную организацию поездок по всему Узбекистану — от бронирования до прибытия в пункт назначения. С нами вы не теряете ни минуты.
            </p>
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
              <h3>Комфортно</h3>
            </div>
            <p>
              Ваше путешествие по Узбекистану начинается с удобства. Наши современные микроавтобусы и автобусы оснащены всем необходимым для комфортной поездки. Silk Road Transportation — когда каждый километр в радость.
            </p>
          </div>
          
          <div className="info-block">
            <div className="info-block-header">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 21a8 8 0 0 1 10.821-7.487"/>
                  <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
                  <circle cx="10" cy="8" r="5"/>
                </svg>
              </div>
              <h3>Профессионально</h3>
            </div>
            <p>
              Наша команда — это опытные водители и специалисты, которые знают Узбекистан как свои пять пальцев. В Silk Road Transportation вы доверяете дорогу тем, кто действительно умеет делать поездки безопасными и организованными.
            </p>
          </div>
        </div>
      </section>

      <div className="contact-button-container">
        <ContactButton showModal={true}>
          Узнать цену и записаться
        </ContactButton>
      </div>

      <section className="about-section" ref={aboutSectionRef}>
        <div className="about-container">
          <div className={`about-image ${isAboutVisible ? 'visible' : ''}`}>
            <img src={onasImage} alt="Наш автопарк" />
          </div>
          <div className="about-content">
            <h2 className={`about-title ${isAboutVisible ? 'visible' : ''}`}>О нас</h2>
            <p className={`about-text ${isAboutVisible ? 'visible' : ''}`}>
              Мы — Silk Road Transportation, надёжный перевозчик с более чем 20-летним опытом в сфере пассажирских перевозок по всему Узбекистану. Нашими клиентами становятся делегации, бизнесмены, туристы и все, кто ценит комфорт, безопасность и пунктуальность.
            </p>
            <p className={`about-text ${isAboutVisible ? 'visible' : ''}`}>
              Все наши транспортные средства лицензированы, проходят регулярное техническое обслуживание и оснащены системами GPS/GLONASS для отслеживания маршрута в реальном времени. Пассажиры и транспорт застрахованы, а парк регулярно обновляется в соответствии с современными стандартами качества и безопасности.
            </p>
            <p className={`about-text ${isAboutVisible ? 'visible' : ''}`}>
              Мы принимаем любые формы оплаты, включая пластиковые карты.
            </p>
            
            <div className={`brands-container ${isAboutVisible ? 'visible' : ''}`}>
              <img src={visaLogo} alt="Visa" className="brand-logo" />
              <img src={msLogo} alt="Mastercard" className="brand-logo" />
              <img src={cashLogo} alt="Наличные" className="brand-logo" />
            </div>
            
            <p className={`about-footer ${isAboutVisible ? 'visible' : ''}`}>
              Silk Road Transportation — это ваша уверенность в каждой поездке по Узбекистану.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" ref={servicesSectionRef}>
        <div className="services-container">
          <div className="services-content">
            <h2 className={`services-title ${isServicesVisible ? 'visible' : ''}`}>Наши услуги</h2>
            <p className={`services-text ${isServicesVisible ? 'visible' : ''}`}>
              Мы в Silk Road Transportation предоставляем профессиональные транспортные услуги по всему Узбекистану. 
              Организуем пассажирские перевозки туристов, делегаций, бизнесменов, трансферы по Ташкенту, поездки в горы, 
              а также обслуживание мероприятий, деловых встреч, выездных программ и т.д.
            </p>
            <p className={`services-text ${isServicesVisible ? 'visible' : ''}`}>
              Автомобили не сдаются в аренду без водителя. При поездках детей за пределы Ташкента обязательно 
              организуется сопровождение ГАИ в соответствии с законом.
            </p>
            
            <div className={`services-list ${isServicesVisible ? 'visible' : ''}`}>
              <h3>Наши услуги включают:</h3>
              <ul>
                <li>Индивидуальные и групповые трансферы</li>
                <li>Туры по Узбекистану от 11 до 3 дней</li>
                <li>Обслуживание мероприятий и конференций</li>
                <li>Перевозки делегаций и официальных встреч</li>
                <li>Выезды за город, в горные и курортные зоны</li>
                <li>И многое другое</li>
              </ul>
            </div>
            
            <p className={`services-text ${isServicesVisible ? 'visible' : ''}`}>
              Чтобы узнать подробности и согласовать детали поездки — свяжитесь с нами.
            </p>

            <div className={`services-button ${isServicesVisible ? 'visible' : ''}`}>
              <Link to="/tours" className="tours-promo-button">
                Ознакомиться с турами
              </Link>
            </div>
          </div>
          
          <div className={`services-image ${isServicesVisible ? 'visible' : ''}`}>
            <img src={uslugiImage} alt="Наши услуги" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;