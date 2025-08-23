import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        {/* Левая часть - Яндекс карта */}
        <div className="map-container">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9cb5e63791e9c2aca460906baf0846d3ca71e4e161e36de07ca904f574715a51&amp;source=constructor" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            title="Яндекс Карта - Расположение компании"
          ></iframe>
        </div>

        {/* Правая часть - Контактная информация */}
        <div className="contact-info">
          <h1>Контакты</h1>
          
          <div className="contact-details">
            <div className="contact-item">
              <h3>Телефон</h3>
              <a href="tel:+998981285667" className="phone-link">
                +998 98 128 56 67
              </a>
            </div>

            <div className="contact-item">
              <h3>Адрес</h3>
              <p>Ташкент, ул. Чимкент, 17</p>
            </div>

            <div className="contact-item">
              <h3>Онлайн-каналы</h3>
              <div className="social-links">
                <a 
                  href="https://t.me/AlekseySRTU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src="/tg.svg" alt="Telegram" />
                  <span>Telegram</span>
                </a>
                <a 
                  href="https://wa.me/998981285667" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src="/wa.svg" alt="WhatsApp" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="contact-item">
              <p>Круглосуточная связь</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;