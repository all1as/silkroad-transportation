import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Buses from './pages/Buses';
import Microbuses from './pages/Microbuses';
import Licenses from './pages/Licenses'; // Добавляем импорт
import Contacts from './pages/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/microbuses" element={<Microbuses />} />
          <Route path="/licenses" element={<Licenses />} /> {/* Добавляем маршрут */}
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;