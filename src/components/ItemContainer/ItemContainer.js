import { memo } from "react";
import "./ItemContainer.css";
import { Link } from "react-router-dom";

const ItemContainer = memo((props) => {
  const handleAddToCart = () => {
    // props.addToCart(props)
    console.log("Add to Cart");
  };
  return (
    <div className="item">
      <Link className="linkTag" to={`/product/${props.id}/description`}>
        <img className="productImg" src={props.image} alt="product" />
        <p className="productName">{props.productName}</p>
        <p className="review"> {props.review} reviews</p>
        <p className="price">$ {props.price}</p>
      </Link>
      <button className="addToCartButton" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
});

export default ItemContainer;
