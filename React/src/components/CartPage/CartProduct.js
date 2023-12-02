import React from 'react';
import { Link } from 'react-router-dom';
import './CartProduct.css';

const CartProduct = ({ product, onQuantityChange, onDelete }) => {
  const handleQuantityChange = (change) => {
      onQuantityChange(product, change);
  };

  const handleDelete = () => {
    onDelete(product);
  };

  return (
    <div className="cartProduct">
      <img src={product.main_image_url} alt={product.product_name} className="cartProductImage" />
      
      <div className="cartProductDetails">
        <Link to={`/products/${product.product_id}`} className='cartProductName'>
          <h3>{product.product_name}</h3>
        </Link>
        <div className="quantityControls">
          <button onClick={() => handleQuantityChange(-1)} disabled={product.quantity <= 1}>-</button>
          <span className="quantity">{product.quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
          <button className="deleteButton" onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <div className="cartProductPrice">
        ${product.price.toFixed(2)}
      </div>
    </div>
  );
};

export default CartProduct;