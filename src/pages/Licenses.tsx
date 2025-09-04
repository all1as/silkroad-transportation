import React from 'react';
import { useTranslation } from 'react-i18next';
import './Licenses.css';

import lic1 from '/lic1.jpg';
import lic2 from '/lic2.jpg';
import lic3 from '/lic3.jpg';
import lic4 from '/lic4.jpg';

const Licenses = () => {
  const { t } = useTranslation();
  const licenses = [
    { id: 1, src: lic1, alt: t('licensesPage.license1Alt') },
    { id: 2, src: lic2, alt: t('licensesPage.license2Alt') },
    { id: 3, src: lic3, alt: t('licensesPage.license3Alt') },
    { id: 4, src: lic4, alt: t('licensesPage.license4Alt') }
  ];

  return (
    <div className="licenses-page">
      <div className="licenses-header">
        <h1>{t('licensesPage.title')}</h1>
        <p>{t('licensesPage.description')}</p>
      </div>

      <div className="licenses-container">
        <div className="licenses-grid">
          {licenses.map((license) => (
            <div key={license.id} className="license-item">
              <img 
                src={license.src} 
                alt={license.alt}
                className="license-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Licenses;