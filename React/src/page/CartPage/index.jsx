import { memo, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CartPage.css";
import productImage from "../../images/productDemoImg.png";
import AddToCartButton from "../../components/AddToCartButton/AddToCart";
import { useParams } from "react-router";
import ApiService from "../../services/api_services";
import { Link, useNavigate } from "react-router-dom";

const Cart = memo((props) => {
  const navigate = useNavigate();
  // const { id } = useParams();
  // const [data, setData] = useState(null);

  const cart = JSON.parse(localStorage.getItem("cart"));

  const handleClearCart = () => {
    console.log("Clear Cart");
  };
  const handleSubtractAmount = () => {
    console.log("Subtract");
  };

  const handleAddAmount = () => {
    console.log("Add");
  };
  const handleDeleteItem = () => {
    console.log("Delete");
  };

  return (
    <div>
      <Header />
      <div className="cartContainer">
        <div className="cartTitle">Grocery Cart</div>
        <div className="cartInfoContainer">
          <div className="cartProduct">
            <div className="line1"></div>
            <div className="clearCartButton" onClick={handleClearCart}>
              Clear cart
            </div>
            <div className="line2"> </div>
            <div className="cartProductInfoContainer">
              <div className="cartProductInfo">
                <img className="cartProductImage" src={productImage} alt="product" />
                <div className="cartProductDescription">
                  <div>Product Name</div>
                  <div>Brand</div>
                  <div className="cartAmount">
                    <div className="cartAmountAdjust">
                      <span className="adjustAmount" onClick={handleSubtractAmount}>
                        -
                      </span>
                      1
                      <span className="adjustAmount" onClick={handleAddAmount}>
                        +
                      </span>
                    </div>
                    <div className="itemDeleteButton" onClick={handleDeleteItem}>
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cartInformation">
            <div className="cartInfoLine">
              <div>Total Items</div>
              <div>1</div>
            </div>
            <div className="cartInfoLine">
              <div>Total Saving</div>
              <div>$1</div>
            </div>
            <div className="cartInfoLine">
              <div>Subtotal</div>
              <div>$10.32</div>
            </div>
            <button className="cartCheckOutBtn">Check out</button>
            <div className="cartLower">
              <b>or</b>
              <div
                className="continueBtn"
                onClick={() => {
                  navigate("/catalog");
                }}
              >
                Continue Shopping with us
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default Cart;
