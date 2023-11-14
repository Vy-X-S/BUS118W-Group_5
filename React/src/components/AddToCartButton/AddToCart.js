import { memo } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./AddToCart.css";
const AddToCartButton = memo((props) => {
  // const history =

  const handleAddToCart = () => {
    // props.addToCart(props)
    console.log("Add to Cart");
  };
  
  return (
    <button
      className="addToCartButton"
      onClick={(e) => {
        e.stopPropagation();
        handleAddToCart();
      }}
    >
      Add to Cart
    </button>
  );
});

export default AddToCartButton;
