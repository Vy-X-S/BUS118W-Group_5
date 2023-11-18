import { memo, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CartPage.css";
import productImage from "../../images/productDemoImg.png";
import { useNavigate } from "react-router-dom";

const Cart = memo((props) => {
  const navigate = useNavigate();
  // const { id } = useParams();
  // const [data, setData] = useState(null);
  const [isClearCart, setIsClearCart] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  useEffect(() => {}, [isClearCart]);

  const handleClearCart = () => {
    console.log("Clear Cart");
    // Clear the cart from local storage
    localStorage.clear();
    // Set the cart variable to an empty array
    setIsClearCart(true);
    console.log(cart);
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
              {cart ? (
                cart?.map((item, key) => (
                  <div key={key} className="cartProductInfo">
                    <img className="cartProductImage" src={productImage} alt="product" />
                    <div className="cartProductDescription">
                      <div>{item.product_name}</div>
                      <div>Brand</div>
                      <div className="cartAmount">
                        <div className="cartAmountAdjust">
                          <span className="adjustAmount" onClick={handleSubtractAmount}>
                            -
                          </span>
                          {item?.quantity}
                          {console.log(item?.quantity)}
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
                ))
              ) : (
                <div>There's no item in the cart.</div>
              )}
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
