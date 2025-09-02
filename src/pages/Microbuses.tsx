import React from 'react';
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
  useScrollToAnchor();
  return (
    <div className="microbuses-page">
      <section id="19-seater" className="vehicle-section dark-bg">
        <div className="vehicle-container">
          <div className="vehicle-image-container">
            <img src={blackm} alt="Микроавтобус Eurise" className="vehicle-main-image" />
            <img src={blackmSalon} alt="Салон Eurise" className="vehicle-secondary-image" />
          </div>
          <div className="vehicle-description">
            <h2>Микроавтобус Eurise (2023 г.в.)</h2>
            <p>
              Дизайн и технические характеристики туристического микроавтобуса Eurise (2023 г. в.) сочетают современный стиль, 
              манёвренность и высокий уровень комфорта. Эта модель отлично подходит для небольших туристических групп, 
              корпоративных трансферов и VIP-поездок, обеспечивая комфортное передвижение как на междугородних маршрутах, 
              так и в черте города.
            </p>
            <p>
              Одноэтажный микроавтобус рассчитан на 19 пассажиров. Салон оснащён мягкими эргономичными креслами с регулируемым 
              наклоном спинки и достаточным расстоянием между рядами для комфортного расположения ног. Обивка выполнена из 
              износостойкой экокожи, легко очищающейся и долговечной.
            </p>
            
            <div className="vehicle-features">
              <h3>Технические данные:</h3>
              <ul>
                <li>Год выпуска: 2023</li>
                <li>Цвет: чёрный</li>
                <li>Пассажирских мест: 19</li>
                <li>Объём багажного отделения: около 2–3 м³</li>
                <li>LCD-экран: ✔️</li>
                <li>Мультимедийная система: ✔️</li>
                <li>Кондиционер: ✔️</li>
                <li>Отопление: ✔️</li>
                <li>USB-зарядки: ✔️</li>
                <li>Микрофон для гида: ✔️</li>
              </ul>
            </div>

            <div className="pricing-table">
              <h3>Стоимость аренды</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>1 день межгород</th>
                      <th>1 день</th>
                      <th>Трансфер аэропорт</th>
                      <th>1 час (мин. 3 часа)</th>
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
                      <th>1 день горы</th>
                      <th>2 дня горы</th>
                      <th>1 день Самарканд</th>
                      <th>2 дня Самарканд</th>
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
            <img src={whitem} alt="Микроавтобус TOYOTA Hiace" className="vehicle-main-image" />
          </div>
          <div className="vehicle-description">
            
          <h2>Микроавтобус TOYOTA Hiace (2019 г.в.)</h2>
            <p>
              Дизайн и технические характеристики микроавтобуса TOYOTA Hiace (2019 г. в.) отражают легендарное качество и 
              надёжность японского автопроизводителя. Эта модель идеально подходит для небольших туристических групп, 
              корпоративных трансферов, аэропортных встреч и VIP-поездок, обеспечивая высокий уровень комфорта на любых маршрутах.
            </p>
            <p>
              Компактный и манёвренный TOYOTA Hiace рассчитан на 13 пассажиров. Салон оснащён удобными креслами с анатомической 
              формой, регулируемыми спинками и подголовниками. Обивка выполнена из прочных и приятных на ощупь материалов, 
              легко очищающихся и устойчивых к износу.
            </p>
            
            <div className="vehicle-features">
              <h3>Технические данные:</h3>
              <ul>
                <li>Год выпуска: 2019</li>
                <li>Цвет: белый</li>
                <li>Пассажирских мест: 13</li>
                <li>Объём багажного отделения: около 1,5–2 м³</li>
                <li>Мультимедийная система: ✔️</li>
                <li>Кондиционер: ✔️</li>
                <li>Отопление: ✔️</li>
                <li>USB и Bluetooth: ✔️</li>
              </ul>
            </div>

            <div className="pricing-table">
              <h3>Стоимость аренды</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>1 день межгород</th>
                      <th>1 день</th>
                      <th>Трансфер аэропорт</th>
                      <th>1 час (мин. 3 часа)</th>
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
                      <th>1 день горы</th>
                      <th>2 дня горы</th>
                      <th>1 день Самарканд</th>
                      <th>2 дня Самарканд</th>
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
            <img src={blacknew} alt="Минивэн HYUNDAI H-1" className="vehicle-main-image" />
            <img src={blacknewSalon} alt="Салон HYUNDAI H-1" className="vehicle-secondary-image" />
          </div>
          <div className="vehicle-description">
            <h2>Минивэн HYUNDAI H-1 (2023 г.в.)</h2>
            <p>
              Дизайн и технические характеристики минивэна HYUNDAI H-1 (2023 г.в.) сочетают современный внешний вид, 
              манёвренность и высокий уровень комфорта, что делает его отличным выбором для VIP-трансферов, деловых 
              поездок и индивидуальных туристических маршрутов. Автомобиль одинаково хорошо подходит для перемещений 
              по городу и междугородних поездок.
            </p>
            <p>
              Пассажирский минивэн HYUNDAI H-1 рассчитан на 7 мест, включая водителя. Салон оформлен в 
              современном стиле с применением премиальных материалов отделки. Просторные кресла с мягкой обивкой, 
              регулируемыми спинками, подголовниками и ремнями безопасности обеспечивают максимальный комфорт.
            </p>
            
            <div className="vehicle-features">
              <h3>Технические данные:</h3>
              <ul>
                <li>Год выпуска: 2023</li>
                <li>Цвет: чёрный</li>
                <li>Пассажирских мест: 7</li>
                <li>Объём багажного отделения: около 1 м³</li>
                <li>Мультимедийная система: ✔</li>
                <li>Кондиционер: ✔</li>
                <li>Отопление: ✔</li>
                <li>USB и Bluetooth: ✔</li>
                <li>Подушки безопасности: ✔</li>
              </ul>
            </div>

            <div className="pricing-table">
              <h3>Стоимость аренды</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>1 день межгород</th>
                      <th>1 день</th>
                      <th>Трансфер аэропорт</th>
                      <th>1 час (мин. 3 часа)</th>
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
                      <th>1 день горы*</th>
                      <th>2 дня горы**</th>
                      <th>1 день Самарканд***</th>
                      <th>2 дня Самарканд</th>
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
            <img src={graym} alt="Минивэн GRAND Starex" className="vehicle-main-image" />
          </div>
          <div className="vehicle-description">
            <h2>Минивэн GRAND Starex (2018 г.в.)</h2>
            <p>
              Дизайн и технические характеристики минивэна GRAND Starex (2018 г.в.) объединяют компактность, 
              манёвренность и высокий уровень комфорта, что делает его идеальным выбором для VIP-трансферов, 
              деловых поездок и индивидуальных туристических маршрутов. Автомобиль прекрасно подходит как для 
              городских поездок, так и для междугородних путешествий.
            </p>
            <p>
              Пассажирский минивэн GRAND Starex рассчитан на 7 мест, включая водителя. Салон выполнен 
              в современном эргономичном стиле с применением высококачественных материалов отделки. Просторные 
              кресла с мягкой обивкой оснащены регулируемыми спинками, подголовниками и ремнями безопасности.
            </p>
            
            <div className="vehicle-features">
              <h3>Технические данные:</h3>
              <ul>
                <li>Год выпуска: 2018</li>
                <li>Цвет: серебряный</li>
                <li>Пассажирских мест: 7</li>
                <li>Объём багажного отделения: около 1 м³</li>
                <li>Мультимедийная система: ✔</li>
                <li>Кондиционер: ✔</li>
                <li>Отопление: ✔</li>
                <li>USB и Bluetooth: ✔</li>
                <li>Подушки безопасности: ✔</li>
              </ul>
            </div>

            <div className="pricing-table">
              <h3>Стоимость аренды</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>1 день межгород</th>
                      <th>1 день</th>
                      <th>Трансфер аэропорт</th>
                      <th>1 час (мин. 3 часа)</th>
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
                      <th>1 день горы*</th>
                      <th>2 дня горы**</th>
                      <th>1 день Самарканд***</th>
                      <th>2 дня Самарканд</th>
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
          <h3>Примечания к тарифам:</h3>
          <div className="notes-content">
            <p><strong>1 день горы</strong> - однодневная поездка г.Ташкент – Чимган, Чарвак, Бельдерсай, Чаткал – г.Ташкент</p>
            <p><strong>2 дня горы</strong> - отвоз/привоз г.Ташкент – Чимган, Чарвак, Бельдерсай, Чаткал – г.Ташкент</p>
            <p><strong>1 день в г.Самарканд</strong> - однодневная поездка г.Ташкент – г.Самарканд – г.Ташкент</p>
            
            <div className="additional-notes">
              <h4>Дополнительные условия:</h4>
              <ul>
                <li>Оплата порожнего перегона для маршрутов которые начинаются или заканчиваются с:</li>
                <li>г.Бухара или г.Фергана + 0,5 маш/дня</li>
                <li>г.Ургенч или г.Термез + 1 маш/день</li>
                <li>Минимальное тарифицирование на короткие туры (не стандартные):</li>
                <li>г.Ургенч - 7 маш/день</li>
                <li>г.Термез - 6 маш/день</li>
                <li>г.Бухара - 5 маш/день</li>
                <li>г.Фергана - 4 маш/день</li>
              </ul>
              <p>Топливо, питание и проживание водителя включены в стоимость.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <ContactButton showModal size="large">
          Забронировать микроавтобус
        </ContactButton>
      </div>
    </div>
  );
};

export default Microbuses;