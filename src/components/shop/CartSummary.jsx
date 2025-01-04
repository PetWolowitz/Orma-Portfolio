export default function CartSummary({ total, onCheckout, disabled }) {
  return (
    <div className="border-t pt-4">
      <div className="flex justify-between mb-4">
        <span className="font-semibold text-gray-900 dark:text-white">Total:</span>
        <span className="text-primary dark:text-primary-light">€{total}</span>
      </div>
      <button
        onClick={onCheckout}
        disabled={disabled}
        className="w-full py-2 bg-primary text-white rounded-lg disabled:opacity-50 hover:bg-primary-dark transition-colors duration-200"
      >
        Checkout
      </button>
    </div>
  );
}