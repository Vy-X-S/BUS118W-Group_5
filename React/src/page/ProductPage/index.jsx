import { memo, useEffect, useState } from "react";
import "./ProductPage.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import productImage from "../../images/productDemoImg.png";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import ApiService from "../../services/api_services";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const ProductPage = memo(() => {
  const [category, setCategory] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(1000);
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    ApiService.GET("/products/", { skip: 0, limit: 100 })
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  const handleCatChange = (e) => {
    setCategory(e?.target?.value);
    console.log("Category Change");
  };

  return (
    <div>
      <Header />
      <div className="containerProductPage">
        <div className="catBar">
          <div className="category" onClick={handleCatChange} value={3}>
            Bread and Bakery
          </div>
          <div className="category" onClick={handleCatChange} value={0}>
            Fruits
          </div>
          <div className="category" onClick={handleCatChange} value={0}>
            Frozen Food
          </div>
          <div className="category" onClick={handleCatChange} value={1}>
            Meat
          </div>
          <div className="category" onClick={handleCatChange} value={0}>
            Vegetables
          </div>
        </div>
        <div className="productContainer">
          <div className="productBreadCrumb">
            <div className="mainCat">Meat</div>
            <div className="line"></div>
            <div className="subCat">Pork</div>
          </div>
          {isLoading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <div className="itemListContainer">
              {data?.map((item, key) => {
                return (
                  <ItemContainer
                    key={key}
                    product={item}
                    id={item?.product_id}
                    image={productImage}
                    productName={item?.product_name}
                    price={item?.price}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
});
export default ProductPage;
