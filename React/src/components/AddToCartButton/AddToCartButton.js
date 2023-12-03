import { memo } from "react";
import "./AddToCartButton.css";
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
              console.log(item.quantity);
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          })
        )
      );
    } else {
      localStorage.setItem("cart", JSON.stringify(currentCart ? [...currentCart, { ...product, quantity: 1 }] : [{ ...product, quantity: 1 }]));
    }

    // // Update the UI (you can implement your own logic here)
    // // updateCartUI();
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
