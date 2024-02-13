import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

function ProductPage({data}) {
    const { productName } = useParams();
  const product = data.productl.find((p) => p.productName === productName);
  
  if (!product) {
    // Eğer ürün bulunamazsa, burada bir hata mesajı veya yönlendirme yapabilirsiniz.
    return <div>Ürün bulunamadı</div>;
  }
  
  const {
    productName: productNameFromData,
    productImage,
    department,
    price,
    discountedPrice,
    badges,
  } = product;
  
  return (
    
    <div className="flex justify-start w-[85%] mx-auto">
      <div className="flex mt-1 gap-2">
        <h6>Home</h6>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-priceGray mt-0.5"
        />
        <h6 className="text-priceGray">Shop</h6>
      </div>
      <div>
      <h1>{productNameFromData}</h1>
      <img
        src={productImage}
        alt={productNameFromData}
      />
      <p>Department: {department}</p>
      <div>
        <p>Price: {price}</p>
        <p>Discounted Price: {discountedPrice}</p>
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
  );
}

export default ProductPage;
