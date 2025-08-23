import React, { useState } from 'react';
import ContactButton from '../components/ContactButton';
import './Buses.css';

const Buses = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('/buswopen.jpg');

  const images = [
    { src: '/buswopen.jpg', alt: 'Внешний вид автобуса', label: 'Внешний вид' },
    { src: '/bussalon.jpg', alt: 'Салон автобуса', label: 'Салон' }
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
      {/* Hero section with main image */}
      <section className="bus-hero">
        <div className="bus-hero-image" onClick={openImageModal}>
          <img src={currentImage} alt="Автобус SUNWIN" />
          <div className="image-overlay">Нажмите для просмотра вариантов</div>
        </div>
      </section>

      {/* Image selection modal */}
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
              <img src={currentImage} alt="Выбранное изображение" className="main-selected-image" />
            </div>
          </div>
        </div>
      )}

      {/* Content section */}
      <section className="bus-content">
        <h1>Автобус SUNWIN (2017 г.в.) — комфорт и надёжность для вашей поездки</h1>
        
        <p>
          Дизайн и технические характеристики туристического автобуса SUNWIN (2017 г. в.) гармонично сочетают в себе комфорт, 
          вместительность и надёжность, необходимые для дальних поездок и экскурсионных туров. Этот автобус идеально подходит 
          как для междугородних маршрутов, так и для поездок внутри города.
        </p>

        <p>
          Одноэтажный двухдверный автобус SUNWIN рассчитан на перевозку до 47 пассажиров. В нижней части расположены просторные 
          багажные отсеки, позволяющие разместить чемоданы и крупногабаритный багаж. Над ними — салон с мягкими тканевыми креслами 
          с высокими спинками и удобной эргономичной формой. Конфигурация сидений обеспечивает достаточно пространства для ног, 
          а индивидуальные регуляторы наклона позволяют выбрать оптимальное положение для отдыха в дороге.
        </p>

        <h2>Технические характеристики:</h2>

        <div className="feature">
          <h3>Вместимость</h3>
          <p>47 пассажирских мест, объём багажного отсека: около 9–10 м³</p>
        </div>

        <div className="feature">
          <h3>Комфорт</h3>
          <p>Мягкие тканевые кресла с регулируемыми спинками, индивидуальная система кондиционирования и освещения</p>
        </div>

        <div className="feature">
          <h3>Оснащение</h3>
          <p>Холодильник, CD/DVD-плеер, радио, LCD-экраны, туалет, мини-кухня</p>
        </div>

        <div className="feature">
          <h3>Безопасность</h3>
          <p>Системы ESP, ABS, EBS, противотуманные фары, зеркала с электроподогревом</p>
        </div>

        <div className="feature">
          <h3>Ходовые качества</h3>
          <p>Пневматическая подвеска, двигатель Euro IV, ограничение скорости до 100 км/ч</p>
        </div>

        <div className="conclusion">
          <p>SUNWIN — это выбор для тех, кто ценит комфорт, надёжность и удобство в путешествиях по Узбекистану. Забронируйте заранее и отправляйтесь в путь с уверенностью.</p>
        </div>

        <div className="cta-buttons-container">
          <div className="cta-button-wrapper">
            <ContactButton showModal size="large" fullWidth>
              Забронировать автобус
            </ContactButton>
          </div>
          <div className="cta-button-wrapper">
            <ContactButton to="/microbuses" size="large" fullWidth>
              Посмотреть микроавтобусы
            </ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buses;