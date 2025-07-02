import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    // Backend call here...
  };

  return (
    <div>
    
    <div className="min-h-screen flex items-center gap-8 justify-center bg-gradient-to-r from-purple-100 to-blue-300 p-4">
        
      <motion.div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Get In Touch
        </h2>
        <p className="text-center text-gray-500 mb-8">
         Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Leave Your message here..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
            required
          ></textarea>

          {/* Uncomment if you're using Google reCAPTCHA */}
          {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleCaptchaChange} /> */}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
      
    </div>
       </div>
  );
};

export default Contact;
