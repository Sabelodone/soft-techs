import React from 'react';
import './ProductsPage.css'; // Import CSS for styling

const products = [
  {
    title: 'Cloud Services',
    description: 'Provide scalable storage and computing solutions in the cloud.',
    icon: '☁️',
    price: 'R 500/month',
  },
  {
    title: 'Data Analytics Tools',
    description: 'Develop tools for analyzing and visualizing data to gain insights.',
    icon: '📊',
    price: 'R 750/month',
  },
  {
    title: 'AI Systems',
    description: 'Create intelligent systems for automation and predictive analytics.',
    icon: '🤖',
    price: 'R 1,200/month',
  },
  {
    title: 'Security Software',
    description: 'Offer software solutions for protecting systems and data from threats.',
    icon: '🔒',
    price: 'R 600/month',
  },
  {
    title: 'Custom Software Development',
    description: 'Build tailored software solutions to meet specific business needs.',
    icon: '🛠️',
    price: 'From R 10,000',
  },
  {
    title: 'Mobile Applications',
    description: 'Develop mobile apps for iOS and Android platforms.',
    icon: '📱',
    price: 'From R 8,000',
  },
  {
    title: 'UX/UI Design',
    description: 'Provide design services for user-friendly interfaces and experiences.',
    icon: '🎨',
    price: 'R 1,000/project',
  },
  {
    title: 'DevOps Tools',
    description: 'Create tools to enhance collaboration between development and operations teams.',
    icon: '⚙️',
    price: 'R 700/month',
  },
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Our Products & Services</h1>
      <p>
        At Soft Techs, we offer a wide range of innovative products and services designed to meet the unique needs of businesses in the digital age. Explore our offerings below:
      </p>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-icon">{product.icon}</div>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
