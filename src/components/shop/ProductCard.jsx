import { motion } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success('Added to cart');
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full"
    >
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-200" />
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-primary dark:text-primary-light">
            €{product.price}
          </span>
          <button 
            onClick={handleAddToCart}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}