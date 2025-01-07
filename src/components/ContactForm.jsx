import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { validateForm, sanitizeInput } from '../utils/validation'; // Importa le funzioni di validazione

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value); // Sanitize l'input
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' })); // Resetta gli errori del campo modificato
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione del form
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus({ type: 'error', message: 'Please fix the errors in the form' });
      return;
    }

    // Invia email con EmailJS
    emailjs
      .send(
        'service_g2aeg4e', // Sostituisci con il tuo Service ID
        'template_g4u1m5d', // Sostituisci con il tuo Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'LxNTmsOboniHkaF-o' // Sostituisci con il tuo Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus({ type: 'success', message: 'Email inviata con successo!' });
          setFormData({ name: '', email: '', message: '' }); // Resetta i campi del form
          setErrors({});
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus({ type: 'error', message: 'Errore nell\'invio dell\'email' });
        }
      );
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-8 px-4 sm:px-0 "
    >
      {status.message && (
        <div
          className={`mb-4 p-4 rounded-lg ${
            status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-xl  text-gray-700 dark:text-gray-300 mb-1">
          Nome *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          maxLength={50}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-xl text-gray-700 dark:text-gray-300 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          maxLength={100}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-xl  text-gray-700 dark:text-gray-300 mb-1">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          maxLength={1000}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full text-lg py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
      >
        Invia
      </button>
    </motion.form>
  );
}
