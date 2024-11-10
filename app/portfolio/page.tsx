import React from 'react';
import styles from './portfolio.module.css';

const PortfolioSection = () => {
  const images = [
    '/Final-Logo.jpg',
    '/NCA-logo-practice.jpg',
    '/NEON-lOGO.jpg',
    '/task-4.jpg',
    '/Professional-Business-card.jpg',
    '/Task-4-Business-card.jpg',
  ];

  return (
    <section id="portfolio-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles['flex-center']}>
          <div className={styles['text-center']}>
            <h3 className={styles.heading}>My Portfolio</h3>
            <h1 className={styles.subheading}>Recent Works</h1>
          </div>
          <div className={styles.grid}>
            {images.map((imageSrc, index) => (
              <div key={index} className={styles['portfolio-card']}>
                <img
                  src={imageSrc}
                  alt={`Project ${index + 1}`}
                  className={styles['portfolio-image']}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
