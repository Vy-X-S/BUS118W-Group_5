import { memo, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDescription.css";
import productImage from "../../images/productDemoImg.png";
import AddToCartButton from "../../components/AddToCartButton/AddToCart";
import { useParams } from "react-router";
import ApiService from "../../services/api_services";
import { Link } from "react-router-dom";

const ProductDescription = memo((props) => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const getData = () => {
    ApiService.GET("/products/")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="containerProductDescription">
        <div className="breadCrumbProductDescription">
          <Link to={"/catalog"}>Meat</Link> <span>|</span> <Link to={"/catalog"}>Pork</Link>
        </div>
        <div className="itemDescriptionContainer">
          <div className="productImageContainer">
            <div className="allSubProductImage">
              <img className="subProductImage" src={productImage} alt="" />
              <img className="subProductImage" src={productImage} alt="" />
              <img className="subProductImage" src={productImage} alt="" />
            </div>
            <img className="productImage" src={productImage} alt="product" />
          </div>
          <div className="itemDetails">
            <p className="brandName">Brand</p>
            <p className="productName">Name</p>
            <div className="lineProductDescription"></div>
            <p className="memberPrice">Member Price</p>
            <p className="price">$5.49/ ea</p>
            <p className="available">In Stock</p>
            <AddToCartButton></AddToCartButton>
            <div className="deliOptions">
              <div className="option">
                Pick up <span className="status">available</span>
              </div>
              <div className="option">
                Delivery <span className="status">available</span>
              </div>
            </div>
            <p className="nutritionTitle">Nutrition Information</p>
            <hr />
            <div className="nutritionInfo">
              <p>15.0 Servings per container | 2bsp (30g)</p>
              <div className="nutritionDetail">
                <div className="macro">
                  <b>10</b>
                  <p>Calories</p>
                </div>
                <div className="macro">
                  <b>0g</b>
                  <p>Protein</p>
                </div>
                <div className="macro">
                  <b>140mg</b>
                  <p>Sodium</p>
                </div>
                <div className="macro">
                  <b>1g</b>
                  <p>Fiber</p>
                </div>
                <div className="macro">
                  <b>0.99g</b>
                  <p>Sugars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productInfo">
          <b>Details</b>
          <hr />
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati,
            iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati, iusto eaque saepe numquam quaerat quae magni, libero
            porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa
            accusantium nostrum obcaecati, iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati, iusto eaque saepe numquam
            quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque
            tenetur sit soluta culpa accusantium nostrum obcaecati, iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis
            earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum
            obcaecati, iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Totam commodi itaque tenetur sit soluta culpa accusantium nostrum obcaecati, iusto eaque saepe numquam quaerat quae
            magni, libero porro quis perspiciatis earum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi itaque tenetur sit
            soluta culpa accusantium nostrum obcaecati, iusto eaque saepe numquam quaerat quae magni, libero porro quis perspiciatis earum!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default ProductDescription;
