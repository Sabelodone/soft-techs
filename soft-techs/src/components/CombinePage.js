import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Home icon
import './CombinePage.css'; // CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import ContactFormModal from './ContactFormModal'; // Modal component for contact form

const CombinedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  
  const logoPath = '/logo-no-background (1).png'; // Logo image path



  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div className="container">
    <Link to="/" className="navbar-brand">
      <img src={logoPath} alt="Soft-Techs Logo" style={{ maxWidth: '50px' }} />
    </Link>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
     
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FaHome className="me-2" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">Our Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link">Product</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted className="video-foreground">
          <source src="/Navy Tech Cyber Security Concept Video Ad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Landing Page Header */}
      <div className="hero-section text-center text-white py-5">
        <img className="img-fluid mb-3" src={logoPath} alt="Soft-Techs Logo" style={{ maxWidth: '200px' }} />
        <h2 className="display-4">Softer Productivity for Every Industry</h2>
        <p className="lead">"Soft-Techs offers user-friendly software solutions that boost productivity and streamline workflows.</p>
        <Link to="/learn-more" className="btn btn-warning mx-2 rounded-pill shadow" aria-label="Learn more about Soft-Techs Suite-System">Learn More</Link>
      </div>

      {/* Product Overview Section */}
      <section className="product-overview text-center py-5">
        <div className="container">
          <div className="projects-section mb-4">
            <h2 className="mb-4">Product</h2>
            <div className="project-image">
              <img 
                src={`/Screenshot 2024-07-25 143708.png`} 
                alt="Suits Systems Project" 
                className="img-fluid mb-3" 
                style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', maxWidth: '80%', height: 'auto' }} 
              />
              <p className="mt-3 text-muted">
                Suits Systems: A comprehensive management suite for law firms, enhancing efficiency and client engagement.
              </p>
            </div>
          </div>
          <div className="button-group">
            <Link to="https://www.softtechs.co.za/" className="btn btn-info mx-2 rounded-pill shadow">Explore the Suite</Link>
            <Link to="/demo" className="btn btn-success mx-2 rounded-pill shadow">Get Started with a Demo</Link>
          </div>
        </div>
      </section>

  {/* Feature Section */}

<section className="features-section">
  <div className="container">  
    <div className="row justify-content-start align-items-center"> {/* Align items to the left */}
      <div className="col-sm-12 col-md-6 col-lg-6"> {/* Adjusting column width */}
      <h2 className="mb-4 text-left">🔍 Discover Our Exclusive Offerings</h2>

        <h3 className="font-weight-bold">Premium Quality</h3>
        <p>Experience top-notch quality with every service we provide, tailored just for you!</p>
        <Link to="/products" className="btn btn-primary mt-4">
          View Our Products
        </Link>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6"> {/* Image on the right */}
        <img 
          src="/91fa1ba7-e1dc-492c-a1d0-d3554752b0a8_0.jpeg" 
          alt="Exciting Feature" 
          className="img-fluid" 
          style={{ marginLeft: '110px' }} // Adjust the margin as needed
        />
      </div>
    </div>
    {/* Repeat the above block for additional features without content */}
  </div>
</section>





   {/* Frequently Asked Section */}
<section className="features-section py-5">
  <div className="container">
    <div className="row align-items-center"> {/* Align items to the center vertically */}
      <div className="col-sm-12 col-md-6"> {/* Image on the left */}
      <img src="/ad0d5346-b722-46e6-b4a7-d18259b2d56d_0.jpeg" alt="Exciting Feature" className="img-fluid" />
      </div>
      <div className="col-sm-12 col-md-6 text-content"> {/* Text on the right */}
        <h2 className="mb-4 text-left">Frequently Asked Questions</h2>
        <h3>What services does Soft-Techs offer?</h3>
        <p>☑️We offer a range of services including cloud solutions, data analytics, AI systems, and custom software development tailored for law firms.</p>
        <h3>How can I contact Soft-Techs for support?</h3>
        <p>☑️You can reach out to us via the 'Contact Us' button on our website or directly through our support email at support@softtechs.co.za.</p>
      </div>
    </div>
  </div>
</section>





      {/* Call to Action Section */}
<section className="call-to-action-section">
  <div className="container">
  <h2 className="display-4 font-weight-bold text-dark mb-4"> Ready to Get Started?🏁</h2>

    <p className="lead text-dark mb-4">
      Contact us today for a personalized consultation!
    </p>
    <button 
      className="btn btn-danger btn-lg rounded-pill shadow" 
      onClick={() => setIsModalOpen(true)}
    >
      Contact Us
    </button>
  </div>
</section>

      

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        
      {/* Testimonials Section */}
      <section className="testimonials-section bg-light text-center py-5">
        <div className="container">
          <h2 className="mb-4">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"The team at Soft-Techs transformed our operations and made our workflows seamless!"</p>
                <h5>- Dave Smith</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"Their dedication to quality and support is unmatched. Highly recommend!"</p>
                <h5>- Vusi Zondo</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"Soft-Techs' solutions helped us grow our firm and serve our clients better!"</p>
                <h5>- John Zitha</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    
  );
};

export default CombinedPage;