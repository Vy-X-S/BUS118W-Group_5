import { memo, useEffect } from "react";
import "./ItemContainer.css";
import { Link, useHistory, useParams, useNavigate } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCart";
import ApiService from "../../services/api_services";

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
      <AddToCartButton></AddToCartButton>
    </div>
  );
});

export default ItemContainer;
