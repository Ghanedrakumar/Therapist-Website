import React from 'react'
import About from './About'
import { useState, useEffect } from 'react'
import Testimonials from './Testimonials'
import Ratefacts from './Ratefacts'
import Service from './Service'
const Dashboard = () => {
  const [showFirst, setShowFirst] = useState(true);
 const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 40; // final number
    const duration = 1000; // 1 second
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = 45000; // final number
    const duration = 1000; // 1 second
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 150;
      setNumbers(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 2000); // switch every 1 second

    return () => clearInterval(interval); // cleanup
  }, []);


  return (
    <div>
<main>


      <div className="relative lg:w-full overflow-hidden h-auto">

        <img src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-b.79c9c9cd.jpg&w=1920&q=75" alt="something went wrong" className="w-full h-auto object-cover opacity-98 " />

        {/* Overlay with centered text */}
        <div className="absolute inset-0  flex items-center justify-center backdrop-blur-xs ">
          <div className="text-center text-white space-y-4 px-4 ">
            <p className="text-base">Christian Counseling Services in Richmond & Central Virginia</p>
            <h1 className="text-3xl md:text-5xl font-bold">Professional Counseling for Christian Healing and Growth</h1>
            <p className="text-lg">Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.</p>
            <h1 className="text-2xl font-bold">I want to work with you for…</h1>
            {showFirst ? (
              <p className="text-white text-3xl font-bold animate-pulse">Greater Love in Your Relationships</p>
            ) : (
              <p className="text-white text-3xl font-bold animate-pulse">Greater Peace in Your Heart</p>
            )}

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-6'>

              <button className='w-fit rounded-xl text-blue-600 text-2xl flex items-center justify-center font-bold bg-slate-100 p-5  px-10 hover:bg-blue-900 cursor-pointer hover:text-white '>Start Healing Today</button>

            </div>



          </div>
        </div>

      </div>

<div className='flex flex-col md:flex-row items-center justify-center gap-50 p-10 bg-green-900'>

  <div className="">
   <div className='text-4xl font-bold text-white'> {count}+  </div>  
      <br />
      <span className="text-xl font-medium  text-white">Years of Experience</span>
      <p className='text-white pt-2'>Providing compassionate and effective Individual and Couples Therapy</p>
    </div>


  <div>
   <div  className="text-4xl font-bold text-white"> {numbers}+ </div>  
      <br />
      <span className=" text-3xl  text-white font-bold">Individual client Sessions</span>
       <p className='text-white pt-2'>Helping individuals and couples heal, grow, and find purpose</p>
    </div>

</div>

<Service/>


      <About />
      <Testimonials />
      <Ratefacts/>

</main>

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
  )
}

export default Dashboard
