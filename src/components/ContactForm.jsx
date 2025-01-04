import { useState } from 'react';
import { motion } from 'framer-motion';
import { validateForm, sanitizeInput } from '../utils/validation';

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
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const mailtoLink = `mailto:your-friend@email.com?subject=${encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setStatus({ type: 'success', message: 'Opening your email client...' });
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-8 px-4 sm:px-0"
    >
      {status.message && (
        <div className={`mb-4 p-4 rounded-lg ${
          status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {status.message}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font- text-gray-700 dark:text-gray-300 mb-1">
          Name *
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
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message *
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
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
      >
        Send Message
      </button>
    </motion.form>
  );
}