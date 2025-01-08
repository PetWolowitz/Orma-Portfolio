import { motion } from 'framer-motion';

export default function BentiCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl overflow-hidden cursor-pointer transition-shadow duration-300"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl sm:text-2xl font-playfair mb-2 dark:text-white">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base font-semibold text-gray-600 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
