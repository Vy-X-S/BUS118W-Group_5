import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './page/HomePage';
import ProductCatalogPage from './page/ProductCatalogPage';
import SubcategoryPage from './page/SubcategoryPage';
import ProductDescription from './page/ProductDescription';
import AboutPage from './page/AboutPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/catalog" element={<ProductCatalogPage />} />
        <Route path="/categories/:categoryId" element={<SubcategoryPage />} />
        <Route path="/products/:productId" element={<ProductDescription />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
