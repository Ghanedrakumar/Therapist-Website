import React, { useState } from 'react';

const faqs = [
  {
    question: "What are your fees?",
    answer: "My fees are $60 for individual, $90 for couple"
  },
  {
    question: "Do you take insurance?",
    answer: "No, I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for out-of-network benefits with your insurance company."
  },
  {
    question: "Do you provide online counseling?",
    answer: "No, I do not provide online counseling."
  },
  {
    question: "What are your office hours?",
    answer: "My office hours are Monday through Thursday, 11:00 AM to 6:30 PM."
  },
  {
    question: "What geographic areas do you serve?",
    answer: "My practice is located in Richmond, VA, and I serve clients in Central Virginia."
  },
  {
    question: "What services do you offer?",
    answer: "I offer Individual Therapy and Couples Therapy. My practice focuses on areas such as Christian counseling, spiritual growth, deepening relationships, healing past wounds, and discovering your life's purpose."
  }
];

const Ratefacts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-screen  px-10 py-2 pb-10 bg-blue-100" id='ratefacts'>
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
