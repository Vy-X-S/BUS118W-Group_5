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
          <img className="productImage" src={productImage} alt="product" />
          <div className="itemDetails">
            <p className="brandName">Brand</p>
            <p className="productName">Name</p>
            <div className="lineProductDescription"></div>
            <p className="memberPrice">Member Price</p>
            <p className="price">$5.49/ ea</p>
            <p className="available">In Stock</p>
            <button className="addToCartButton">Add To Cart</button>
            <div className="deliOptions">
              <div className="option">
                Pick up <span className="status">available</span>
              </div>
              <div className="option">
                Delivery <span className="status">available</span>
              </div>
            </div>
            <p className="nutritionTitle">Nutrition Information</p>
            <hr />
            <div className="nutritionInfo">
              <p>15.0 Servings per container | 2bsp (30g)</p>
              <div className="nutritionDetail">
                <div className="macro">
                  <b>10</b>
                  <p>Calories</p>
                </div>
                <div className="macro">
                  <b>0g</b>
                  <p>Protein</p>
                </div>
                <div className="macro">
                  <b>140mg</b>
                  <p>Sodium</p>
                </div>
                <div className="macro">
                  <b>1g</b>
                  <p>Fiber</p>
                </div>
                <div className="macro">
                  <b>0.99g</b>
                  <p>Sugars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productInfo">
          <p>Details</p>
          <hr />
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default ProductDescription;
