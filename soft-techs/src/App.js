import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importing components from the components folder
import Features from './components/Features';
import CombinedPage from './components/CombinePage';
import LearnMorePage from './components/LearnMorePage';
import ProductsPage from './components/ProductsPage'; // Import the ProductsPage component
import Footer from './components/Footer';

import './App.css'; // Ensure your CSS styles are applied

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the Features component */}
          <Route path="/features" element={<Features />} />

          {/* Route for the Learn More page */}
          <Route path="/learn-more" element={<LearnMorePage />} />

          {/* Route for the Products page */}
          <Route path="/products" element={<ProductsPage />} /> {/* New route added */}

          {/* Main route for the Combined Page */}
          <Route path="/" element={<CombinedPage />} />

          {/* Redirect any unknown routes to the Combined Page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
