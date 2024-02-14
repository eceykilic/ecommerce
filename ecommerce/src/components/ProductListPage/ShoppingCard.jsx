import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingCard () {
    return (
        <div className="bg-lightbg">
        <div className="pt-4">
            <div className="flex w-[70%] justify-between mx-auto">
                <h2 className="text-darkText font-bold font-monster text-[24px]">Shop</h2>
                <div className="flex gap-2 mt-1">
                    <h6>Home</h6>
                    <FontAwesomeIcon icon={faChevronRight} className="text-priceGray mt-0.5" />
                    <h6 className="text-priceGray">Shop</h6>
                </div>
            </div>
        </div>
        <div className="flex justify-between w-[70%] mx-auto pt-4 pb-4">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="relative">
        <img
          src={`./productlist/list${index + 1}.jpg`}
          alt={`List ${index + 1}`}
          className="object-cover overflow-hidden w-[200px] h-[220px] brightness-50"
        />
        <h6 className="absolute px-2.5 mx-auto left-16 top-24 font-bold leading-normal text-lightText">
                  CLOTHS <br /> 5 Items
        </h6>
      </div>   
      ))}
    </div>
    </div>
    )
}