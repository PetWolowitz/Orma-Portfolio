import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BiographyCarousel({ events }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!events || events.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentIndex];

  return (
    <div className="relative w-full h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="h-full p-6"
      >
        <div className="h-full flex flex-col">
          <div className="text-xl py- text-primary dark:text-primary-light mb-2">
            {currentEvent.date}
          </div>
          <h3 className="text-2xl  mb-3 text-gray-900 dark:text-white">
            {currentEvent.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            {currentEvent.description}
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        <button
          className="p-2 rounded-full bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 shadow-lg z-10"
          onClick={handlePrev}
        >
          <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-xl text-gray-500 dark:text-gray-400">
          {currentIndex + 1} / {events.length}
        </span>
        <button
          className="p-2 rounded-full bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 shadow-lg z-10"
          onClick={handleNext}
        >
          <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}