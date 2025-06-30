import React from 'react';
const About = () => {
    return (
        <div className="bg-green-100 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left Side: Image */}
                    <div className="relative flex-shrink-0 transition-transform transform hover:scale-105">
                        <img
                            src="https://static-assets.thriveworks.com/thriveworks/providers/Cheryl_Gray_1635916561182/Cheryl-Gray.jpeg"
                            alt="Ellie Shumaker"
                            className="h-96 w-64 object-cover p-4 rounded-lg shadow-md "
                        />
                        <div className="absolute bottom-4 left-4 bg-gray-200 bg-blend-saturation text-black p-2 rounded shadow-md text-sm leading-tight">
                            <p className="font-semibold">Ellie Shumaker</p>
                            <p className="">LCS</p>
                            <p className="text-xs">Top Rated | 40+ Years Experience</p>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="max-w-xl">
                        <p className="bg-amber-100 rounded-md p-2 text-sm font-medium mb-4">
                            About Ellie Shumaker, LCSW - Experienced Christian Therapist in Richmond, VA
                        </p>
                        <h1 className="text-4xl font-bold mb-4">Hi I'm Ellie Shumaker</h1>
                        <p className="text-justify text-base break-words leading-relaxed">
                            With over 40 years of dedicated experience in individual and couples therapy, I truly enjoy working with a wide variety of people of different ages, capacities, backgrounds, and presenting problems. My goal is to help you build credibility in your own journey and educate you on pathways to healing.
                            <br />
                            My therapeutic approach is rooted in Christian principles, aiming to foster spiritual growth, the deepening of relationships, and a greater sense of inner peace. I am passionate about helping clients grow in their capacity to love and in their trust for God's love for them.
                            <br />
                            Whether you are seeking to heal from past wounds, discover your life's purpose, or prepare for Heaven, I offer a supportive space to explore these profound areas of life. Together, we can work towards achieving your goals for a more fulfilling and purposeful existence.
                        </p>
                    </div>

                </div>

                <div className='mt-10 text-center flex col items-center justify-center gap-6'>
                    <p className=' font-bold text-3xl'>Featured In:</p>

                    <a href="https://www.psychologytoday.com/us/therapists/ellie-shumaker-richmond-va/112300">
                        <img src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpsychologyToday-logo.4e0fdee7.webp&w=640&q=75" alt="" className='h-12 w-36' />
                    </a>


                    <a href="https://www.theravive.com/therapists/ellie-shumaker.aspx">
                        <img src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheravive.907f65bb.png&w=640&q=75" alt="" className='h-12 w-36' />
                    </a>

                    <a href="https://www.christiancounselordirectory.com/Therapist/Ellie-Shumaker-LCSW_46949">
                        <img src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FChristianCounselorDirectory.bd202c5a.png&w=640&q=75" alt="" className='h-12 w-36' />
                    </a>

                    <a href="https://therapist.com/clinician/eleanor-shumaker-26506/">
                        <img src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/static/media/Therapist.com-logo.43d1c2a1.svg" alt="" className='h-12 w-36' />
                    </a>
                </div>




            </div>
        </div>
    );
};

export default About;
