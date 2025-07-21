import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductDetail.css';
import Footer from './Footer';

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
    <>
      <div className="product-detail">
        <div className="panel left">
          <img src="/heroImage01.jpeg" alt={product.name} className="image" />
          <h1 className="title">{product.name}</h1>
          <p className="price">Price: ₹{product.price}</p>
          <p className="type">Type: {product.type}</p>
        </div>

        <div className="panel right">
          <label htmlFor="model">Select Model:</label>
          <select id="model" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
            <option value="iPhone">iPhone</option>
            <option value="Samsung">Samsung</option>
          </select>

          <label htmlFor="upload">Upload Image:</label>
          <input
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleImageUpload}
          />

          {uploadedImage && (
            <div className="preview">
              <h3>Preview:</h3>
              <div className="mockup">
                <img src="/phoneCaseMock.png" alt="Phone Case" className="base" />
                <img src={uploadedImage} alt="Design" className="overlay" />
              </div>
            </div>
          )}

          <button className="button">Start Customizing</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
