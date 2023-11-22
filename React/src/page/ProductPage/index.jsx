import { memo, useCallback, useEffect, useState } from "react";
import "./ProductPage.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import productImage from "../../images/productDemoImg.png";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
// import ApiService from "../../services/api_services";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import dataSet from "../../dataSet/dataSet";
import { useNavigate, useParams } from "react-router-dom";

const ProductPage = memo(() => {
  const { category } = useParams();
  console.log(category);
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState(category);
  console.log(categoryId);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const meatItems = dataSet?.filter((items) => items.category_id === 1);
  const vegItems = dataSet?.filter((items) => items.category_id === 2);
  const breadItems = dataSet?.filter((items) => items.category_id === 3);
  const frozenItems = dataSet?.filter((items) => items.category_id === 4);

  useEffect(() => {
    // setTimeout(1000);
    // getData();
    setIsLoading(true);
    handleCatChange();
  }, [categoryId, category, handleCatChange]);

  // const getData = () => {
  //   setIsLoading(true);
  //   ApiService.GET("/products/", { skip: 0, limit: 100 })
  //     .then((response) => {
  //       setData(response);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // };

  const handleCatChange = useCallback(() => {
    setIsLoading(true);
    switch (categoryId) {
      case 1:
        setData(meatItems);
        break;
      case 2:
        setData(vegItems);
        break;
      case 3:
        setData(breadItems);
        break;
      case 4:
        setData(frozenItems);
        break;
      default:
        setData(dataSet);
    }
    navigate(`/product/${categoryId}`);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <Header />
      <div className="containerProductPage">
        <div className="catBar">
          <div
            className="category"
            onClick={() => {
              setCategoryId(0);
            }}
          >
            All
          </div>
          <div
            className="category"
            onClick={() => {
              // setIsLoading(true);
              setCategoryId(3);
              // setTimeout(2000);
              // setIsLoading(false);
            }}
          >
            Bread and Bakery
          </div>
          <div
            className="category"
            onClick={() => {
              setCategoryId(4);
            }}
          >
            Frozen Food
          </div>
          <div
            className="category"
            onClick={() => {
              setCategoryId(1);
            }}
          >
            Meat
          </div>
          <div
            className="category"
            onClick={() => {
              setCategoryId(2);
            }}
          >
            Vegetables
          </div>
        </div>
        <div className="productContainer">
          <div className="productBreadCrumb">
            <div className="mainCat">
              {categoryId === 1
                ? "Meat"
                : categoryId === 2
                ? "Vegetables"
                : categoryId === 3
                ? "Bread and Bakery"
                : categoryId === 4
                ? "Frozen Food"
                : "All"}
            </div>
            {/* <div className="line"></div>
            <div className="subCat">Pork</div> */}
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
                    image={item?.product_image ?? productImage}
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
