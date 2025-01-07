import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura l'invio dell'email con EmailJS
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
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus({ type: 'error', message: 'Errore durante l’invio dell’email.' });
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {status.message && (
        <div
          className={`p-4 mb-4 rounded ${
            status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
}
