import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../components/ContactButton';
import './Cars.css';
import { useScrollToAnchor } from '../hooks/useScrollToAnchor';

import cobalt from '/cobalt.jpg';
import merc from '/merc.jpg';

const Cars = () => {
  const { t } = useTranslation();
  useScrollToAnchor();
  
  return (
    <div className="cars-page">
      {/* Chevrolet Cobalt */}
      <section id="cobalt" className="vehicle-section dark-bg">
        <div className="vehicle-container">
          <div className="vehicle-image-container">
            <img src={cobalt} alt="Chevrolet Cobalt" className="vehicle-main-image" />
          </div>
          <div className="vehicle-description">
            <h2>Chevrolet Cobalt</h2>
            <p>
              {t('carsPage.cobalt.description1')}
            </p>
            <p>
              {t('carsPage.cobalt.description2')}
            </p>
            <p>
              {t('carsPage.cobalt.description3')}
            </p>
            <p>
              {t('carsPage.cobalt.description4')}
            </p>
            
            <div className="vehicle-features">
              <h3>{t('carsPage.featuresTitle')}</h3>
              <ul>
                <li>{t('carsPage.cobalt.features.year')}</li>
                <li>{t('carsPage.cobalt.features.bodyType')}</li>
                <li>{t('carsPage.cobalt.features.seats')}</li>
                <li>{t('carsPage.cobalt.features.trunkVolume')}</li>
                <li>{t('carsPage.cobalt.features.ac')}</li>
                <li>{t('carsPage.cobalt.features.heating')}</li>
                <li>{t('carsPage.cobalt.features.usbBluetooth')}</li>
                <li>{t('carsPage.cobalt.features.airbags')}</li>
                <li>{t('carsPage.cobalt.features.abs')}</li>
              </ul>
            </div>

            <div className="pricing-table">
              <h3>{t('carsPage.pricingTitle')}</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>{t('carsPage.pricing.table.model')}</th>
                      <th>{t('carsPage.pricing.table.1dayIntercity')}</th>
                      <th>{t('carsPage.pricing.table.1dayCity')}</th>
                      <th>{t('carsPage.pricing.table.airportTransfer')}</th>
                      <th>{t('carsPage.pricing.table.1hourMin3')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('carsPage.cobalt.modelWithLuggage')}</td>
                      <td>120$</td>
                      <td>60$</td>
                      <td>20$</td>
                      <td>8$</td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>{t('carsPage.pricing.table.model')}</th>
                      <th>{t('carsPage.pricing.table.1dayMountains')}</th>
                      <th>{t('carsPage.pricing.table.2daysMountains')}</th>
                      <th>{t('carsPage.pricing.table.1daySamarkand')}</th>
                      <th>{t('carsPage.pricing.table.2daysSamarkand')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('carsPage.cobalt.modelWithLuggage')}</td>
                      <td>90$</td>
                      <td>150$</td>
                      <td>180$</td>
                      <td>230$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mercedes-Benz S-Class */}
      <section id="mercedes" className="vehicle-section light-bg">
        <div className="vehicle-container reverse">
          <div className="vehicle-image-container">
            <img src={merc} alt="Mercedes-Benz S-Class" className="vehicle-main-image" />
          </div>
          <div className="vehicle-description">
            <h2>Mercedes-Benz S-Class W222</h2>
            <p>
              {t('carsPage.mercedes.description1')}
            </p>
            <p>
              {t('carsPage.mercedes.description2')}
            </p>
            <p>
              {t('carsPage.mercedes.description3')}
            </p>
            <p>
              {t('carsPage.mercedes.description4')}
            </p>
            <p>
              {t('carsPage.mercedes.description5')}
            </p>
            
            <div className="vehicle-features">
              <h3>{t('carsPage.featuresTitle')}</h3>
              <ul>
                <li>{t('carsPage.mercedes.features.year')}</li>
                <li>{t('carsPage.mercedes.features.bodyType')}</li>
                <li>{t('carsPage.mercedes.features.seats')}</li>
                <li>{t('carsPage.mercedes.features.trunkVolume')}</li>
                <li>{t('carsPage.mercedes.features.climateControl')}</li>
                <li>{t('carsPage.mercedes.features.seatFeatures')}</li>
                <li>{t('carsPage.mercedes.features.multimedia')}</li>
                <li>{t('carsPage.mercedes.features.safetySystems')}</li>
                <li>{t('carsPage.mercedes.features.driverAssist')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <ContactButton showModal size="large">
          {t('carsPage.bookCar')}
        </ContactButton>
      </div>
    </div>
  );
};

export default Cars;