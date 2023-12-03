import { memo } from "react";
import "./ItemContainer.css";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ItemContainer = memo((props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (props?.id) {
      navigate(`/product/${props?.id}/description`);
    }
  };

  return (
    <div className="item" onClick={handleOnClick}>
      <img className="productImg" src={props?.image} alt="product" />
      <p className="productName">{props?.productName}</p>
      <p className="price">$ {props?.price}</p>
      <AddToCartButton product={props.product}></AddToCartButton>
    </div>
  );
});

export default ItemContainer;
