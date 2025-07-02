import React, { useState } from 'react';

const faqs = [
  {
    question: "What is your counseling approach?",
    answer: "We offer faith-based, professional counseling grounded in Christian values."
  },
  {
    question: "Do I need a referral?",
    answer: "No referral is needed. You can directly book an appointment with us."
  },
  {
    question: "Is everything confidential?",
    answer: "Yes, all sessions are strictly confidential as per legal and ethical guidelines."
  }
];

const Ratefacts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-screen  px-10 py-8 bg-blue-100">
      <h2 className="text-4xl font-bold text-center mb-20  wrap-word pt-25">Frequently Asked Questions</h2>
      <div className="space-y-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="md:w-full sm:w-auto flex justify-between items-center text-left text-3xl font-large font-bold text-gray-800 hover:text-blue-600 transition cursor-pointer"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {isOpen && (
                <p className="mt-2 text-black transition-all flex flex-start sm:w-auto">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ratefacts;
