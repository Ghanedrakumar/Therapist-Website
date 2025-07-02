import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import About from './About';
import Testimonial from './Testimonials';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert('Please verify that you are not a robot.');
      return;
    }
    console.log('Form Submitted:', formData);
    // You can send this data to your backend or email service here
  };

  return (
<div>
    <div className="flex justify-center items-center min-h-screen bg-purple-100 px-8 gap-10">
        <About/>
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

          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleRecaptchaChange}
             
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
<Testimonial/>

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
