import React, { useState } from 'react';
import './Features.css';
import FeatureModal from './FeatureModal'; // Import the modal component

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState({});

  // Update the features array to only include the "Suits System"
  const features = [
    { id: 'suits-system', title: 'Suits System', description: 'A comprehensive system designed for managing all suit-related services efficiently.' },
  ];

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  return (
    <div className="features-page">
      <h1>Izici Zethu</h1>
      <div className="features-list">
        {features.map((feature) => (
          <div 
            className="feature-card" 
            key={feature.id} 
            onClick={() => handleFeatureClick(feature)} // Open modal on click
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for Features */}
      <FeatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        feature={selectedFeature}
      />
    </div>
  );
};

export default Features;
