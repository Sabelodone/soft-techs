import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LearnMorePage.css'; // Import CSS for styling

// Team members data
const teamMembers = [
  {
    name: "Jameson Pillay",
    position: "CEO,Founder and Backend Developer ",
    imageUrl: "jameson.jpg", // Make sure to add these images to your public folder
    bio: "John has over 20 years of experience in the tech industry, leading Soft Techs with his vision and passion for innovation.",
  },
  {
    name: "Sabelo Sibaya",
    position: "C0-founder and Frontend Developer",
    imageUrl: "IMG_6067.JPG",
    bio: "Jane is a highly skilled developer with a focus on front-end technologies and a knack for creating intuitive user experiences.",
  },
];

const LearnMorePage = () => {
  return (
    <div className="learn-more-page">
      <h1>Welcome to Soft Techs!</h1>
      <p>
        At <strong>Soft Techs</strong>, we are committed to revolutionizing the tech landscape through innovative product development. Our mission is to create solutions that empower individuals and businesses alike, enhancing productivity and driving success.
      </p>

      <h2>🌟 Cutting-Edge Technology</h2>
      <p>
        Our team of experts is dedicated to harnessing the latest advancements in technology. We specialize in developing software solutions that cater to a wide range of industries, ensuring our clients stay ahead in a competitive market.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imageUrl} alt={`${member.name}'s profile`} className="team-member-img" />
            <h3>{member.name}</h3>
            <p className="team-position">{member.position}</p>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>

      <h2>🛠️ Custom Software Development</h2>
      <p>
        We understand that every business has unique needs. That's why we offer tailored software development services to deliver solutions that fit perfectly within your operational framework, streamlining processes and improving efficiency.
      </p>

      <h2>📊 Data-Driven Insights</h2>
      <p>
        Leverage the power of data with our analytics solutions. We provide businesses with the tools to analyze their performance, make informed decisions, and uncover new opportunities for growth.
      </p>

      <h2>💻 User-Centric Design</h2>
      <p>
        At Soft Techs, we prioritize user experience. Our design philosophy revolves around creating intuitive interfaces that enhance usability, ensuring that your technology is as enjoyable to use as it is powerful.
      </p>

      <h2>🚀 Join Our Journey</h2>
      <p>
        Partner with us to embark on a journey of digital transformation. Whether you’re a startup looking for a technological edge or an established company seeking to innovate, we are here to support you every step of the way.
      </p>

      <h2>🌍 Connect with Us!</h2>
      <p>
        Ready to take your technology to the next level? Contact us today to learn more about how Soft Techs can help your business thrive in the digital age.
      </p>

      <h2>Get Started with Soft Techs!</h2>
      <p>
        Explore our range of products and services designed to empower your business. Together, let’s create a future where technology enhances every aspect of life.
      </p>

      <Link to="/products">
        <button className="learn-more-button">Learn More</button>
      </Link>
    </div>
  );
};

export default LearnMorePage;
