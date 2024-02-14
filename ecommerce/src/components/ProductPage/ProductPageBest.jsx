import React from "react";
import ProductCard from "../Repetitive/ProductCard";
import { data } from "../../data/data";

export default function ProductPageBest() {
  const bestSellerProducts = data.productl.filter(
    (product) => product.category === "bestSeller"
  );

  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  // 4'erli gruplar halindeki ürünleri render etme
  const renderProductGroups = () => {
    const productGroups = chunkArray(bestSellerProducts, 4);

    return productGroups.map((group, index) => ( 
      <div key={index} className="flex justify-center items-center gap-3 mb-16 mt-2">
        {group.map((product) => (
          <ProductCard
            key={product.productName}
            productImage={product.productImage}
            productName={product.productName}
            department={product.department}
            price={product.price}
            discountedPrice={product.discountedPrice}
            badges={product.badges}
            customImageSize="w-[240px] h-[280px]"
            showBadges={false}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="bg-lightbg pt-5"> 
      <div className="w-[85%] mx-auto">
        <h3 className="font-monster text-darkText font-bold mb-4">
          BESTSELLER PRODUCTS
        </h3>
        <hr className="mb-4" />
      </div>
      <div className="flex flex-col">{renderProductGroups()}</div>
    </div>
  );
}
