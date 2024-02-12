export default function ProductCard() {
    const productImages = [
      "./product-card/product1.jpg",
      "./product-card/product2.jpg",
      "./product-card/product3.jpg",
      "./product-card/product4.jpg",
      "./product-card/product5.jpg",
      "./product-card/product6.jpg",
      "./product-card/product7.jpg",
      "./product-card/product8.jpg",
      // ... Diğer resimler
    ];
  
    // Ürünleri 4'lü gruplara ayırma
    const groupedProducts = productImages.reduce((acc, image, index) => {
      const groupIndex = Math.floor(index / 4);
  
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
  
      acc[groupIndex].push(image);
  
      return acc;
    }, []);
  
    return (
      <div>
        <div className="mt-16 mb-12 font-monster text-center flex flex-col gap-2">
          <h2 className="text-lighterDark font-normal text-xl">Featured Products</h2>
          <h3 className="font-bold">BESTSELLER PRODUCTS</h3>
          <p className="text-lighterDark font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>
        {groupedProducts.map((group, groupIndex) => (
          <div key={groupIndex} className="flex justify-center items-center gap-8 mb-12">
            {group.map((image, index) => (
              <div key={index} className="h-[615px] w-[240px] text-center flex flex-col gap-1">
                <img src={image} alt="" className="object-cover overflow-hidden h-[430px] w-[240px]" />
                <div className="mt-4 flex flex-col items-center">
                  <h5 className="text-base font-bold text-darkText">Graphic Design</h5>
                  <p className="text-sm font-bold text-lighterDark">English Department</p>
                  <div className="flex gap-2">
                    <h5 className="text-priceGray text-base">$16.48</h5>
                    <h5 className="text-priceGreen text-base">$6.48</h5>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <img src="./product-card/Ellipse 14.png" alt="" />
                    <img src="./product-card/Ellipse 15.png" alt="" />
                    <img src="./product-card/Ellipse 16.png" alt="" />
                    <img src="./product-card/Ellipse 17.png" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  