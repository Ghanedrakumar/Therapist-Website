import React from 'react'
import About from './About'
import { useState, useEffect } from 'react'
import Testimonials from './Testimonials'
import Ratefacts from './Ratefacts'
import Service from './Service'
import Contact from './Contact'
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

        <div className="relative w-full h-[100vh] overflow-hidden">
          <img
            src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-b.79c9c9cd.jpg&w=1920&q=75"
            alt="something went wrong"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
            <div className="text-center text-white space-y-4 max-w-3xl">
              <p className="text-sm sm:text-base">
                Christian Counseling Services in Richmond & Central Virginia
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                Professional Counseling for Christian Healing and Growth
              </h1>
              <p className="text-sm sm:text-lg">
                Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
              </p>
              <h2 className="text-lg sm:text-2xl font-bold">I want to work with you for…</h2>

              {showFirst ? (
                <p className="text-purple-200 text-xl sm:text-3xl font-bold animate-pulse">
                  Greater Love in Your Relationships
                </p>
              ) : (
                <p className="text-blue-200 text-xl sm:text-3xl font-bold animate-pulse">
                  Greater Peace in Your Heart
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <a href="/consultation">
                  <button className="w-fit rounded-xl text-blue-600 text-lg sm:text-2xl font-bold bg-slate-100 px-6 py-3 hover:bg-blue-900 hover:text-white transition">
                    Start Healing Today
                  </button>
                </a>
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
            <div className="text-4xl font-bold text-white"> {numbers}+ </div>
            <br />
            <span className=" text-3xl  text-white font-bold">Individual client Sessions</span>
            <p className='text-white pt-2'>Helping individuals and couples heal, grow, and find purpose</p>
          </div>

        </div>

        <Service />


        <About />
        <Testimonials />
        <Ratefacts />
        <div className='flex flex-col md:flex-row items-center justify-center gap-50 p-2 mt-0 bg-blue-100'>
          <div className='flex flex-col md:flex-col items-center justify-center gap-1 p-2 mt-0'>
            <h1 className=' font-bold text-3xl '>Our  Office</h1>
            <span>4913 Fitzhugh Avenue</span>
            <span>Suite 102</span>
            <span>Richmond</span>
            <span>VA 23230</span>
            <span>Richmond, VA</span>
            <a href="https://www.google.com/maps?ll=37.580043,-77.496478&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=12712760188681924103"><button className='p-3 rounded-md bg-blue-500 text-white font-bold pl-2 pr-2'>View in Map</button></a>

            <h1 className=' font-bold text-3xl mt-10 '>Hours</h1>
            <span>Monday: 12:00 PM - 8:00 PM</span>
            <span>Tuesday: 12:00 PM - 8:00 PM</span>
            <span>Wednesday: 9:00 AM - 6:00 PM</span>

          </div>
          <div className='pt-15'><Contact /></div>
        </div>

      </main>

      <div className='bg-blue-100 p-10'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold'>Get Started Today</h2>
          <p className='mt-2'>Take the first step towards healing and growth.</p>
        </div>
      </div>

      <footer className='bg-yellow-100 p-10 text-center'>
        <p className='text-sm'>© 2023 Ellie Shumaker, LCSW. All rights reserved.</p>
        <p className='text-sm'>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  )
}

export default Dashboard
