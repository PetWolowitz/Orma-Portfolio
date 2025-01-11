import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.5, // Diminuita di 0.3 secondi da 1.8
      ease: [0.2, 0.65, 0.3, 0.9],
      opacity: { duration: 1.7 }, // Diminuita di 0.3 secondi da 2.0
      scale: { 
        duration: 1.9, // Diminuita di 0.3 secondi da 2.2
        ease: [0.165, 0.84, 0.44, 1]
      }
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.9, // Diminuita di 0.3 secondi da 1.2
      ease: [0.25, 0.1, 0.25, 1],
      opacity: { duration: 1.1 } // Diminuita di 0.3 secondi da 1.4
    },
  },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}