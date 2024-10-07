"use client"

import Layout from '../components/Layout';
import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/yourFormID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('Message sent successfully!');
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Empowerful LLC - Contact Us</title>
        <meta name="description" content="Get in touch with Empowerful LLC to enhance your academic journey." />
      </Head>

      <header className="bg-blue-400 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Let´s Connect!</h1>
        <p className="mt-4">We’d love to hear from you!</p>
      </header>

      <section className="py-12 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full text-black px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded shadow">Send Message</button>
          <p className="mt-4">{status}</p>
        </form>
      </section>
    </Layout>
  );
}
