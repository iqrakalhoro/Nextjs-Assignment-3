import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Image from 'next/image';
import img from './about/image.jpg';
import Link from 'next/link';
import About from './about/page';
import Skills from './skills/page';
import PortfolioSection from './portfolio/page';
import ContactForm from './contact/page';


export default function HomePage() {
  return (
    <>
      <Header />
      <div className="main-container">
  {/* Main Content */}
  <div className="content">
    {/* Left Container */}
    <div className="left-container">
      <div className="text-content">
        <p className="intro">
          Hi I'm <span className="highlight">Iqra Kalhoro</span>
        </p>
        <h1 className="title">Frontend Developer</h1>
        <p className="detail">
          I am a part time Graphic Designer. I am enrolled in the GIAIC course to learn more in information technology and AI to enhance my skills, as I am more interested in this field and aspire to be a part-time freelancer or provide my services to any brand or company privately.
        </p>
        <div className="btn-container">
          <button className="portfolio-button">
            <Link href="/portfolio">My Portfolio</Link>
          </button>
          <button className="contact-button">
            <Link href="/contact">Contact me</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Right Container */}
    <div className="right-container">
      <div className="image-container">
        <Image src={img} alt="Profile Image" className="profile-image" />
      </div>
    </div>
  </div>

  {/* Other Sections */}
  <About />
  <Skills />
  <PortfolioSection />
  <ContactForm />
  <Footer />
</div>

    </>
  );
}
