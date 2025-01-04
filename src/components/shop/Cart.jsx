import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import PaymentMethods from './PaymentMethods';

export default function Cart({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handlePaymentSuccess = () => {
    clearCart();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      className="fixed right-0 top-0 h-full w-full md:w-96 bg-white dark:bg-gray-800 shadow-xl z-50"
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </AnimatePresence>
        </div>

        {isCheckingOut ? (
          <PaymentMethods
            amount={getTotal()}
            onSuccess={handlePaymentSuccess}
            onCancel={() => setIsCheckingOut(false)}
          />
        ) : (
          <CartSummary
            total={getTotal()}
            onCheckout={() => setIsCheckingOut(true)}
            disabled={items.length === 0}
          />
        )}
      </div>
    </motion.div>
  );
}