import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Image from 'next/image';
import img from "./about/image.jpg"
import Link from 'next/link';

export default function HomePage() {
  return (
    <>  
      <Header />
    <div className="min-h-screen w-full flex flex-col">
      
      {/* Main Content */}
      <div className="flex-grow flex  bg-[#262525]">
        {/* Left Container */}
        <div className="left-container h-screen flex items-center w-1/2 pl-12 justify-center">
          <div className="ml-8">
            <p className="intro text-2xl text-white">
              Hi I'm <span className="text-[#5db9ee]">Iqra Kalhoro</span>
            </p>
            <h1 className="text-5xl text-[#5db9ee]">Frontend Developer</h1>
            <p className="detail text-[1.1rem] text-white max-w-[38rem] my-[1.1rem] mb-12 leading-[1.8rem]">
              I am a part time Graphic Designer. I am enrolled in the GIAIC course to learn more in information technology and AI to enhance my skills, as I am more interested in this field and aspire to be a part-time freelancer or provide my services to any brand or company privately.
            </p>
            <div className="btn-container flex space-x-20 justify-center">
              <button className="border border-blue-400 text-black bg-blue-400 px-6 py-3 rounded-lg transition duration-500 hover:bg-transparent hover:text-blue-400">
              <Link href="/services">Services</Link> 
              </button>
              <button className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg transition duration-500 hover:bg-blue-400 hover:text-black">
                <Link href="/contact">Contact me</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="right-container h-screen flex items-center justify-center w-[50%] " >
          <div className='shadow-box flex justify-center items-center w-[60%] border-2 border-blue-500  h-[60%] rounded-[50%]' >
            <Image src={img} alt='' className='w-[370px] h-[370px] rounded-[50%]'></Image>
          </div>
        </div>
      </div>
      {/* About Me Section */}
      <section ></section>

      {/* Footer */}
      <Footer />
    </div>
    </>

  );
}
// bg-gradient-to-bl from-[#3877ff] to-[#262525]