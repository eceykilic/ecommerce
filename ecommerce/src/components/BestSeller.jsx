import ProductCard from "./ProductCard";

const badgesTypes = ["./product-card/Ellipse 14.png", "./product-card/Ellipse 15.png", "./product-card/Ellipse 16.png", "./product-card/Ellipse 17.png"]


const bestSeller = [
  {
    productImage: "./product-card/product1.jpg",
    productName: "Product 1",
    department: "Department 1",
    price: "$19.99",
    discountedPrice: "$14.99",
    badges: badgesTypes,
  },
  {
    productImage: "./product-card/product2.jpg",
    productName: "Product 2",
    department: "Department 2",
    price: "$24.99",
    discountedPrice: "$19.99",
    badges: badgesTypes,
  },
  {
    productImage: "./product-card/product3.jpg",
    productName: "Product 2",
    department: "Department 2",
    price: "$24.99",
    discountedPrice: "$19.99",
    badges: badgesTypes,
  },
  {
    productImage: "./product-card/product4.jpg",
    productName: "Product 2",
    department: "Department 2",
    price: "$24.99",
    discountedPrice: "$19.99",
    badges: badgesTypes,
  },
  {
    productImage: "./product-card/product5.jpg",
    productName: "Product 2",
    department: "Department 2",
    price: "$24.99",
    discountedPrice: "$19.99",
    badges: badgesTypes,
  },
  {
    productImage: "./product-card/product6.jpg",
    productName: "Product 2",
    department: "Department 2",
    price: "$24.99",
    discountedPrice: "$19.99",
    badges: badgesTypes,
  },
  {
    productImage: "./product-card/product7.jpg",
    productName: "Product 2",
    department: "Department 2",
    price: "$24.99",
    discountedPrice: "$19.99",
    badges: badgesTypes,
  },
  {
    productImage: "./product-card/product8.jpg",
    productName: "Product 2",
    department: "Department 2",
    price: "$24.99",
    discountedPrice: "$19.99",
    badges: badgesTypes,
  },

];

export default function BestSeller() {
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
          <div key={groupIndex} className="flex justify-between w-[85%] mx-auto mt-2">
            {group.map((product, index) => (
              <ProductCard
                key={index}
                productImage={product.productImage}
                productName={product.productName}
                department={product.department}
                price={product.price}
                discountedPrice={product.discountedPrice}
                badges={product.badges}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
