import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { submitContactForm } from '../utils/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-orange-50 dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-orange-500" />
                <span>contact@exodusdigital.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 border border-orange-500/20"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 border border-orange-500/20"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 border border-orange-500/20"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}