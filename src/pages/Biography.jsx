import { motion } from 'framer-motion';
import BiographyCarousel from '../components/BiographyCarousel';
import { biographyIntro, biographyTimeline, biographyTools } from '../data/biographyData';

export default function Biography() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white dark:bg-gray-900"
      style={{
        backgroundImage: 'url("/images/biography/image7.jpg")', // Percorso corretto dell'immagine
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=" min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10">
          {/* Titolo principale */}
          <h1 className="text-3xl py-6 sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-white text-shadow-custom dark:text-white">
            La mia Storia
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Colonna sinistra - Introduzione */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 text-xl font-semibold dark:text-gray-300 whitespace-pre-line">
                  {biographyIntro.text}
                </p>
              </div>
            </div>

            {/* Colonna destra - Carousel della timeline */}
            <div>
              <BiographyCarousel events={biographyTimeline} />
            </div>
          </div>

          {/* Sezione inferiore - Strumenti e Competenze */}
          <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl">
            <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
              Strumenti & Competenze
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 text-xl font-semibold dark:text-gray-300 whitespace-pre-line">
                {biographyTools}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
