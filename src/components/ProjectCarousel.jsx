import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function ProjectCarousel({ projects }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Per controllare la modale
  const [modalImage, setModalImage] = useState(null); // Per l'immagine da mostrare

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentProject = projects[Math.abs(page % projects.length)];

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="relative w-full">
      {/* Aggiunto overflow-hidden per evitare lo scroll orizzontale */}
      <div className="relative h-[610px] rounded-lg shadow-xl bg-white dark:bg-gray-800 overflow-hidden ">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`${page}-${currentProject.name}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            {/* Aggiunto onClick per aprire la modale */}
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="w-full h-[400px] object-cover cursor-pointer"
              onClick={() => openModal(currentProject.image)}
            />
            <div className="p-4 ">
              <h3 className="text-lg text-gray-900 dark:text-white mb-4 ">
                {currentProject.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold ">
                {currentProject.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-1 ">
                {currentProject.location ||
                  currentProject.technique ||
                  currentProject.software ||
                  currentProject.client}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pulsanti di navigazione */}
      <button
        aria-label="Previous project"
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow-lg z-10"
        onClick={() => paginate(-1)}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Next project"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow-lg z-10"
        onClick={() => paginate(1)}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicatori a pallini */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to project ${index + 1}`}
            onClick={() => setPage([index, index > page ? 1 : -1])}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.abs(page % projects.length) === index
                ? 'bg-primary dark:bg-white'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Modale per l'immagine */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Modal"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
