import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('YOUR_SUPABASE_FUNCTION_URL_OR_DIRECT_INSERT_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add your Supabase keys here if needed
          // 'apikey': 'YOUR_SUPABASE_ANON_KEY',
          // 'Authorization': 'Bearer YOUR_SUPABASE_ANON_KEY',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          created_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="bg-gray-100 py-10 px-6 border-t border-gray-200" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have a question? Send us a message — we'll get back to you quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name *"
            className="px-5 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address *"
            className="px-5 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-500"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message *"
            className="px-5 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-500 md:col-span-2 resize-none"
          ></textarea>

          {/* Submit Button & Status */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`px-10 py-3 rounded-lg font-semibold text-lg transition shadow-md ${
                status === 'sending'
                  ? 'bg-zinc-400 cursor-not-allowed text-zinc-600'
                  : 'bg-zinc-400 hover:zinc-600 text-white'
              }`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="mt-4 text-green-600 font-medium">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === 'error' && (
              <p className="mt-4 text-red-600 font-medium">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;