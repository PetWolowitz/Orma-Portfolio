import { supabase } from '../lib/supabase';
import { getMessaging, getToken } from 'firebase/messaging';

export async function createOrder(orderData) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData])
      .select()
      .single();

    if (error) throw error;

    // Send notification to artist
    await sendNotificationToArtist(data);

    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

export async function updateOrderStatus(orderId, status) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', orderId)
      .select()
      .single();

    if (error) throw error;

    // Send notification to customer
    await sendNotificationToCustomer(data);

    return data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
}

async function sendNotificationToArtist(order) {
  // Send email notification
  await supabase.functions.invoke('send-artist-notification', {
    body: { order, email: import.meta.env.VITE_ARTIST_EMAIL }
  });
}

async function sendNotificationToCustomer(order) {
  // Send push notification if permission granted
  try {
    const messaging = getMessaging();
    const token = await getToken(messaging);
    
    if (token) {
      await supabase.functions.invoke('send-push-notification', {
        body: { 
          token,
          title: 'Order Update',
          body: `Your order #${order.id} status: ${order.status}`
        }
      });
    }
  } catch (error) {
    console.error('Error sending push notification:', error);
  }
}