import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import BentiGrid from './pages/BentiGrid';
import BentiDetail from './pages/BentiDetail';
import Biography from './pages/Biography';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // Importa ScrollToTop

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        {/* Aggiunto ScrollToTop all'interno del Router */}
        <ScrollToTop />
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          {/* Il wrapper AnimatePresence dovrebbe essere posizionato intorno alle rotte */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/benti-grid" element={<BentiGrid />} />
              <Route path="/benti-grid/:id" element={<BentiDetail />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all route per gestire percorsi non trovati */}
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
