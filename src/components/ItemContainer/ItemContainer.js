import { memo } from "react";
import "./ItemContainer.css";
import { Link, useHistory, useParams, useNavigate } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCart";

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
      {/* <Link className="linkTag" to={`/product/${props.id}/description`}> */}
      <img className="productImg" src={props.image} alt="product" />
      <p className="productName">{props.productName}</p>
      <p className="review"> {props.review} reviews</p>
      <p className="price">$ {props.price}</p>
      {/* </Link> */}
      <AddToCartButton></AddToCartButton>
    </div>
  );
});

export default ItemContainer;
