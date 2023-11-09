import { memo } from "react";
import "./ItemContainer.css";
import { Link } from "react-router-dom";

const ItemContainer = memo((props) => {
  const handleAddToCart = () => {
    // props.addToCart(props)
    console.log('Add to Cart');
  };

  const handleOnClick = ()=>{
    <Link to={`/product/${props.id}/description`}></Link>
  }
  return (
    <div className="item" onClick={handleOnClick}>
      <img className="productImg" src={props.image} alt="product" />
      <p className="productName">{props.productName}</p>
      <p className="review"> {props.review} reviews</p>
      <p className="price">$ {props.price}</p>
      <button className="addToCartButton" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
});

export default ItemContainer;
