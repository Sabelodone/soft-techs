import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LearnMorePage.css'; // Import CSS for styling

// Team members data
const teamMembers = [
  {
    name: "Jameson Pillay",
    position: "CEO, Founder and Backend Developer",
    imageUrl: "jameson.jpg", // Ensure these images are in your public folder
   
  },
  {
    name: "Sabelo Sibaya",
    position: "COO, Co-founder and Frontend Developer",
    imageUrl: "IMG_6067.JPG",
    
  },
];

const LearnMorePage = () => {
  return (
    <div className="learn-more-page">
      <header className="header">
        <h1>Welcome to Soft Techs!</h1>
        <p className="tagline">
          At <strong>Soft Techs</strong>, we are committed to revolutionizing the tech landscape through innovative product development.
        </p>
      </header>

      <section className="content">
        <h2>🌟 Cutting-Edge Technology</h2>
        <p>
          Our team of experts is dedicated to harnessing the latest advancements in technology. We specialize in developing software solutions that cater to a wide range of industries, ensuring our clients stay ahead in a competitive market.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.imageUrl} alt={`${member.name}'s profile`} className="team-member-img" />
              <h3>{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content">
        <h2>🛠️ Custom Software Development</h2>
        <p>
          We offer tailored software development services to deliver solutions that fit perfectly within your operational framework, streamlining processes and improving efficiency.
        </p>

        <h2>📊 Data-Driven Insights</h2>
        <p>
          Leverage the power of data with our analytics solutions. We provide businesses with the tools to analyze their performance, make informed decisions, and uncover new opportunities for growth.
        </p>

        <h2>💻 User-Centric Design</h2>
        <p>
          Our design philosophy revolves around creating intuitive interfaces that enhance usability, ensuring that your technology is as enjoyable to use as it is powerful.
        </p>

        <h2>🚀 Join Our Journey</h2>
        <p>
          Partner with us to embark on a journey of digital transformation. Whether you’re a startup looking for a technological edge or an established company seeking to innovate, we are here to support you every step of the way.
        </p>

        <h2>🌍 Connect with Us!</h2>
        <p>
          Ready to take your technology to the next level? Contact us today to learn more about how Soft Techs can help your business thrive in the digital age.
        </p>
      </section>

      <div>
        <Link to="/products">
          <button className="learn-more-button" aria-label="Learn more about our services">Services</button>
        </Link>
      </div>
    </div>
  );
};

export default LearnMorePage;
