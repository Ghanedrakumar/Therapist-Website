import React, { useState } from 'react';
import About from './About';
import Testimonial from './Testimonials';

const apiKey = import.meta.env.VITE_API_BASE_URL;
const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =await fetch(`${apiKey}/consultation/consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data =await response.json();
      console.log('Form submitted successfully:', data);
      alert('Form submitted successfully!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-purple-100 px-8 gap-10">
        <About />
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Free Consultation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.message}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
      <Testimonial />

      <div className='bg-blue-100 p-10'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold'>Get Started Today</h2>
          <p className='mt-2'>Take the first step towards healing and growth.</p>
        </div>
      </div>

      <footer className='bg-blue-200 p-10 text-center'>
        <p className='text-sm'>© 2023 Ellie Shumaker, LCSW. All rights reserved.</p>
        <p className='text-sm'>Privacy Policy | Terms of Service</p>
      </footer>

    </div>

  );
};

export default Consultation;
