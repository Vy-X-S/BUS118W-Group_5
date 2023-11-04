import { memo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDescription.css";
import productImage from "../../images/productDemoImg.png";

const ProductDescription = memo(() => {
  return (
    <div>
      <Header />
      <div className="containerProductDescription">
        <div className="breadCrumbProductDescription">fdsafdsafsd | fdsafdsjakl | fhjsdak</div>
        <div className="itemDescriptionContainer">
          <img className="productImage" src={productImage} alt="Image" />
          <div className="itemDetails">
            <p className="brandName">Brand</p>
            <p className="productName">Name</p>
            <div className="lineProductDescription"></div>
            <p className="memberPrice">Member Price</p>
            <p className="price">Price</p>
            <p className="available">In Stock</p>
            <button className="addToCartButton">Add To Cart</button>
            <div className="deliOptions">
              <div>Pick up</div>
              <div>Delivery</div>
            </div>
            <div className="nutritionInfo">
              <p>15.0 Servings per container | 2bsp (30g)</p>
              <div className="nutritionDetail">
                <div>
                  <p>10</p>
                  <p>Calories</p>
                </div>
                <div>
                  <p>0g</p>
                  <p>Protein</p>
                </div>
                <div>
                  <p>140mg</p>
                  <p>Sodium</p>
                </div>
                <div>
                  <p>1g</p>
                  <p>Fiber</p>
                </div>
                <div>
                  <p>0.99g</p>
                  <p>Sugars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productInfo">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati, iusto
          eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default ProductDescription;
