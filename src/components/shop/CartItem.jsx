import { motion } from 'framer-motion';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-4 mb-4 p-2 border-b"
    >
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">€{item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            -
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 p-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
}