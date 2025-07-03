import React, { useState } from 'react';
import About from './About';
import Testimonial from './Testimonials';
import { toast } from "react-toastify"
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
      const response = await fetch(`${apiKey}/consultation/consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
      toast.success('Form submitted successfully!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      {/* Responsive Wrapper */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen bg-purple-100 px-4 sm:px-6 lg:px-12 py-10 gap-10">
        {/* About Section */}
        <div className="w-full lg:w-1/2">
          <About />
        </div>

        {/* Consultation Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
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

      {/* Testimonials */}
      <Testimonial />

      {/* Get Started Section */}
      <div className="bg-blue-100 py-10 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Get Started Today</h2>
        <p className="mt-2 text-sm sm:text-base">Take the first step towards healing and growth.</p>
      </div>

      {/* Footer */}
      <footer className="bg-blue-200 p-4 sm:p-6 text-center text-sm">
        <p>© 2023 Ellie Shumaker, LCSW. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default Consultation;
