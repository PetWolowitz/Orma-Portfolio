import { PayPalButtons } from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder } from '../../services/orderService';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function PaymentMethods({ amount, onSuccess, onCancel }) {
  const handlePayPalSuccess = async (details) => {
    try {
      await createOrder({
        paymentId: details.id,
        amount,
        paymentMethod: 'paypal',
        status: 'paid'
      });
      
      toast.success('Payment successful!');
      onSuccess();
    } catch (error) {
      toast.error('Error processing payment');
      console.error('Payment error:', error);
    }
  };

  const handleStripePayment = async () => {
    try {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: import.meta.env.VITE_STRIPE_PRICE_ID,
          quantity: 1
        }],
        mode: 'payment',
        successUrl: `${window.location.origin}/payment-success`,
        cancelUrl: `${window.location.origin}/payment-cancel`,
      });

      if (error) throw error;
    } catch (error) {
      toast.error('Error initiating payment');
      console.error('Stripe error:', error);
    }
  };

  return (
    <div className="space-y-4">
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(handlePayPalSuccess);
        }}
      />

      <button
        onClick={handleStripePayment}
        className="w-full py-2 bg-blue-600 text-white rounded-lg"
      >
        Pay with Stripe
      </button>

      <button
        onClick={onCancel}
        className="w-full py-2 bg-gray-200 text-gray-800 rounded-lg"
      >
        Cancel
      </button>
    </div>
  );
}