import { memo } from "react";
import "./AddToCart.css";
const AddToCartButton = memo(({ product }) => {
  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart"));
    const isExistingInCart = currentCart?.find((item) => item.product_id === product.product_id);

    if (isExistingInCart) {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          currentCart.map((item) => {
            if (item.id === product.id) {
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
    // // Get the current cart from localStorage
    // const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // // Check if the product is already in the cart
    // const existingProductIndex = cart.findIndex((item) => {
    //   // If the cart item is a string, parse it; otherwise, use it as is
    //   const cartItem = typeof item === "string" ? JSON.parse(item) : item;

    //   // Compare the product id with the cart item id
    //   return cartItem.product_id === product?.product_id;
    // });

    // if (existingProductIndex !== -1) {
    //   // If the product is already in the cart, update the quantity
    //   const existingProduct = JSON.parse(cart[existingProductIndex]);
    //   existingProduct.quantity++;
    //   cart[existingProductIndex] = JSON.stringify(existingProduct);
    // } else {
    //   // If the product is not in the cart, add it
    //   // Create a new product object with a quantity property
    //   const productWithQuantity = { ...product, quantity: 1 };
    //   cart.push(productWithQuantity);
    // }

    // // Store the updated cart back in localStorage
    // localStorage.setItem("cart", JSON.stringify(cart));

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
