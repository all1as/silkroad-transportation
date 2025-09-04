import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contacts.css';

import tgIcon from '/tg.png';
import waIcon from '/wa.png';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <div className="map-container">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9cb5e63791e9c2aca460906baf0846d3ca71e4e161e36de07ca904f574715a51&amp;source=constructor" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            title={t('contactsPage.mapTitle')}
          ></iframe>
        </div>

        <div className="contact-info">
          <h1>{t('contactsPage.title')}</h1>
          
          <div className="contact-details">
            <div className="contact-item">
              <h3>{t('contactsPage.phone')}</h3>
              <a href="tel:+998981285667" className="phone-link">
                {t('common.phoneNumber')}
              </a>
            </div>

            <div className="contact-item">
              <h3>{t('contactsPage.address')}</h3>
              <p>{t('footer.address')}</p>
            </div>

            <div className="contact-item">
              <h3>{t('contactsPage.onlineChannels')}</h3>
              <div className="social-links">
                <a 
                  href="https://t.me/AlekseySRTU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={tgIcon} alt="Telegram" />
                  <span>{t('contactsPage.telegram')}</span>
                </a>
                <a 
                  href="https://wa.me/998981285667" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={waIcon} alt="WhatsApp" />
                  <span>{t('contactsPage.whatsapp')}</span>
                </a>
              </div>
            </div>

            <div className="contact-item">
              <p>{t('contactsPage.support24')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;