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
      <div className="flex mt-16 mb-8 font-monster text-center flex-col">
        <h2 className="text-lighterDark font-normal text-xl">Featured Products</h2>
        <h3 className="font-bold">BESTSELLER PRODUCTS</h3>
        <p className="text-lighterDark font-normal mb-12">
          Problems trying to resolve the conflict between
        </p>
        {groupedBestSeller.map((group, groupIndex) => (
          <div key={groupIndex} className="flex justify-between max-w-screen-2xl w-full mx-auto mt-2 mb-10">
            {group.map((product, index) => (
              <ProductCard
                key={index}
                productImage={product.productImage}
                productName={product.productName}
                department={product.department}
                price={product.price}
                discountedPrice={product.discountedPrice}
                badges={product.badges}
                customImageSize="w-[240px] h-[430px]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
