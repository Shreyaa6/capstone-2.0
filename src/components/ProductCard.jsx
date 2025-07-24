import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductCard.css';
import Footer from './Footer';
import NavBar from './Navbar';

const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3 className="product-title">{product.name}</h3>
          <p className="product-price">₹{product.price}</p>
          <p className="product-type">{product.type}</p>
          <button
            className="customize-button"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            Customize Now
          </button>
        </div>
      ))}
    </div>
  );
};

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <ProductCard />
      <Footer />
    </>
  );
};

export default ProductPage;
