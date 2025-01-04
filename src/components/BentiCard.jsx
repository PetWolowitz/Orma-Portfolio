import { motion } from 'framer-motion';

export default function BentiCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}