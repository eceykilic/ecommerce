import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CategoryCard () {
    return (
        <div className="bg-lightbg">
        <div className="pt-4">
            <div className="flex max-w-screen-2xl justify-between mx-auto sm:flex-col sm:text-center sm:justify-center sm:gap-10">
                <h2 className="text-darkText font-bold font-monster text-[24px] sm:pt-6">Shop</h2>
                <div className="flex gap-2 mt-1 sm:text-center sm:justify-center">
                    <h6 className="sm:font-bold">Home</h6>
                    <FontAwesomeIcon icon={faChevronRight} className="text-lighterDark mt-0.5" />
                    <h6 className="text-lighterDark sm:font-bold">Shop</h6>
                </div>
            </div>
        </div>
        <div className="flex justify-between max-w-screen-2xl mx-auto pt-4 pb-4 sm:pt-10 sm:flex-col sm:mx-auto sm:items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="relative sm:py-2">
        <img
          src={`./productlist/list${index + 1}.jpg`}
          alt={`List ${index + 1}`}
          className="object-cover overflow-hidden w-[200px] h-[220px] brightness-50 sm:w-96 sm:h-96"
        />
        <h6 className="absolute px-2.5 mx-auto left-16 top-24 font-bold leading-normal text-lightText sm:left-40 sm:top-44 sm:text-lg">
                  CLOTHS <br /> <br className="hidden sm:flex"/> 5 Items
        </h6>
      </div>   
      ))}
    </div>
    </div>
    )
}