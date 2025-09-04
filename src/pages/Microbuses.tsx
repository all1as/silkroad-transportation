import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactButton from '../components/ContactButton';
import './Microbuses.css';
import { useScrollToAnchor } from '../hooks/useScrollToAnchor';

import blackm from '/blackm.jpg';
import blackmSalon from '/blackm-salon.jpg';
import whitem from '/whitem.jpg';
import blacknew from '/blacknew.jpg';
import blacknewSalon from '/blacknewsalon.jpg';
import graym from '/graym.jpg';

const Microbuses = () => {
  const { t } = useTranslation();
  useScrollToAnchor();
  
  const features19Seater = t('microbusesPage.19Seater.features', { returnObjects: true }) as string[];
  const features13Seater = t('microbusesPage.13Seater.features', { returnObjects: true }) as string[];
  const features7Seater = t('microbusesPage.7Seater.features', { returnObjects: true }) as string[];
  const featuresGrandStarex = t('microbusesPage.grandStarex.features', { returnObjects: true }) as string[];

  return (
    <div className="microbuses-page">
      <section id="19-seater" className="vehicle-section dark-bg">
        <div className="vehicle-container">
          <div className="vehicle-image-container">
            <img src={blackm} alt={t('microbusesPage.19Seater.imageAlt')} className="vehicle-main-image" />
            <img src={blackmSalon} alt={t('microbusesPage.19Seater.interiorAlt')} className="vehicle-secondary-image" />
          </div>
          <div className="vehicle-description">
            <h2>{t('microbusesPage.19Seater.title')}</h2>
            <p>{t('microbusesPage.19Seater.description1')}</p>
            <p>{t('microbusesPage.19Seater.description2')}</p>
            
            <div className="vehicle-features">
              <h3>{t('microbusesPage.featuresTitle')}</h3>
              <ul>
                {features19Seater.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pricing-table">
              <h3>{t('microbusesPage.pricingTitle')}</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>{t('microbusesPage.pricing.table.1dayIntercity')}</th>
                      <th>{t('microbusesPage.pricing.table.1dayCity')}</th>
                      <th>{t('microbusesPage.pricing.table.airportTransfer')}</th>
                      <th>{t('microbusesPage.pricing.table.1hourMin3')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>170$</td>
                      <td>120$</td>
                      <td>45$</td>
                      <td>20$</td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>{t('microbusesPage.pricing.table.1dayMountains')}</th>
                      <th>{t('microbusesPage.pricing.table.2daysMountains')}</th>
                      <th>{t('microbusesPage.pricing.table.1daySamarkand')}</th>
                      <th>{t('microbusesPage.pricing.table.2daysSamarkand')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>150$</td>
                      <td>250$</td>
                      <td>400$</td>
                      <td>450$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="13-seater" className="vehicle-section light-bg">
        <div className="vehicle-container reverse">
          <div className="vehicle-image-container">
            <img src={whitem} alt={t('microbusesPage.13Seater.imageAlt')} className="vehicle-main-image" />
          </div>
          <div className="vehicle-description">
            <h2>{t('microbusesPage.13Seater.title')}</h2>
            <p>{t('microbusesPage.13Seater.description1')}</p>
            <p>{t('microbusesPage.13Seater.description2')}</p>
            
            <div className="vehicle-features">
              <h3>{t('microbusesPage.featuresTitle')}</h3>
              <ul>
                {features13Seater.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pricing-table">
              <h3>{t('microbusesPage.pricingTitle')}</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>{t('microbusesPage.pricing.table.1dayIntercity')}</th>
                      <th>{t('microbusesPage.pricing.table.1dayCity')}</th>
                      <th>{t('microbusesPage.pricing.table.airportTransfer')}</th>
                      <th>{t('microbusesPage.pricing.table.1hourMin3')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>150$</td>
                      <td>80$</td>
                      <td>35$</td>
                      <td>15$</td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>{t('microbusesPage.pricing.table.1dayMountains')}</th>
                      <th>{t('microbusesPage.pricing.table.2daysMountains')}</th>
                      <th>{t('microbusesPage.pricing.table.1daySamarkand')}</th>
                      <th>{t('microbusesPage.pricing.table.2daysSamarkand')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>120$</td>
                      <td>200$</td>
                      <td>350$</td>
                      <td>400$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="7-seater" className="vehicle-section dark-bg">
        <div className="vehicle-container">
          <div className="vehicle-image-container">
            <img src={blacknew} alt={t('microbusesPage.7Seater.imageAlt')} className="vehicle-main-image" />
            <img src={blacknewSalon} alt={t('microbusesPage.7Seater.interiorAlt')} className="vehicle-secondary-image" />
          </div>
          <div className="vehicle-description">
            <h2>{t('microbusesPage.7Seater.title')}</h2>
            <p>{t('microbusesPage.7Seater.description1')}</p>
            <p>{t('microbusesPage.7Seater.description2')}</p>
            
            <div className="vehicle-features">
              <h3>{t('microbusesPage.featuresTitle')}</h3>
              <ul>
                {features7Seater.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pricing-table">
              <h3>{t('microbusesPage.pricingTitle')}</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>{t('microbusesPage.pricing.table.1dayIntercity')}</th>
                      <th>{t('microbusesPage.pricing.table.1dayCity')}</th>
                      <th>{t('microbusesPage.pricing.table.airportTransfer')}</th>
                      <th>{t('microbusesPage.pricing.table.1hourMin3')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>130$</td>
                      <td>70$</td>
                      <td>25$</td>
                      <td>10$</td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>{t('microbusesPage.pricing.table.1dayMountains')}</th>
                      <th>{t('microbusesPage.pricing.table.2daysMountains')}</th>
                      <th>{t('microbusesPage.pricing.table.1daySamarkand')}</th>
                      <th>{t('microbusesPage.pricing.table.2daysSamarkand')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100$</td>
                      <td>180$</td>
                      <td>250$</td>
                      <td>300$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vehicle-section light-bg">
        <div className="vehicle-container reverse">
          <div className="vehicle-image-container">
            <img src={graym} alt={t('microbusesPage.grandStarex.imageAlt')} className="vehicle-main-image" />
          </div>
          <div className="vehicle-description">
            <h2>{t('microbusesPage.grandStarex.title')}</h2>
            <p>{t('microbusesPage.grandStarex.description1')}</p>
            <p>{t('microbusesPage.grandStarex.description2')}</p>
            
            <div className="vehicle-features">
              <h3>{t('microbusesPage.featuresTitle')}</h3>
              <ul>
                {featuresGrandStarex.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pricing-table">
              <h3>{t('microbusesPage.pricingTitle')}</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>{t('microbusesPage.pricing.table.1dayIntercity')}</th>
                      <th>{t('microbusesPage.pricing.table.1dayCity')}</th>
                      <th>{t('microbusesPage.pricing.table.airportTransfer')}</th>
                      <th>{t('microbusesPage.pricing.table.1hourMin3')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>130$</td>
                      <td>70$</td>
                      <td>25$</td>
                      <td>10$</td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>{t('microbusesPage.pricing.table.1dayMountains')}</th>
                      <th>{t('microbusesPage.pricing.table.2daysMountains')}</th>
                      <th>{t('microbusesPage.pricing.table.1daySamarkand')}</th>
                      <th>{t('microbusesPage.pricing.table.2daysSamarkand')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100$</td>
                      <td>180$</td>
                      <td>250$</td>
                      <td>300$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="notes-section dark-bg">
        <div className="notes-container">
          <h3>{t('microbusesPage.notesTitle')}</h3>
          <div className="notes-content">
            <p><strong>{t('microbusesPage.mountains1Day')}</strong></p>
            <p><strong>{t('microbusesPage.mountains2Days')}</strong></p>
            <p><strong>{t('microbusesPage.samarkand1Day')}</strong></p>
            
            <div className="additional-notes">
              <h4>{t('microbusesPage.additionalTitle')}</h4>
              <ul>
                <li>{t('microbusesPage.emptyRun')}</li>
                <li>{t('microbusesPage.bukharaFergana')}</li>
                <li>{t('microbusesPage.urgenchTermez')}</li>
                <li>{t('microbusesPage.minTariff')}</li>
                <li>{t('microbusesPage.urgenchDays')}</li>
                <li>{t('microbusesPage.termexDays')}</li>
                <li>{t('microbusesPage.bukharaDays')}</li>
                <li>{t('microbusesPage.ferganaDays')}</li>
              </ul>
              <p>{t('microbusesPage.included')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <ContactButton showModal size="large">
          {t('microbusesPage.bookMicrobus')}
        </ContactButton>
      </div>
    </div>
  );
};

export default Microbuses;