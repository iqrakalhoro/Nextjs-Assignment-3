import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Iqra. All rights reserved.</p>
                <ul className="footer-menu">
                    <li className="footer-item"><a href="#privacy" className="footer-link">Privacy Policy</a></li>
                    <li className="footer-item"><a href="#terms" className="footer-link">Terms of Service</a></li>
                    <li className="footer-item"><a href="#contact" className="footer-link">Contact Me</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;