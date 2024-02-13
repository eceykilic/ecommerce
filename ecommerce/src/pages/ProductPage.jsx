import React from "react";
import ProductDetail from "../components/ProductDetail";
import { data } from "../data/data";
import ProductDescription from "../components/ProductDescription";


function ProductPage() {
  

  return (
    <div>
      <ProductDetail data={data}/>
      <ProductDescription />
    </div>
  );
}

export default ProductPage;
