import { memo, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDescription.css";
import productImage from "../../images/productDemoImg.png";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import { useParams } from "react-router";
import ApiService from "../../services/api_services";
import { Link } from "react-router-dom";

const ProductDescription = memo((props) => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (getProduct) {
      getProduct();
    }
  }, []);

  const getProduct = () => {
    ApiService.GET("/products/", { skip: id - 1, limit: 1 })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <div className="containerProductDescription">
        <div className="breadCrumbProductDescription">
          <Link to={"/catalog"}>Meat</Link> <span>|</span> <Link to={"/catalog"}>Pork</Link>
        </div>
        {data ? (
          <div className="itemDescriptionContainer">
            <div className="productImageContainer">
              <div className="allSubProductImage">
                <img className="subProductImage" src={data[0]?.product_image ?? productImage} alt="" />
                <img className="subProductImage" src={data[0]?.product_image ?? productImage} alt="" />
                <img className="subProductImage" src={data[0]?.product_image ?? productImage} alt="" />
              </div>
              <img className="productImage" src={data[0]?.product_image ?? productImage} alt="product" />
            </div>
            <div className="itemDetails">
              <p className="brandName">Brand</p>
              <p className="productName">{data[0]?.product_name ?? "N/A"}</p>
              <div className="lineProductDescription"></div>
              <p className="memberPrice">Member Price</p>
              <p className="price">${data[0]?.price ?? "N/A"}/ ea</p>
              <p className="available">{data[0]?.inventory_count !== 0 ? "In Stock" : "Out of stock"}</p>
              <AddToCartButton product={data[0]}></AddToCartButton>
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
        ) : (
          <div className="noProduct">The product is not available.</div>
        )}

        <div className="productInfo">
          <b>Details</b>
          <hr />
          {data ? <p className="description">{data[0]?.description ?? "N/A"}</p> : "N/A"}
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default ProductDescription;
