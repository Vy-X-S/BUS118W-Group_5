import { memo } from "react";
import "./AddToCart.css";
const AddToCartButton = memo((product) => {
  const handleAddToCart = () => {
    // Get the current cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      cart[existingProductIndex].quantity++;
    } else {
      // If the product is not in the cart, add it
      cart.push(product);
    }

    // Store the updated cart back in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the UI (you can implement your own logic here)
    // updateCartUI();
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
