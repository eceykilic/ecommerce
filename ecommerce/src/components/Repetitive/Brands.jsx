import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAws,
    faHooli,
    faLyft,
    faPiedPiperHat,
    faRedditAlien,
    faStripe,
  } from "@fortawesome/free-brands-svg-icons";



export default function Brands() {
    return (
        <div className="bg-lightbg">
        <div className="flex justify-between mx-auto py-8 mb-0 pb-0 w-[85%]">
          <FontAwesomeIcon
            icon={faHooli}
            size="sm"
            className="text-lighterDark text-8xl"
          />
          <FontAwesomeIcon
            icon={faLyft}
            size="sm"
            className="text-lighterDark  text-8xl"
          />
          <FontAwesomeIcon
            icon={faPiedPiperHat}
            size="sm"
            className="text-lighterDark  text-8xl"
          />
          <FontAwesomeIcon
            icon={faStripe}
            size="sm"
            className="text-lighterDark text-8xl"
          />
          <FontAwesomeIcon
            icon={faAws}
            size="sm"
            className="text-lighterDark text-8xl"
          />
          <FontAwesomeIcon
            icon={faRedditAlien}
            size="sm"
            className="  text-lighterDark  text-8xl"
          />

          
        </div>
        <br />
        <hr className="mb-1 text-priceGray"/>
      </div>
    )
}