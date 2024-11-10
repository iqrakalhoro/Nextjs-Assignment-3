import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} Iqra. All rights reserved.</p>
                <ul className={styles.footerMenu}>
                    <li className={styles.footerItem}>
                        <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#terms" className={styles.footerLink}>Terms of Service</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#contact" className={styles.footerLink}>Contact Me</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
