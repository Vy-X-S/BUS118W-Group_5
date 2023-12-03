import { memo } from "react";
import "./AddToCartButton.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartButton = memo(({ product }) => {
  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const isExistingInCart = currentCart?.find((item) => item.product_id === product.product_id);

    if (isExistingInCart) {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          currentCart.map((item) => {
            if (item.product_id === product.product_id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          })
        )
      );
    } else {
      localStorage.setItem("cart", JSON.stringify(currentCart ? [...currentCart, { ...product, quantity: 1 }] : [{ ...product, quantity: 1 }]));
    }
    updateUI();
  };

  const updateUI = () => {
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log("toast");
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
