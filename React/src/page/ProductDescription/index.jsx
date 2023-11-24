import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDescription.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDescription = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${productId}`);
        setProductDetails(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!productDetails) return <div>Product not found</div>;

  const { product, images, nutrition } = productDetails;

  return (
    <div>
      <Header />
      <div className="containerProductDescription">
        <div className="breadCrumbProductDescription">{/* Add breadcrumb logic here */}</div>
        <div className="itemDescriptionContainer">
          {images.length > 0 && (
            <img className="productImage" src={images[0].image_URL} alt={product.product_name} />
          )}
          <div className="itemDetails">
            <p className="brandName">{/* Brand logic here, if applicable */}</p>
            <p className="productName">{product.product_name}</p>
            <div className="lineProductDescription"></div>
            <p className="memberPrice">{/* Member price logic here, if applicable */}</p>
            <p className="price">${product.price}</p>
            <p className="available">{product.inventory_count > 0 ? "In Stock" : "Out of Stock"}</p>
            <button className="addToCartButton">Add To Cart</button>
            <div className="deliOptions">
              <div>Pick up</div>
              <div>Delivery</div>
            </div>
            <div className="nutritionInfo">
              <p>{nutrition.serve_size} Servings per container</p>
              <div className="nutritionDetail">
                <div>
                  <p>{nutrition.calories}</p>
                  <p>Calories</p>
                </div>
                <div>
                  <p>{nutrition.protein}g</p>
                  <p>Protein</p>
                </div>
                <div>
                  <p>{nutrition.sodium}mg</p>
                  <p>Sodium</p>
                </div>
                <div>
                  <p>{nutrition.fiber}g</p>
                  <p>Fiber</p>
                </div>
                <div>
                  <p>{nutrition.sugar}g</p>
                  <p>Sugars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productInfo">{product.description}</div>
      </div>
      <Footer />
    </div>
  );

  
};

export default ProductDescription;

