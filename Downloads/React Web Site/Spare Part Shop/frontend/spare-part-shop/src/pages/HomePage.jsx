import React from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import ProductItem from '../components/ProductItem';
import './HomePage.css';
import Footer from '../components/Footer';

const HomePage = () => {
  const products = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      imageUrl: '/images/product1.png'
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      imageUrl: '/images/product2.png'
    },
    {
      name: 'Product 3',
      description: 'Description of Product 3',
      imageUrl: '/images/product3.jpg'
    },
    {
      name: 'Product 4',
      description: 'Description of Product 4',
      imageUrl: '/images/product4.jpg'
    },
    {
      name: 'Product 5',
      description: 'Description of Product 5',
      imageUrl: '/images/product5.jpg'
    },
    {
      name: 'Product 6',
      description: 'Description of Product 6',
      imageUrl: '/images/product6.png'
    },
  ];

  // Array of image URLs for the image slider
  const images = [
    '/images/image.jpeg',
    '/images/image2.jpg',
    '/images/image3.jpeg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <Header />
      <main>
        <ImageSlider images={images} />
        
        <section>
          <h2>Featured Products</h2>
          <div className="product-list">
            {products.map((product, index) => (
              <ProductItem
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>About Us</h2>
          <p>Information about your spare part shop and its mission.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
