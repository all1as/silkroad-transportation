import React, { useState } from 'react';
import ContactButton from '../components/ContactButton';
import './Buses.css';
import busWopen from '/buswopen.jpg';
import busSalon from '/bussalon.jpg';

const Buses = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(busWopen);

  const images = [
    { src: busWopen, alt: 'Внешний вид автобуса', label: 'Внешний вид' },
    { src: busSalon, alt: 'Салон автобуса', label: 'Салон' }
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
          <div className="image-overlay">Нажмите для просмотра вариантов</div>
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
              <img src={currentImage} alt="Выбранное изображение" className="main-selected-image" />
            </div>
          </div>
        </div>
      )}

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

        <div className="specs-text">
          <p><strong>Вместимость:</strong> 47 пассажирских мест, объём багажного отсека: около 9–10 м³</p>
          <p><strong>Комфорт:</strong> Мягкие тканевые кресла с регулируемыми спинками, индивидуальная система кондиционирования и освещения</p>
          <p><strong>Оснащение:</strong> Холодильник, CD/DVD-плеер, радио, LCD-экраны, туалет</p>
          <p><strong>Безопасность:</strong> Системы ESP, ABS, EBS, противотуманные фары, зеркала с электроподогревом</p>
          <p><strong>Ходовые качества:</strong> Пневматическая подвеска, двигатель Euro IV, ограничение скорости до 100 км/ч</p>
        </div>

        {/* Таблица цен для SUNWIN */}
        <div className="pricing-section">
          <h2>Стоимость аренды</h2>
          
          <div className="compact-pricing">
            <div className="pricing-card">
              <h3>🏔️ Горные маршруты</h3>
              <div className="price-item">
                <span>1 день горы</span>
                <span className="price">250$</span>
              </div>
              <div className="price-item">
                <span>2 дня горы</span>
                <span className="price">400$</span>
              </div>
            </div>

            <div className="pricing-card">
              <h3>🏛️ Самарканд</h3>
              <div className="price-item">
                <span>1 день Самарканд</span>
                <span className="price">700$</span>
              </div>
              <div className="price-item">
                <span>2 дня Самарканд</span>
                <span className="price">750$</span>
              </div>
            </div>

            <div className="pricing-card">
              <h3>🚌 Стандартные маршруты</h3>
              <div className="price-item">
                <span>1 день междугородний</span>
                <span className="price">250$</span>
              </div>
              <div className="price-item">
                <span>1 день городской</span>
                <span className="price">170$</span>
              </div>
              <div className="price-item">
                <span>Трансфер аэропорт</span>
                <span className="price">60$</span>
              </div>
              <div className="price-item">
                <span>1 час (мин. 3 часа)</span>
                <span className="price">30$</span>
              </div>
            </div>
          </div>

          <div className="pricing-notes">
            <h4>Примечания к тарифам:</h4>
            <ul>
              <li><strong>1 день горы</strong> - однодневная поездка г.Ташкент – Чимган, Чарвак, Бельдерсай, Чаткал – г.Ташкент</li>
              <li><strong>2 дня горы</strong> - отвоз/привоз г.Ташкент – Чимган, Чарвак, Бельдерсай, Чаткал – г.Ташкент</li>
              <li><strong>1 день в г.Самарканд</strong> - однодневная поездка г.Ташкент – г.Самарканд – г.Ташкент</li>
            </ul>

            <h4>Дополнительные условия:</h4>
            <ul>
              <li>Оплата порожнего перегона для маршрутов которые начинаются или заканчиваются с:</li>
              <li>г.Бухара или г.Фергана + 0,5 маш/дня</li>
              <li>г.Ургенч или г.Термез + 1 маш/день</li>
              <li>Минимальное тарифицирование на короткие туры:</li>
              <li>г.Ургенч - 7 маш/день, г.Термез - 6 маш/день</li>
              <li>г.Бухара - 5 маш/день, г.Фергана - 4 маш/день</li>
            </ul>
            <p>Топливо, питание и проживание водителя включены в стоимость.</p>
          </div>
        </div>

        <div className="conclusion">
          <p>SUNWIN — это выбор для тех, кто ценит комфорт, надёжность и удобство в путешествиях по Узбекистану. Забронируйте заранее и отправляйтесь в путь с уверенностью.</p>
        </div>

        <div className="cta-buttons-row">
          <ContactButton showModal size="large">
            Забронировать автобус
          </ContactButton>
          <ContactButton to="/microbuses" variant="secondary" size="large">
            Посмотреть микроавтобусы
          </ContactButton>
        </div>
      </section>
    </div>
  );
};

export default Buses;