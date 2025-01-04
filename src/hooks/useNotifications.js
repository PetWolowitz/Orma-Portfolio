import { useEffect, useState } from 'react';
import { requestNotificationPermission, onMessageListener } from '../firebase/config';

export function useNotifications() {
  const [notification, setNotification] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    requestNotificationPermission().then(setToken);

    const unsubscribe = onMessageListener().then(payload => {
      setNotification(payload);
    });

    return () => unsubscribe;
  }, []);

  return { notification, token };
}