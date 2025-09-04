import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../components/ContactButton';
import './Buses.css';
import busWopen from '/buswopen.jpg';
import busSalon from '/bussalon.jpg';

const Buses = () => {
  const { t } = useTranslation();
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(busWopen);

  const images = [
    { src: busWopen, alt: t('busesPage.images.exterior'), label: t('busesPage.images.exterior') },
    { src: busSalon, alt: t('busesPage.images.interior'), label: t('busesPage.images.interior') }
  ];

  const openImageModal = () => {
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  const selectImage = (src: string) => {
    setCurrentImage(src);
  };

  return (
    <div className="buses-page">
      <section className="bus-hero">
        <div className="bus-hero-image" onClick={openImageModal}>
          <img src={currentImage} alt="Автобус SUNWIN" />
          <div className="image-overlay">{t('common.viewOptions')}</div>
        </div>
      </section>

      {showImageModal && (
        <div className="image-modal">
          <div className="modal-backdrop" onClick={closeImageModal}></div>
          <div className="modal-container">
            <button className="modal-close" onClick={closeImageModal}>
              &times;
            </button>
            
            <div className="image-gallery">
              {images.map((image) => (
                <div 
                  key={image.src}
                  className={`image-thumbnail ${currentImage === image.src ? 'active' : ''}`}
                  onClick={() => selectImage(image.src)}
                >
                  <img src={image.src} alt={image.alt} />
                  <span>{image.label}</span>
                </div>
              ))}
            </div>
            
            <div className="selected-image-container">
              <img src={currentImage} alt={t('common.selectedImage')} className="main-selected-image" />
            </div>
          </div>
        </div>
      )}

      <section className="bus-content">
        <h1>{t('busesPage.title')}</h1>
        
        <p>{t('busesPage.description1')}</p>

        <p>{t('busesPage.description2')}</p>

        <h2>{t('busesPage.specsTitle')}</h2>

        <div className="specs-text">
          <p><strong>{t('busesPage.specs.capacity')}</strong></p>
          <p><strong>{t('busesPage.specs.comfort')}</strong></p>
          <p><strong>{t('busesPage.specs.equipment')}</strong></p>
          <p><strong>{t('busesPage.specs.safety')}</strong></p>
          <p><strong>{t('busesPage.specs.performance')}</strong></p>
        </div>

        <div className="pricing-section">
          <h2>{t('busesPage.pricingTitle')}</h2>
          
          <div className="pricing-table">
            <h3>{t('busesPage.pricing.routesTitle')}</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>{t('busesPage.pricing.table.route')}</th>
                    <th>{t('busesPage.pricing.table.1dayIntercity')}</th>
                    <th>{t('busesPage.pricing.table.1dayCity')}</th>
                    <th>{t('busesPage.pricing.table.airportTransfer')}</th>
                    <th>{t('busesPage.pricing.table.1hourMin3')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('busesPage.pricing.busModel')}</td>
                    <td>250$</td>
                    <td>170$</td>
                    <td>60$</td>
                    <td>30$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>{t('busesPage.pricing.tourRoutesTitle')}</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>{t('busesPage.pricing.table.route')}</th>
                    <th>{t('busesPage.pricing.table.1dayMountains')}</th>
                    <th>{t('busesPage.pricing.table.2daysMountains')}</th>
                    <th>{t('busesPage.pricing.table.1daySamarkand')}</th>
                    <th>{t('busesPage.pricing.table.2daysSamarkand')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('busesPage.pricing.busModel')}</td>
                    <td>250$</td>
                    <td>400$</td>
                    <td>700$</td>
                    <td>750$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pricing-notes">
            <h4>{t('busesPage.pricing.notesTitle')}</h4>
            <ul>
              <li><strong>{t('busesPage.pricing.mountains1Day')}</strong></li>
              <li><strong>{t('busesPage.pricing.mountains2Days')}</strong></li>
              <li><strong>{t('busesPage.pricing.samarkand1Day')}</strong></li>
            </ul>

            <h4>{t('busesPage.pricing.additionalTitle')}</h4>
            <ul>
              <li>{t('busesPage.pricing.emptyRun')}</li>
              <li>{t('busesPage.pricing.bukharaFergana')}</li>
              <li>{t('busesPage.pricing.urgenchTermez')}</li>
              <li>{t('busesPage.pricing.minTariff')}</li>
              <li>{t('busesPage.pricing.urgenchDays')}</li>
              <li>{t('busesPage.pricing.bukharaDays')}</li>
            </ul>
            <p>{t('busesPage.pricing.included')}</p>
          </div>
        </div>

        <div className="conclusion">
          <p>{t('busesPage.conclusion')}</p>
        </div>

        <div className="cta-buttons-row">
          <ContactButton showModal size="large">
            {t('busesPage.bookBus')}
          </ContactButton>
          <ContactButton to="/microbuses" variant="secondary" size="large">
            {t('busesPage.viewMicrobuses')}
          </ContactButton>
        </div>
      </section>
    </div>
  );
};

export default Buses;