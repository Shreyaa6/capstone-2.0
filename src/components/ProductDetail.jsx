import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [selectedModel, setSelectedModel] = useState('iPhone');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  if (!product) return <h2 className="product-not-found">Product not found</h2>;

  return (
    <div className="product-detail-container split-layout">
      <div className="left-panel">
        <img
          src="/heroImage01.jpeg"
          alt={product.name}
          className="product-detail-image"
        />
        <h1 className="product-detail-title">{product.name}</h1>
        <p className="product-detail-price">Price: ₹{product.price}</p>
        <p className="product-detail-type">Type: {product.type}</p>
      </div>

      <div className="right-panel">
        <label htmlFor="model-select">Select Model:</label>
        <select
          id="model-select"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="iPhone">iPhone</option>
          <option value="Samsung">Samsung</option>
        </select>

        <label htmlFor="image-upload">Upload Image:</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {uploadedImage && (
          <div className="preview-container">
            <h3>Preview:</h3>
            <div className="case-preview">
              <img src="/phoneCaseMock.png" alt="Phone Case" className="case-base" />
              <img src={uploadedImage} alt="Uploaded Design" className="case-overlay" />
            </div>
          </div>
        )}

        <button className="customize-button">Start Customizing</button>
      </div>
    </div>
  );
};

export default ProductDetail;
