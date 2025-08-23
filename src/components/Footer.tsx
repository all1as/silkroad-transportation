import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src="/srtlogo.png" alt="Silk Road Transportation" className="footer-logo" />
          <p>Мы обеспечиваем комфортные и безопасные пассажирские перевозки по всему Узбекистану.</p>
          <div className="footer-social">
            <a href="https://t.me/AlekseySRTU" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
            <a href="https://wa.me/998981285667" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Контакты</h3>
          <div className="footer-contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <a href="https://yandex.uz/maps/-/CHdLB6p4" target="_blank" rel="noopener noreferrer" className="footer-link">
              Ташкент, ул. Чимкент, 17
            </a>
          </div>
          <div className="footer-contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="tel:+998981285667" className="footer-link">+998 98 128-56-67</a>
          </div>
          <div className="footer-contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
            </svg>
            <a href="mailto:info@silkroadtransportation.com" className="footer-link">info@silkroadtransportation.com</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Меню</h3>
          <Link to="/" className="footer-link">Главная</Link>
          <Link to="/buses" className="footer-link">Автобусы</Link>
          <Link to="/microbuses" className="footer-link">Микроавтобусы</Link>
          <Link to="/tours" className="footer-link">Туры</Link>
          <Link to="/contacts" className="footer-link">Контакты</Link>
        </div>

        <div className="footer-column">
          <h3>Часы работы</h3>
          <p className="footer-link">Пн-Пт: 8:00 - 20:00</p>
          <p className="footer-link">Круглосуточная поддержка</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;