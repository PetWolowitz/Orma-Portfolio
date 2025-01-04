import { motion } from 'framer-motion';
import BiographyCarousel from '../components/BiographyCarousel';
import { biographyIntro, biographyTimeline, biographyTools } from '../data/biographyData';

export default function Biography() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 dark:text-white">
          Biography
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Introduction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {biographyIntro.text}
              </p>
            </div>
          </div>

          {/* Right column - Timeline Carousel */}
          <div>
            <BiographyCarousel events={biographyTimeline} />
          </div>
        </div>

        {/* Bottom section - Tools and Skills */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white">
            Tools & Expertise
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {biographyTools}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}