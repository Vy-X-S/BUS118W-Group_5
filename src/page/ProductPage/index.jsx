import { memo, useState } from "react";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import productImage from "../../images/productDemoImg.png";

const ProductPage = memo(() => {

  const [cate,setCate]= useState(null);

  const getData = ()=>{
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="catBar">
          <input placeholder="Search"></input>
          <button>Bread and Bakery</button>
          <button>Fruits</button>
          <button>Frozen Food</button>
          <button>Meat</button>
          <button>Vegetables</button>
        </div>
        <div className="productContainer">
          <div className="productCat">
            <div className="mainCat">Meat</div>
            <div className="line"></div>
            <div className="subCat">Pork</div>
          </div>
          <div className="itemListContainer">
            <div className="item">
              <img className="productImg" src={productImage} alt="product" />
              <p className="productName">Sargento Natural String Cheese Snacks, 12-Count</p>
              <p className="review"> 321 reviews</p>
              <p className="price">$ 9.99</p>
              <button className="addToCartButton">Add to Cart</button>
            </div>
            <div className="item">
              <img className="productImg" src={productImage} alt="product" />
              <p className="productName">Sargento Natural String Cheese Snacks, 12-Count</p>
              <p className="review"> 321 reviews</p>
              <p className="price">$ 9.99</p>
              <button className="addToCartButton">Add to Cart</button>
            </div>
            <div className="item">
              <img className="productImg" src={productImage} alt="product" />
              <p className="productName">Sargento Natural String Cheese Snacks, 12-Count</p>
              <p className="review"> 321 reviews</p>
              <p className="price">$ 9.99</p>
              <button className="addToCartButton">Add to Cart</button>
            </div>
            <div className="item">
              <img className="productImg" src={productImage} alt="product" />
              <p className="productName">Sargento Natural String Cheese Snacks, 12-Count</p>
              <p className="review"> 321 reviews</p>
              <p className="price">$ 9.99</p>
              <button className="addToCartButton">Add to Cart</button>
            </div>
            <div className="item">
              <img className="productImg" src={productImage} alt="product" />
              <p className="productName">Sargento Natural String Cheese Snacks, 12-Count</p>
              <p className="review"> 321 reviews</p>
              <p className="price">$ 9.99</p>
              <button className="addToCartButton">Add to Cart</button>
            </div>
            <div className="item">
              <img className="productImg" src={productImage} alt="product" />
              <p className="productName">Sargento Natural String Cheese Snacks, 12-Count</p>
              <p className="review"> 321 reviews</p>
              <p className="price">$ 9.99</p>
              <button className="addToCartButton">Add to Cart</button>
            </div>
            <div className="item">
              <img className="productImg" src={productImage} alt="product" />
              <p className="productName">Sargento Natural String Cheese Snacks, 12-Count</p>
              <p className="review"> 321 reviews</p>
              <p className="price">$ 9.99</p>
              <button className="addToCartButton">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});
export default ProductPage;
