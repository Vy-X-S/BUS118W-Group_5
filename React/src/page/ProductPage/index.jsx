import { memo, useCallback, useEffect, useState } from "react";
import "./ProductPage.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import productImage from "../../images/productDemoImg.png";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import ApiService from "../../services/api_services";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
// import dataSet from "../../dataSet/dataSet";
import { useNavigate, useParams } from "react-router-dom";

const ProductPage = memo(() => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [categoryId, setCategoryId] = useState(category);
  const [data, setData] = useState(null);
  const [cateData, setCateData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCatChange = useCallback(() => {
    getData();
    navigate(`/product/${categoryId}`);
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
        setData(data);
    }
  }, []);

  console.log(data);
  useEffect(() => {
    getData();
  }, [categoryId]);

  const meatItems = data?.filter((items) => items.category_id === 1);
  const vegItems = data?.filter((items) => items.category_id === 2);
  const breadItems = data?.filter((items) => items.category_id === 3);
  console.log(breadItems);
  const frozenItems = data?.filter((items) => items.category_id === 4);

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
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [data]);

  return (
    <div>
      <Header />
      <div className="containerProductPage">
        <div className="catBar">
          <div
            className="category"
            onClick={() => {
              setCategoryId(0);
              handleCatChange();
            }}
          >
            All
          </div>
          <div
            className="category"
            onClick={() => {
              setCategoryId(3);
              handleCatChange();
            }}
          >
            Bread and Bakery
          </div>
          <div
            className="category"
            onClick={() => {
              setCategoryId(4);
              handleCatChange();
            }}
          >
            Frozen Food
          </div>
          <div
            className="category"
            onClick={() => {
              setCategoryId(1);
              handleCatChange();
            }}
          >
            Meat
          </div>
          <div
            className="category"
            onClick={() => {
              setCategoryId(2);
              handleCatChange();
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
