import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartProduct from "../../components/CartPage/CartProduct";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from LocalStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) ?? [];
    setCartItems(storedCartItems);
  }, []);

  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleSelectItem = (productID) => {
    setSelectedItems(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(productID)) {
        newSelected.delete(productID);
      } else {
        newSelected.add(productID);
      }
      return newSelected;
    });
  };

  const handleSelectAll = (selectAll) => {
    if (selectAll) {
      const allProductIds = new Set(cartItems.map(item => item.product_id));
      setSelectedItems(allProductIds);
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleDeleteSelected = () => {
    // Filter out items that are selected
    const newCartItems = cartItems.filter(item => !selectedItems.has(item.product_id));

    // Update the cartItems state
    setCartItems(newCartItems);

    // Clear the selection
    setSelectedItems(new Set());

    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const handleQuantityChange = (product, change) => {
    const updatedCart = cartItems.map((item) => {
      if (item.product_id === product.product_id) {
        return { ...item, quantity: item.quantity + change };
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDelete = (product) => {
    const updatedCart = cartItems.filter(item => item.product_id !== product.product_id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total cost and tax
  const totalCost = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = totalCost * 0.1; // Assume 10%


  return (
    <div className="body-container">
      <Header />

      <div className="primary-container">
        <div className="products-cart">
          <h2>Your Shopping Cart</h2>
          <div className="bulkSelector">
          <div className="checkbox-container">
            <input 
              type="checkbox" 
              checked={selectedItems.size === cartItems.length}
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
            <label>Select All</label>
          </div>
          <button 
            onClick={handleDeleteSelected}
            disabled={selectedItems.size === 0}
          >
          Delete Selected
          </button>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div className="item-container" key={item.product_id}>
                <input
                  type="checkbox"
                  checked={selectedItems.has(item.product_id)}
                  onChange={() => handleSelectItem(item.product_id)}
                />
                <CartProduct 
                  product={item} 
                  onQuantityChange={handleQuantityChange}
                  onDelete={handleDelete}
                />
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        <div className="details-summary">
          <p>Subtotal: <span>${totalCost.toFixed(2)}</span></p>
          <p>Tax: <span>${tax.toFixed(2)}</span></p>
          <p>Total: <span>${(totalCost + tax).toFixed(2)}</span></p>
          <div className="actions">
            <button className="checkout">Proceed to Checkout</button>
            <Link to={`/home`}><button className="return">Continue Shopping</button></Link>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
    
  );

};

export default CartPage;