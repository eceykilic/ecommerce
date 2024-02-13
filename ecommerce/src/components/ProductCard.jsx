export default function ProductCard({ productImage, productName, department, price, discountedPrice, badges }) {
  return (
    <div className="flex justify-center items-center gap-8 mb-12">
      <div className="h-[615px] w-[240px] text-center flex flex-col gap-1">
        <img src={productImage} alt="" className="object-cover overflow-hidden h-[430px] w-[240px]" />
        <div className="mt-4 flex flex-col items-center">
          <h5 className="text-base font-bold text-darkText">{productName}</h5>
          <p className="text-sm font-bold text-lighterDark">{department}</p>
          <div className="flex gap-2">
            <h5 className="text-priceGray text-base">{price}</h5>
            <h5 className="text-priceGreen text-base">{discountedPrice}</h5>
          </div>
          <div className="flex gap-1 mt-2">
            {badges.map((badge, index) => (
              <img key={index} src={badge} alt={`Badge ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
