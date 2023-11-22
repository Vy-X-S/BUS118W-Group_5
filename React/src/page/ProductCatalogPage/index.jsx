import { memo, useEffect, useState } from "react";
import "./ProductCatalog.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import productImage from "../../images/productDemoImg.png";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import { useParams, useNavigate } from "react-router";
import ApiService from "../../services/api_services";
import dataSet from "../../dataSet/dataSet";

const ProductPage = memo(() => {
  const [data, setData] = useState(null);
  // const [categoryId, setCategoryId] = useState(null);
  const navigate = useNavigate();

  const meatItems = data?.filter((items) => items.category_id === 1);
  const vegItems = data?.filter((items) => items.category_id === 2);
  const breadItems = data?.filter((items) => items.category_id === 3);
  const frozenItems = data?.filter((items) => items.category_id === 4);

  useEffect(() => {
    // getData();
    setData(dataSet);
  }, []);

  // const getData = () => {
  //   ApiService.GET("/products/")
  //     .then((response) => {
  //       setData(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const handleCatChange = (category) => {
    navigate(`/product/${category}`);
  };

  return (
    <div>
      <Header />
      <div className="containerProductCatalog">
        <div className="catBar">
          <div
            className="category"
            onClick={() => {
              handleCatChange(0);
            }}
          >
            All
          </div>
          <div
            className="category"
            onClick={() => {
              handleCatChange(3);
            }}
          >
            Bread and Bakery
          </div>
          <div
            className="category"
            onClick={() => {
              handleCatChange(4);
            }}
          >
            Frozen Food
          </div>
          <div
            className="category"
            onClick={() => {
              handleCatChange(1);
            }}
          >
            Meat
          </div>
          <div
            className="category"
            onClick={() => {
              handleCatChange(2);
            }}
          >
            Vegetables
          </div>
        </div>
        <div className="categoryListContainer">
          <div className="categoryContainer">
            <p
              className="categoryTitle"
              onClick={() => {
                handleCatChange(1);
              }}
            >
              Meat
            </p>
            {data ? (
              <div className="itemList">
                {meatItems?.splice(0, 4).map((item, key) => {
                  return item?.category_id === 1 ? (
                    <ItemContainer
                      product={item}
                      id={item?.product_id}
                      key={key}
                      image={item?.product_image ?? productImage}
                      productName={item?.product_name}
                      price={item?.price}
                    />
                  ) : null;
                })}
              </div>
            ) : (
              <div>No product available.</div>
            )}
          </div>
          <div className="categoryContainer">
            <p
              className="categoryTitle"
              onClick={() => {
                handleCatChange(2);
              }}
            >
              Vegetables
            </p>
            {data ? (
              <div className="itemList">
                {vegItems?.splice(0, 4).map((item, key) => {
                  return item?.category_id === 2 ? (
                    <ItemContainer
                      product={item}
                      id={item?.product_id}
                      key={key}
                      image={item?.product_image ?? productImage}
                      productName={item?.product_name}
                      price={item?.price}
                    />
                  ) : null;
                })}
              </div>
            ) : (
              <div>No product available.</div>
            )}
          </div>
          <div className="categoryContainer">
            <p
              className="categoryTitle"
              onClick={() => {
                handleCatChange(3);
              }}
            >
              Bread and Bakery
            </p>
            {data ? (
              <div className="itemList">
                {breadItems?.splice(0, 4).map((item, key) => {
                  return item?.category_id === 3 ? (
                    <ItemContainer
                      product={item}
                      id={item?.product_id}
                      key={key}
                      image={item?.product_image ?? productImage}
                      productName={item?.product_name}
                      price={item?.price}
                    />
                  ) : null;
                })}
              </div>
            ) : (
              <div>No product available.</div>
            )}
          </div>
          <div className="categoryContainer">
            <p
              className="categoryTitle"
              onClick={() => {
                handleCatChange(4);
              }}
            >
              Frozen Food
            </p>
            {data ? (
              <div className="itemList">
                {frozenItems?.splice(0, 4).map((item, key) => {
                  return item?.category_id === 4 ? (
                    <ItemContainer
                      product={item}
                      id={item?.product_id}
                      key={key}
                      image={item?.product_image ?? productImage}
                      productName={item?.product_name}
                      price={item?.price}
                    />
                  ) : null;
                })}
              </div>
            ) : (
              <div>No product available.</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});
export default ProductPage;
