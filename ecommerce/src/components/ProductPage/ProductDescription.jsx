import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ProductDescription() {
  return (
    <div className="mb-5">
      <div className="text-lighterDark flex gap-5 justify-center mt-10 mb-8">
        <h5 className="text-base">Description</h5>
        <h5 className="font-bold text-base">Additional Information</h5>
        <div className="flex gap-2">
          <h5 className="font-bold text-base">Reviews</h5>
          <h5 className="text-priceGreen font-bold text-base">(0)</h5>
        </div>
      </div>
      <div className="w-[85%] mx-auto">
        <hr className="mb-10" />
        <div>
          <div className="flex flex-row items-center justify-between">
            <img
              src="/cardlist/pl1.jpg"
              alt=""
              className="w-[400px] h-[370px] object-cover overflow-hidden rounded shadow-xl shadow-[#C4C4C4] mr-4 mb-4"
            />

            <div className="flex flex-col gap-3 w-[400px] mb-3 items-baseline h-[370px]">
              <h5 className="text-darkText font-bold">
                the quick fox jumps over{" "}
              </h5>
              <h6 className="text-lighterDark">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met. 
                <br />
                <br />
                Met minim Mollie
                non desert Alamo est sit cliquey dolor do met sent. RELIT
                official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met. 
                <br />
                <br />
                Met minim Mollie non desert Alamo
                est sit cliquey dolor do met sent. RELIT official consequent
                door ENIM RELIT Mollie. Excitation venial consequent sent
                nostrum met.
              </h6>
            </div>

            <div className="flex flex-col gap-2 w-[400px]">
              <div className="flex flex-col gap-2">
                <h5 className="text-darkText font-bold pb-3">
                  the quick fox jumps over{" "}
                </h5>
                <div>    
                  <h6 className="text-lighterDark"><FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-priceGray mt-0.5 mr-2"
                  />the quick fox jumps over the lazy dog</h6>
                </div>
                <div>    
                  <h6 className="text-lighterDark"><FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-priceGray mt-0.5 mr-2"
                  />the quick fox jumps over the lazy dog</h6>
                </div>
                <div>    
                  <h6 className="text-lighterDark"><FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-priceGray mt-0.5 mr-2"
                  />the quick fox jumps over the lazy dog</h6>
                </div>
                <div>    
                  <h6 className="text-lighterDark"><FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-priceGray mt-0.5 mr-2"
                  />the quick fox jumps over the lazy dog</h6>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-darkText font-bold pb-3">
                  the quick fox jumps over{" "}
                </h5>
                <div>    
                  <h6 className="text-lighterDark"><FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-priceGray mt-0.5 mr-2"
                  />the quick fox jumps over the lazy dog</h6>
                </div>
                <div>    
                  <h6 className="text-lighterDark"><FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-priceGray mt-0.5 mr-2"
                  />the quick fox jumps over the lazy dog</h6>
                </div>
                <div>    
                  <h6 className="text-lighterDark"><FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-priceGray mt-0.5 mr-2"
                  />the quick fox jumps over the lazy dog</h6>
                </div>
                <div>    
                  <h6 className="text-lighterDark"><FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-priceGray mt-0.5 mr-2"
                  />the quick fox jumps over the lazy dog</h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
