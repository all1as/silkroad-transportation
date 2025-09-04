import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ContactButton.css';
import tg from '/tg.png';
import wa from '/wa.png';

type ContactButtonProps = {
  to?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showContactInfo?: boolean;
  showModal?: boolean;
  fullWidth?: boolean; 
};

const ContactButton = ({ 
  to, 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  size = 'medium',
  showContactInfo = true,
  showModal = false,
  fullWidth = false 
}: ContactButtonProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseClasses = `contact-button ${variant} ${size} ${className} ${fullWidth ? 'full-width' : ''}`;
  
  const handleClick = (e: React.MouseEvent) => {
    if (showModal) {
      setIsModalOpen(true);
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  const buttonContent = (
    <div className="button-content-wrapper">
      {children || (
        <>
          <span className="button-text">{t('common.quickResponse')}</span>
          <div className="contact-icons">
            <img src={tg} alt="Telegram" className="contact-icon" />
            <img src={wa} alt="WhatsApp" className="contact-icon" />
          </div>
          <span className="phone-number">{t('common.phoneNumber')}</span>
        </>
      )}
    </div>
  );

  return (
    <>
      {onClick ? (
        <button className={baseClasses} onClick={handleClick}>
          {buttonContent}
        </button>
      ) : to ? (
        <Link to={to} className={baseClasses} onClick={handleClick}>
          {buttonContent}
        </Link>
      ) : (
        <button className={baseClasses} onClick={handleClick}>
          {buttonContent}
        </button>
      )}

      {isModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="contact-modal-close" 
              onClick={() => setIsModalOpen(false)}
              aria-label={t('common.close')}
            >
              &times;
            </button>
            <h3 className="modal-title">{t('contactButton.modalTitle')}</h3>
            <p className="modal-description">
              {t('contactButton.modalDescription')}
            </p>
            <div className="contact-icons-modal">
              <a href="https://t.me/AlekseySRTU" target="_blank" rel="noopener noreferrer">
                <img src={tg} alt="Telegram" className="contact-icon modal-icon" />
              </a>
              <a href="https://wa.me/998981285667" target="_blank" rel="noopener noreferrer">
                <img src={wa} alt="WhatsApp" className="contact-icon modal-icon" />
              </a>
            </div>
            <a href="tel:+998981285667" className="contact-modal-phone">
              {t('common.phoneNumber')}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactButton;