import React from 'react';
import { FaUser, FaPhone, FaEnvelope,FaBookOpen, FaHospital, FaMap, FaPalette, FaLaptop, FaMailBulk } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import Image from 'next/image';
import img from "../about/image.jpg"
const About: React.FC = () => {
  return (
    <section className="about-section bg-white py-24">
            <div className="container mx-auto px-8 w-[80%]">
                <div className="row-container flex items-center justify-center gap-28">
                    <div className="image-container" data-type="inverted-img ">
                      <Image src={img} alt='' className='w-[22.8rem] h-[75vh] rounded-tl-[50%] rounded-tr-[50%]' ></Image> 
                    </div>
                    <div className="content font-[Poppins]">
                        <h3 className="text-xl text-blue-500">My intro</h3>
                        <h1 className="text-[2.6rem] font-[Fantasy] text-blue-400">About Me</h1>
                        <p className="text-white text-base max-w-[80%] mt-4 mb-8">I am Iqra Kalhoro I am a Graphic Designer and student of GIAIC to be a Successful Frontend Developer</p>
                    <ul className="information">
                        <li className="detail mb-7">
                            <FaPerson className="fa-solid fa-user fill-blue inline-block"></FaPerson>
                            &nbsp; Name &nbsp; &nbsp; : &nbsp; &nbsp; Iqra Kalhoro
                        </li>
                        <li className="detail mb-7 ">
                           <FaPhone className="fa-solid fa-phone fill-blue inline-block"></FaPhone>&nbsp; Phone &nbsp; &nbsp; : &nbsp; &nbsp;03352974765
                        </li>
                        <li className="detail mb-7">
                            <FaMailBulk className="fa-solid fa-envelope fill-blue inline-block"></FaMailBulk>&nbsp;
                            email &nbsp; &nbsp; : &nbsp; &nbsp; iqrakalhoro110@gmail.com
                        </li>
                    </ul>
                    <h4 className="text-2xl text-blue-300">My Interest</h4>
                    <ul className="interest flex gap-8 mt-5">
        <li>
          <FaLaptop className="fill-black text-white h-5 w-5 " /> Technology
        </li>
        <li>
          <FaBookOpen className="fill-black text-[#5db9ee] h-5 w-5 " /> Reading
        </li>
        <li>
          <FaHospital className="fill-black text-[#5db9ee] h-5 5" /> Healthcare
        </li>
        <li>
          <FaMap className="fill-black text-[#5db9ee] h-5 w-5 " /> Traveling
        </li>
        <li>
          <FaPalette className="fill-black text-[#5db9ee] h-5 w-5 " /> Art
        </li>
      </ul>
                    </div>
                </div>
            </div>
         </section>







  );
};

export default About;
