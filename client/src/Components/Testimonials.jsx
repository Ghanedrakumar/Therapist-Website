import React from 'react';
const Testimonials = () => {
  const testimonials = [
    "Ellie has changed my life for the better. Her guidance and support have been invaluable.",
    "I felt safe, heard, and understood. My relationships have improved dramatically.",
    "Her biblical approach to healing brought me closer to God and myself.",
  ];

  const repeated = [...testimonials, ...testimonials]; // duplicated for smooth infinite scroll

  return (
    <div className="bg-blue-200 py-20 overflow-hidden">
      <section id="testimonials" className="max-w-7xl mx-auto px-4">
        <p className="bg-amber-100 rounded-md p-2 text-sm font-medium mb-4 w-fit">
          Client Success Story & Testimonials
        </p>
        <h1 className="text-4xl font-bold mb-4">What Farmer Clients Say</h1>
        <p className="text-2xl p-3">
          Real experience from individuals who have found healing and growth through our work together.
        </p>

        {/* Marquee Animation */}
        <div className="relative w-full overflow-hidden mt-10">
          <div
            className="flex gap-6 w-max animate-[slide_30s_linear_infinite] hover:[animation-play-state:paused]"
          >
            {repeated.map((text, index) => (
              <div
                key={index}
                className="w-80 min-w-[20rem] h-48 bg-white border-2 border-black p-4 rounded-md shadow-md flex flex-col justify-center items-center text-black"
              >
                <h2 className="font-bold mb-2">Happy Client</h2>
                <p className="text-center text-sm">"{text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inline animation keyframes using Tailwind's arbitrary properties */}
        <style>{`
          @keyframes slide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Testimonials;
