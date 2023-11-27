import React from 'react';
import { Link } from 'react-router-dom';
import './ProductTile.css';

const ProductTile = ({ product }) => {
  const productLink = `/products/${product.product_id}`;

  return (
    <Link to={productLink} className="productTileLink">
    <div className="productTile">
      <img src={product.main_image_url} alt={product.product_name} className='productImage' />
      <div className='info-container'>
        <h3 className="productName">{product.product_name}</h3>
        <p className="productPrice">${product.price}</p>
        {product.inventory_count < 25 && <p className="lowStock">Low Stock</p>}
        <button className="addToCart">Add To Cart</button>
      </div>
    </div>
    </Link>
  )
};

export default ProductTile;