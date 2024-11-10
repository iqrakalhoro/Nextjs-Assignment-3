import React from 'react';
import styles from './service.module.css';

const services = [
  {
    title: 'Web Development',
    description:
      'Crafting responsive and visually appealing websites using HTML, CSS, and JavaScript. Building robust server-side applications with secure databases. Complete end-to-end web development, from design to deployment. Tailored solutions to meet unique business needs. Setting up online stores with seamless shopping experiences. Ongoing updates, bug fixes, and performance optimization.',
  },
  {
    title: 'Graphic Design',
    description:
      'Providing unique and memorable brand identities. Eye-catching brochures, flyers, and banners. Engaging visuals for online presence. Clean and attractive layouts for websites and apps. Creative packaging that stands out on the shelf. High-impact designs for promotions.',
  },
  {
    title: 'SEO',
    description:
      'Improve content, keywords, and meta tags for better rankings. Enhance site speed, mobile-friendliness, and crawlability. Identify high-impact keywords to target your audience. Boost authority with quality backlinks. Optimize for local searches and map listings. In-depth analysis and action plans to improve site performance.',
  },
  {
    title: 'Digital Marketing',
    description:
      'Engage your audience across major platforms. Create and promote valuable, relevant content. Drive instant traffic with targeted paid ads. Build relationships and convert leads with effective campaigns. Optimize visibility and drive organic and paid search traffic. Data-driven insights for continuous growth.',
  },
  {
    title: 'Video Editing',
    description:
      'Smooth transitions, color correction, and sound enhancement. Engaging content tailored for platforms like Instagram, TikTok, and YouTube. High-impact videos for ads and branding. Capturing the best moments for personal or corporate events. Clear and concise edits for tutorials and presentations. Adding dynamic text, animations, and effects.',
  },
  {
    title: 'Branding',
    description:
      'Unique, memorable brand identity. Developing positioning, messaging, and branding. Consistent color schemes, typography, and brand assets. Comprehensive rules for cohesive brand usage. Refresh and modernize your existing brand. Design branded materials that stand out.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles['flex-center']}>
          <div className={styles['text-center']}>
            <h3 className={styles.heading}>Services</h3>
            <h1 className={styles.subheading}>What I Offer</h1>
          </div>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <h4 className={styles['card-title']}>{service.title}</h4>
                <p className={styles.para}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
