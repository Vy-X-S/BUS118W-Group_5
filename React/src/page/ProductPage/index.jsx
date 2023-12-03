import { memo, useEffect, useState } from "react";
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

  const [categoryId, setCategoryId] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // chay khi moi vao trang
  useEffect(() => {
    if (category) {
      getData(+category);
    }
    console.log(category);
  }, [category]);

  // chi chay khi Nguyen select category tu sidebar
  useEffect(() => {
    if (categoryId !== null && navigate) {
      navigate(`/product/${categoryId}`);
    }
  }, [categoryId, navigate]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [data]);

  const getData = (categoryId) => {
    setIsLoading(true);
    ApiService.GET("/products/", { skip: 0, limit: 100 })
      .then((response) => {
        setData(categoryId === 0 ? response : response?.filter((items) => items?.category_id === categoryId));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

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
              setCategoryId(2);
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
              setCategoryId(3);
            }}
          >
            Vegetables
          </div>
        </div>
        <div className="productContainer">
          <div className="productBreadCrumb">
            <div className="mainCat">
              {category === "1"
                ? "Meat"
                : category === "3"
                ? "Vegetables"
                : category === "2"
                ? "Bread and Bakery"
                : category === "4"
                ? "Frozen Food"
                : category === "0"
                ? "All"
                : ""}
            </div>
            {/* <div className="line"></div>
            <div className="subCat">Pork</div> */}
          </div>
          {isLoading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : data ? (
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
          ) : (
            "No product Available."
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
});
export default ProductPage;
