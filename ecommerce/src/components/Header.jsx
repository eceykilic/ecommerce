import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAngleDown,
  faUser,
  faSearch,
  faCartShopping,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { data } from "../data/data";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  const { phone, mail, offerMsg, companyName } = data.navBar;
  const history = useHistory();

  return (
    <div className="">
      <div className="bg-darkbg p-2 text-lightText text-center items-center justify-between flex px-5">
        <div className="flex gap-3">
          <div className="text-white items-center p-2.5 gap-[5px] flex">
            <FontAwesomeIcon icon={faPhone} size="sm" />
            <h6 className="text-sm font-bold leading-normal mb-0">{phone}</h6>
          </div>
          <div className="text-white items-center  p-2.5 gap-[5px] flex">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            <h6 className="text-sm font-bold leading-normal mb-0">{mail}</h6>
          </div>
        </div>
        <div className="p-2.5">
          <h6 className="text-white text-sm font-bold leading-normal mb-0">
            {offerMsg}
          </h6>
        </div>
        <div className="text-white items-center justify-start p-2.5 gap-2.5 flex">
          <h6 className="text-sm font-bold leading-normal mb-0">Follow Us :</h6>
          <div className="items-center justify-start gap-1 flex flex-wrap">
            <FontAwesomeIcon icon={faInstagram} size="sm" className="p-1" />
            <FontAwesomeIcon icon={faYoutube} size="sm" className="p-1" />
            <FontAwesomeIcon icon={faFacebook} size="sm" className="p-1" />
            <FontAwesomeIcon icon={faTwitter} size="sm" className="p-1" />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[85%] mx-auto">
        <header className="flex items-center pb-4 pt-4">
          <Link to="/" className="no-underline text-darkText">
            <h3 className="text-2xl text-slate-800 font-bold leading-loose cursor-pointer">
              {companyName}
            </h3>
          </Link>
        </header>

        <div className="flex w-[80%] justify-between">
        <nav className="gap-4 flex">
          {[
            ["Home", "/"],
            ["Shop", "/shopping"],
            ["About", "/about"],
            ["Contact", "/contact"],
            ["Team", "/team"],
          ].map(([title, url], idx) => (
            <div className="flex items-center justify-center" key={idx}>
              {title == "Shop" ? (
                <div>
                  <label tabIndex={0} className="font-medium text-sm">
                    <Link to="/shopping" className="no-underline text-darkText" onClick={() => history.push("/shopping")}>
                      Shop
                    </Link>
                    <FontAwesomeIcon icon={faAngleDown} className="pl-3" />
                  </label>
                </div>
              ) : (
                <Link
                  to={url}
                  key={idx}
                  className="no-underline text-lighterDark font-bold text-sm"
                >
                  {title}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex gap-8 font-bold">
        <div className="flex items-center text-navBlue">
          <FontAwesomeIcon icon={faUser} size="sm"/>
          <Link to="/login" className="no-underline text-navBlue text-sm">Login</Link> / <Link to="/signup" className="no-underline text-navBlue text-sm">Register</Link>
        </div>
        <div className="flex items-center text-navBlue">
          <FontAwesomeIcon icon={faSearch} size="sm"/>
          <Link to="/login" className="no-underline text-navBlue text-sm" />
        </div>
        <div className="flex items-center text-navBlue">
          <FontAwesomeIcon icon={faCartShopping} size="sm"/>
          <Link to="/login" className="no-underline text-navBlue text-sm" />
        </div>
        <div className="flex items-center text-navBlue">
          <FontAwesomeIcon icon={faHeart} size="sm"/>
          <Link to="/login" className="no-underline text-navBlue text-sm" />
          <div className="font-normal leading-none text-sm tracking-tight">1</div>
        </div>
        </div>
      </div>     
      </div>
    </div>
  );
}
