import React from 'react';
import { FaPhone,FaBookOpen, FaHospital, FaMap, FaPalette, FaLaptop, FaMailBulk } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import Image from 'next/image';
import img from "../about/image.jpg"
import Styles from "../about/about.module.css";

const About: React.FC = () => {
  return (
    <section className={Styles["about-section"]}>
            <div className={Styles["container"]}>
                <div className={Styles["row-container"]}>
                    <div className={Styles["image-container"]}>
                      <Image src={img} alt='' className={Styles['img']} ></Image> 
                    </div>
                    <div className={Styles["content"]}>
                        <h3>My intro</h3>
                        <h1>About Me</h1>
                        <p>I am Iqra Kalhoro I am a Graphic Designer and student of GIAIC to be a Successful Frontend Developer</p>
                    <ul className={Styles["information"]}>
                        <li className={Styles["detail"]}>
                            <FaPerson className="fa-solid fa-user"></FaPerson>
                            &nbsp; Name &nbsp; &nbsp; : &nbsp; &nbsp; Iqra Kalhoro
                        </li>
                        <li className={Styles["detail"]}>
                           <FaPhone className="fa-solid fa-phone"></FaPhone>&nbsp; Phone &nbsp; &nbsp; : &nbsp; &nbsp;03352974765
                        </li>
                        <li className={Styles["detail"]}>
                            <FaMailBulk className="fa-solid fa-envelope"></FaMailBulk>&nbsp;
                            Email &nbsp; &nbsp; : &nbsp; &nbsp; iqrakalhoro110@gmail.com
                        </li>
                    </ul>
                    <h4>My Interest</h4>
                    <ul className={Styles["interest"]}>
        <li>
          <FaLaptop className="fill-black" /> Technology
        </li>
        <li>
          <FaBookOpen className="fill-black" /> Reading
        </li>
        <li>
          <FaHospital className="fill-black" /> Healthcare
        </li>
        <li>
          <FaMap className="fill-black" /> Traveling
        </li>
        <li>
          <FaPalette className="fill-black" /> Art
        </li>
      </ul>
                    </div>
                </div>
            </div>
         </section>







  );
};

export default About;
