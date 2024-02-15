import React from "react";
import ProductDetail from "../components/ProductPage/ProductDetail";
import { data } from "../data/data";
import ProductDescription from "../components/ProductPage/ProductDescription";
import ProductPageBest from "../components/ProductPage/ProductPageBest";
import Brands from "../components/Repetitive/Brands";


function ProductPage() {
  

  return (
    <div>
      <ProductDetail data={data}/>
      <ProductDescription />
      <ProductPageBest />
      <Brands />
    </div>
  );
}

export default ProductPage;
