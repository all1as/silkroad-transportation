import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollToAnchor } from '../hooks/useScrollToAnchor';
import ContactButton from '../components/ContactButton';
import './Tours.css';

interface Tour {
  id: string;
  title: string;
  duration: string;
  route: string;
  program: string;
  included?: string;
}

const Tours = () => {
  const { t } = useTranslation();
  useScrollToAnchor();

  const tours: Tour[] = [
    {
      id: '11-day',
      title: t('toursPage.tours.11Day.title'),
      duration: t('toursPage.tours.11Day.duration'),
      route: t('toursPage.tours.11Day.route'),
      program: t('toursPage.tours.11Day.program'),
      included: t('toursPage.tours.11Day.included')
    },
    {
      id: '7-day',
      title: t('toursPage.tours.7Day.title'),
      duration: t('toursPage.tours.7Day.duration'),
      route: t('toursPage.tours.7Day.route'),
      program: t('toursPage.tours.7Day.program'),
      included: t('toursPage.tours.7Day.included')
    },
    {
      id: '6-day',
      title: t('toursPage.tours.6Day.title'),
      duration: t('toursPage.tours.6Day.duration'),
      route: t('toursPage.tours.6Day.route'),
      program: t('toursPage.tours.6Day.program'),
      included: t('toursPage.tours.6Day.included')
    },
    {
      id: '5-day',
      title: t('toursPage.tours.5Day.title'),
      duration: t('toursPage.tours.5Day.duration'),
      route: t('toursPage.tours.5Day.route'),
      program: t('toursPage.tours.5Day.program'),
      included: t('toursPage.tours.5Day.included')
    },
    {
      id: '4-day',
      title: t('toursPage.tours.4Day.title'),
      duration: t('toursPage.tours.4Day.duration'),
      route: t('toursPage.tours.4Day.route'),
      program: t('toursPage.tours.4Day.program')
    },
    {
      id: '3-day',
      title: t('toursPage.tours.3Day.title'),
      duration: t('toursPage.tours.3Day.duration'),
      route: t('toursPage.tours.3Day.route'),
      program: t('toursPage.tours.3Day.program')
    }
  ];

  return (
    <div className="tours-page">
      <div className="tours-header">
        <h1>{t('toursPage.title')}</h1>
        <p>{t('toursPage.subtitle')}</p>
      </div>

      {tours.map((tour, index) => (
        <section
          key={tour.id}
          id={tour.id}
          className={`tour-section ${index % 2 === 0 ? 'dark-bg' : 'light-bg'}`}
        >
          <div className="tour-container">
            <div className="tour-content">
              <div className="tour-header">
                <h2>{tour.title}</h2>
                <div className="tour-meta">
                  <span className="tour-duration">{tour.duration}</span>
                  <span className="tour-route">{tour.route}</span>
                </div>
              </div>

              <div className="tour-program">
                <h3>{t('toursPage.programTitle')}</h3>
                <div className="program-content">
                  {tour.program.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="program-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {tour.included && (
                <div className="tour-included">
                  <h3>{t('toursPage.includedTitle')}</h3>
                  <div className="included-content">
                    {tour.included.split('\n').map((item, idx) => (
                      <p key={idx} className="included-item">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="tour-cta">
                <ContactButton showModal size="large">
                  {t('toursPage.currentPrice')}
                </ContactButton>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Tours;