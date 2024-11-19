import React, { useState } from 'react';
import './Footer.css'; // Ensure you have this CSS file
import InfoModal from './Modal'; // Import the InfoModal component

const Footer = () => {
    // Define footer link texts
    const footerLinks = [
        {
          label: 'About Us',
          content: "At Soft~techs, we are dedicated to delivering innovative and creative design solutions tailored to meet your business's needs. Our expert team specializes in providing high-quality web design, graphic design, and branding services to help your business stand out in a competitive market."
        },
        {
          label: 'Contact Us',
          content: "For inquiries or customer support, please feel free to contact us at any time. Email us at contact@techartistrydesign.com or reach out via phone: (074) 642 2396 / (073) 918 2393. Our team is available to assist you with any questions you may have."
        },
       
        {
          label: 'Subscribe to our Newsletter',
          content: "Stay updated with the latest news, trends, and exclusive offers from SoftTechs. Enter your email address below to subscribe and be the first to know about our new services and promotions."
        },
        {
          label: 'Terms of Service',
          content: "By accessing or using our services, you agree to abide by the terms and conditions outlined in our Terms of Service. Please take a moment to review our policies to ensure you fully understand your rights and responsibilities."
        },
        {
          label: 'Privacy Policy',
          content: "Your privacy is very important to us. We take all necessary measures to protect your personal data and ensure it is used in accordance with our Privacy Policy."
        },
       
      ];
      

    // State to manage modal visibility and content
    const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '' });

    const openModal = (title, content) => {
        setModalInfo({ isOpen: true, title, content });
    };

    const closeModal = () => {
        setModalInfo({ isOpen: false, title: '', content: '' });
    };

    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container footer-content d-flex justify-content-between flex-wrap">
                {/* Left Side Content */}
                <div className="left-content">
                    <h2 className="business-name mb-4">Soft Techs</h2>

                    <div className="footer-links mb-4">
                        {footerLinks.map((link, index) => (
                            <button 
                                key={index} 
                                className="btn btn-link text-light" 
                                onClick={() => openModal(link.label, link.content)}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="contact-info mb-4">
                        <h5>Contact Us</h5>
                        <p>Email: <a href="mailto:jameson@softtechs.co.za" className="text-light">info@softtechs.co.za</a></p>
                        <p>Phone: <a href="tel:+270746422396" className="text-light">(074) 642 2396 / (073) 918 2393</a></p>
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="right-content">
                    <div className="partners mb-4">
                        <h5>Our Partners</h5>
                        <ul>
                            <li><a href="https://partner1.com" target="_blank" rel="noopener noreferrer">Techartistrydesign</a></li>
 
                        </ul>
                    </div>

                    <div className="newsletter mb-4">
                        <h5>Subscribe to our Newsletter</h5>
                        <form>
                            <input type="email" placeholder="Your email address" required />
                            <button type="submit" className="btn btn-warning">Subscribe</button>
                        </form>
                    </div>

                    <div className="social-media mb-4">
                        <h5>Follow Us</h5>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom text-center">
                <p className="mb-0">&copy; 2024 Soft Techs. All rights reserved.</p>
            </div>

            {/* Modal for displaying content */}
            <InfoModal 
                isOpen={modalInfo.isOpen} 
                onRequestClose={closeModal} 
                title={modalInfo.title} 
                content={modalInfo.content} 
            />
        </footer>
    );
};

export default Footer;
