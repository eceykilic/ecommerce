import ProductCard from "../Repetitive/ProductCard";
import { data } from "../../data/data"

export default function BestSeller() {
  const bestSeller = data.productl.filter(product => product.category === "bestSeller");
  const groupedBestSeller = bestSeller.reduce((acc, product, index) => {
    const groupIndex = Math.floor(index / 4);

    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }

    acc[groupIndex].push(product);

    return acc;
  }, []);

  return (
    <div>
      <div className="flex mt-16 mb-8 text-center flex-col gap-3">
        <h2 className="text-lighterDark text-xl font-medium">Featured Products</h2>
        <h3 className="font-bold text-2xl sm:w-2/5 sm:mx-auto sm:py-2">BESTSELLER PRODUCTS</h3>
        <p className="text-lighterDark font-medium mb-12 sm:w-2/3 sm:mx-auto">
          Problems trying to resolve the conflict between
        </p>
        {groupedBestSeller.map((group, groupIndex) => (
          <div key={groupIndex} className="flex justify-between max-w-screen-2xl w-full mx-auto mt-2 mb-10 sm:flex-col sm:gap-10">
            {group.map((product, index) => (
              <ProductCard
                key={index}
                productImage={product.productImage}
                productName={product.productName}
                department={product.department}
                price={product.price}
                discountedPrice={product.discountedPrice}
                badges={product.badges}
                customImageSize="w-[240px] h-[430px] sm:w-[300px]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
