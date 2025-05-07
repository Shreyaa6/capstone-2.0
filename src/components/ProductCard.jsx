import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductCard.css';

const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img
            src="/heroImage01.jpeg"
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

export default ProductCard;
