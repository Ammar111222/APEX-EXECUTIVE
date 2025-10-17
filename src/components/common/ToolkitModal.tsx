import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

interface ToolkitModalProps {
  open: boolean;
  onClose: () => void;
}

const SERVICE_ID = 'service_sonn9ab'; // Replace with your EmailJS Service ID
const TEMPLATE_ID = 'template_2xgh3jn'; // Replace with your EmailJS Template ID
const PUBLIC_KEY = '_Pii-CqIlyydj16yZ'; // Replace with your EmailJS Public Key

const ToolkitModal: React.FC<ToolkitModalProps> = ({ open, onClose }) => {
  const [form, setForm] = useState({
    username: '',
    company: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          username: form.username,
          company: form.company,
          email: form.email,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Your request has been sent!');
          setIsSubmitting(false);
          setForm({ username: '', company: '', email: '' });
          onClose();
        },
        () => {
          toast.error('Failed to send. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      style={{ minHeight: '100vh' }}
    >
      <div
        className="bg-jet-black rounded-2xl shadow-2xl p-8 w-full max-w-md border border-royal-gold/40 relative animate-fadeIn"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          minWidth: '320px',
          margin: '0 16px',
          maxWidth: '95vw',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-royal-gold hover:text-warm-gold text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-royal-gold text-center">Get Your Free Toolkit</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-royal-gold font-medium mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-royal-gold font-medium mb-2">Company Name</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label className="block text-royal-gold font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
              placeholder="Enter your email address"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-royal-gold hover:bg-warm-gold text-jet-black font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToolkitModal; 