import { memo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDescription.css";
const ProductDescription = memo(() => {
  return (
    <div>
      <Header />
      <div className="containerProductDescription">
        <div className="breadCrumbProductDescription">fdsafdsafsd</div>
        <div className="itemDescriptionContainer">
          <img src="" alt="Image" />
          <div className="itemDetails">
            <p>Brand</p>
            <p>Name</p>
            <div className="lineProductDescription"></div>
            <p>Member Price</p>
            <p>Price</p>
            <p>In Stock</p>
            <button>Add To Cart</button>
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
