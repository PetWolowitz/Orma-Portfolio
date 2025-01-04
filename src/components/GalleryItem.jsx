import { motion } from 'framer-motion';

export default function GalleryItem({ artwork, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(artwork)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <img
        src={artwork.url}
        alt={artwork.title}
        className="w-full h-[300px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{artwork.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {artwork.year} • {artwork.medium}
        </p>
      </div>
    </motion.div>
  );
}