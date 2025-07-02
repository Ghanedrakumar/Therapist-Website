import React from "react";

const services = [
  {
    title: "Christian Individual Counseling in Richmond, VA",
    description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
    image: "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwomanPrayingOutdoor.99f58aaf.jpg&w=1920&q=75", // replace with your own image
  },
  {
    title: "Christian Couples Counseling in Richmond, VA",
    description: "Heal Your Relationship, Grow Closer to God Together in Richmond.",
    image: "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCouplesHappyHoldingBible.225997a3.jpg&w=1920&q=75", // replace with your own image
  },
];

const Service = () => {
  return (
    <div>
    <div className="bg-green-100 py-20 px-6 lg:px-20 ">
      <div className="pb-5 cursor-pointer text-2xl font-bold text-blue-600">
      <a href="/"><button className="cursor-pointer">Home</button></a>
      </div>
      <h2 className="text-4xl font-bold mb-10">How I Help</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden bg-blue-50 hover:shadow-xl transition-shadow"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <footer className='bg-yellow-100 p-10 text-center'>
        <p className='text-sm'>© 2023 Ellie Shumaker, LCSW. All rights reserved.</p>
        <p className='text-sm'>Privacy Policy | Terms of Service</p>
      </footer>
      </div>
  );
};

export default Service;
