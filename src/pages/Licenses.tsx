import React from 'react';
import './Licenses.css';

// Импорты изображений (чтобы работало при деплое)
import lic1 from '/lic1.jpg';
import lic2 from '/lic2.jpg';
import lic3 from '/lic3.jpg';
import lic4 from '/lic4.jpg';

const Licenses = () => {
  const licenses = [
    { id: 1, src: lic1, alt: 'Лицензия 1' },
    { id: 2, src: lic2, alt: 'Лицензия 2' },
    { id: 3, src: lic3, alt: 'Лицензия 3' },
    { id: 4, src: lic4, alt: 'Лицензия 4' }
  ];

  return (
    <div className="licenses-page">
      <div className="licenses-header">
        <h1>Лицензии и сертификаты</h1>
        <p>Официальные документы, подтверждающие нашу деятельность</p>
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

      <div className="licenses-info">
        <h2>О наших лицензиях</h2>
        <p>
          Все лицензии и сертификаты подтверждают наше право осуществлять 
          пассажирские перевозки по территории Узбекистана. Мы работаем 
          в строгом соответствии с законодательством и имеем все необходимые 
          разрешительные документы.
        </p>
      </div>
    </div>
  );
};

export default Licenses;
