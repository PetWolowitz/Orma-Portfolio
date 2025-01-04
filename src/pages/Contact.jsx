import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
          Contact
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-center mb-4 text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Interested in my work? Send me a message and I'll get back to you as soon as possible.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
}