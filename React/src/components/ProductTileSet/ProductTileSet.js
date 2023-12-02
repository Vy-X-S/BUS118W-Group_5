import React, { useState } from 'react';
import ProductTile from '../ProductTile/ProductTile';
import './ProductTileSet.css';

const ProductTileSet = ({ products }) => {
  const productsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = Math.ceil(products.length / productsPerPage) - 1;

  const handleNext = () => {
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const currentProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <div className="productTileSet">
      <button className='tile-pagination' onClick={handlePrev} disabled={currentPage === 0}>&lt;</button>
      <div className="productTiles">
        {currentProducts.map((product) => (
          <ProductTile key={product.product_id} product={product} />
        ))}
      </div>
      <button className='tile-pagination' onClick={handleNext} disabled={currentPage === maxPage}>&gt;</button>
    </div>
  );
};

export default ProductTileSet;