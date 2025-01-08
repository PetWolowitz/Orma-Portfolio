import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white dark:bg-gray-900"
      style={{
        backgroundImage: 'url("/images/contact/image5.jpg")', // Percorso corretto dell'immagine
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 ">
      <h1
          className="text-3xl sm:text-4xl md:text-5xl py-4 text-center mb-8 sm:mb-12 text-white
            text-shadow-custom ">
        Contattami
      </h1>
        
        <div className="max-w-2xl mx-auto mb-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 md:p-10">
            
            <p className="text-gray-600 text-xl font-semibold dark:text-gray-300 text-center mb-8">
            Interessato al mio lavoro? Mandami un messaggio e ti risponderò il prima possibile.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
}