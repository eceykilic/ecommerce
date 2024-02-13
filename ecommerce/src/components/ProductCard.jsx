import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({
  productImage,
  productName,
  department,
  price,
  discountedPrice,
  badges,
}) {
  return (
    <div className="flex justify-center items-center gap-8 mb-12">
      <div className="h-[615px] w-[240px] text-center flex flex-col gap-1">
        <Link to={`/product/${productName}`}>
          <img
            src={productImage}
            alt={productName}
            className="object-cover overflow-hidden w-[240px] h-[430px]"
          />
        </Link>
        <div className="mt-4 flex flex-col items-center">
          <h5 className="text-base font-bold text-darkText">{productName}</h5>
          <p className="text-sm font-bold text-lighterDark">{department}</p>
          <div className="flex gap-2">
            <h5 className="text-priceGray text-base">{price}</h5>
            <h5 className="text-priceGreen text-base">{discountedPrice}</h5>
          </div>
          {console.log("Badges:", badges)}
          <div className="flex gap-1 mt-2">
            {Array.isArray(badges) ? (
              badges.map((badgeItem, index) => (
                <img key={index} src={badgeItem} alt={`Badge ${index}`} />
              ))
            ) : (
              <div>No badges available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
