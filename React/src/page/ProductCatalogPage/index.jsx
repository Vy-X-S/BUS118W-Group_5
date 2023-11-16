import { memo, useEffect, useState } from "react";
import "./ProductCatalog.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import productImage from "../../images/productDemoImg.png";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import { useParams } from "react-router";
import ApiService from "../../services/api_services";

const ProductPage = memo(() => {
  const { category } = useParams();
  const [cate, setCate] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    ApiService.GET("/products/")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCatChange = () => {};

  return (
    <div>
      <Header />
      <div className="containerProductCatalog">
        <div className="catBar">
          <div className="category" onClick={handleCatChange}>
            Bread and Bakery
          </div>
          <div className="category" onClick={handleCatChange}>
            Fruits
          </div>
          <div className="category" onClick={handleCatChange}>
            Frozen Food
          </div>
          <div className="category" onClick={handleCatChange}>
            Meat
          </div>
          <div className="category" onClick={handleCatChange}>
            Vegetables
          </div>
        </div>
        <div className="categoryListContainer">
          <div className="categoryContainer">
            <p className="categoryTitle">Meat</p>
            {data ? (
              <div className="itemList">
                {data?.slice(0, 4).map((item, key) => {
                  console.log("Item:", item);
                  return item?.category_id === 1 ? (
                    <ItemContainer id={item?.product_id} key={key} image={productImage} productName={item?.product_name} price={item?.price} />
                  ) : null;
                })}
              </div>
            ) : (
              <div>No product available.</div>
            )}
          </div>
          <div className="categoryContainer">
            <p className="categoryTitle">Cate</p>
            <div className="itemList">
              <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" price="9.99" />
              <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" price="9.99" />
              <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" price="9.99" />
              <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" price="9.99" />
            </div>
          </div>
          <div className="categoryContainer">
            <p className="categoryTitle">Cate</p>
            <div className="itemList">
              <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" price="9.99" />
              <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" price="9.99" />
              <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" price="9.99" />
              <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" price="9.99" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});
export default ProductPage;
