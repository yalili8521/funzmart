import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img src={product.img} alt={product.name} />
      </div>
      <h3 className="product-name">{product.name}</h3>
      <div className="product-price-badge">
        ${product.price.toFixed(2)} USD
      </div>
    </Link>
  );
};

export default ProductCard;