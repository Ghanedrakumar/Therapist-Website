import React, { useState } from "react";
const apiKey = import.meta.env.VITE_API_BASE_URL;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiKey}/contact/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Sending request to:", `${apiKey}/contact/contact`);

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center gap-8 justify-center bg-gradient-to-r from-purple-100 to-blue-300 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8">
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

          <button
            type="submit"
            disabled={!formData.name || !formData.email || !formData.message}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
