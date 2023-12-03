import { memo } from "react";
import "./ItemContainer.css";
import { Link, useNavigate } from "react-router-dom";

const ItemContainer = memo((props) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // props.addToCart(props)
    console.log("Add to Cart");
  };

  const handleOnClick = () => {
    navigate(`/product/${props.id}/description`);
  };
  return (
    <div className="item" onClick={handleOnClick}>
      <img className="productImg" src={props.image} alt="product" />
      <p className="productName">{props.productName}</p>
      <p className="review"> {props.review} reviews</p>
      <p className="price">$ {props.price}</p>
      <button
        className="addToCartButton"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
});

export default ItemContainer;
