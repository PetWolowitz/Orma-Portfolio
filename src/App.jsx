import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import BentiGrid from './pages/BentiGrid';
import BentiDetail from './pages/BentiDetail';
import Biography from './pages/Biography';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

// Initialize PayPal with required options
const paypalOptions = {
  "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "test", // Fallback for development
  currency: "EUR",
  intent: "capture"
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div className={darkMode ? 'dark' : ''}>
        <Router>
          <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/benti-grid" element={<BentiGrid />} />
                <Route path="/benti-grid/:id" element={<BentiDetail />} />
                <Route path="/biography" element={<Biography />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shop" element={<Shop />} />
              </Routes>
            </AnimatePresence>
          </Layout>
        </Router>
        <Toaster position="top-center" />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;