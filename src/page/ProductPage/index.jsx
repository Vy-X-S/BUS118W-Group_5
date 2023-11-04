import { memo, useState } from "react";
import "./ProductPage.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import productImage from "../../images/productDemoImg.png";
import ItemContainer from "../../components/ItemContainer/ItemContainer";

const ProductPage = memo(() => {
  const [category, setCategory] = useState(null);

  const getData = () => {};
  const handleCatChange = (e) => {
    // setCategory(e.target?.value)
    console.log("Category Change")
  };

  return (
    <div>
      <Header />
      <div className="containerProductPage">
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
        <div className="productContainer">
          <div className="productBreadCrumb">
            <div className="mainCat">Meat</div>
            <div className="line"></div>
            <div className="subCat">Pork</div>
          </div>
          <div className="itemListContainer">
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
            <ItemContainer image={productImage} productName="Sargento Natural String Cheese Snacks, 12-Count" review="321" price="9.99" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});
export default ProductPage;
