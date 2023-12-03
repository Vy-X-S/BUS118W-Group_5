import "./App.css";
import HomePage from "./page/HomePage";
import ProductPage from "./page/ProductPage";
import ProductCatalogPage from "./page/ProductCatalogPage";
import ProductDescription from "./page/ProductDescription";
import AboutPage from "./page/AboutPage";
import Cart from "./page/CartPage";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/catalog",
      element: <ProductCatalogPage />,
    },
    {
      path: "/product/:category",
      element: <ProductPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/product/:id/description",
      element: <ProductDescription />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
