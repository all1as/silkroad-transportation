import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Buses from './pages/Buses';
import Microbuses from './pages/Microbuses';
import Licenses from './pages/Licenses'; 
import Contacts from './pages/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import Cars from './pages/Cars';
import DynamicMetaTags from './components/DynamicMetaTags';
import { useScrollToTop } from './hooks/useScrollToTop'; 
import './App.css';

function App() {
  useScrollToTop(); 

  return (
    <>
      <DynamicMetaTags />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/microbuses" element={<Microbuses />} />
          <Route path="/licenses" element={<Licenses />} /> 
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;