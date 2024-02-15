import { faBorderAll, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "../Repetitive/ProductCard";
import Brands from "../Repetitive/Brands";

import { data } from "../../data/data"

export default function ProductCards() {
  const productl = data.productl.filter(product => product.category === "productList");
  const groupedpl = productl.reduce((acc, product, index) => {
    const groupIndex = Math.floor(index / 4);

    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }

    acc[groupIndex].push(product);

    return acc;
  }, []);

  return (
    <div>
      <div className="mt-5">
        <div className="flex max-w-screen-2xl justify-between mx-auto mb-10">
          <p className="text-lighterDark font-bold pt-2">
            Showing all 12 results
          </p>
          <div className="flex gap-2">
            <p className="text-lighterDark text-sm font-bold leading-normal tracking-tight pt-2">
              Views:
            </p>
            <FontAwesomeIcon
              icon={faBorderAll}
              className="text-darkText p-2 border rounded cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faListCheck}
              className="text-darkText p-2 border rounded cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-3">
            <form className="flex items-center gap-3">
              <select className="select w-full text-sm leading-normal tracking-tight">
                <option
                  className="text-lighterDark text-sm leading-normal tracking-tight"
                  value=""
                >
                  Popularity
                </option>
                <option
                  className="text-lighterDark text-sm font-semibold leading-normal tracking-tight"
                  value=""
                >
                  Highest Price
                </option>
                <option
                  className="text-lighterDark text-sm font-semibold leading-normal tracking-tight"
                  value=""
                >
                  Lowest Price
                </option>
                <option
                  className="text-lighterDark text-sm font-semibold leading-normal tracking-tight"
                  value=""
                >
                  Lowest Rating
                </option>
                <option
                  className="text-lighterDark text-sm font-semibold leading-normal tracking-tight"
                  value=""
                >
                  Highest Rating
                </option>
              </select>
              <button
                type="submit"
                className="bg-navBlue px-4 py-2 text-white text-sm font-bold leading-normal tracking-tight rounded"
              >
                {" "}
                Filter
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        {groupedpl.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex justify-between max-w-screen-2xl mx-auto mt-2 mb-20"
          >
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

      <div className="flex flex-row justify-center mb-10">
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] p-[2rem] select-none rounded-lg rounded-r-none border border-r-0 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <p className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-lighterDark">
            First
          </p>
        </button>
        <button
          className=" relative h-10 max-h-[40px] w-10 max-w-[40px] py-[2rem] select-none rounded-lg rounded-r-none rounded-l-none border border-r-0 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-navBlue">
            1
          </span>
        </button>
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] py-[2rem] select-none rounded-lg rounded-r-none rounded-l-none border border-r-0 border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-lightText bg-navBlue transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            2
          </span>
        </button>
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] py-[2rem] select-none rounded-lg rounded-r-none rounded-l-none border border-r-0 border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-navBlue">
            3
          </span>
        </button>
        <button
          className="relative max-h-[40px] w-10 max-w-[40px] select-none p-[2rem] rounded-lg rounded-l-none border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <p className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-navBlue">
            Next
          </p>
        </button>
      </div>
      <Brands />
    </div>
  );
}
