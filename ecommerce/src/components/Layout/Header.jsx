import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAngleDown,
  faUser,
  faSearch,
  faCartShopping,
  faHeart,
  faBars,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { data } from "../../data/data";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../store/actions/userAction/userAction";
import Gravatar from "./Gravatar";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

export default function Header() {
  const { phone, mail, offerMsg, companyName } = data.navBar;
  const history = useHistory();
  const user = useSelector((store) => store.user.response);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const categories = useSelector((store) => store.global.categories);
  const womanCategories = categories.filter(
    (category) => category.gender === "k"
  );
  const manCategories = categories.filter(
    (category) => category.gender === "e"
  );

  const handleLogOut = () => {
    if (history) {
      dispatch(logOutUser());
      history.push("/");
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <div className="bg-darkbg sm:hidden">
        <div className="max-w-screen-2xl pb-2 pt-2 text-lightText text-center items-center justify-between flex mx-auto">
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
            <h6 className="text-sm font-bold leading-normal mb-0">
              Follow Us :
            </h6>
            <div className="items-center justify-start gap-1 flex flex-wrap">
              <FontAwesomeIcon icon={faInstagram} size="sm" className="p-1" />
              <FontAwesomeIcon icon={faYoutube} size="sm" className="p-1" />
              <FontAwesomeIcon icon={faFacebook} size="sm" className="p-1" />
              <FontAwesomeIcon icon={faTwitter} size="sm" className="p-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-screen-2xl mx-auto sm:flex-col ">
        <header className="flex items-center pb-4 pt-4 sm:justify-between">
          <Link to="/" className="no-underline text-darkText">
            <h3 className="text-2xl text-darkText font-bold leading-loose cursor-pointer sm:pl-10">
              {companyName}
            </h3>
          </Link>
          <div className="hidden sm:flex sm:gap-8 sm:mr-10">
            <FontAwesomeIcon icon={faSearch} size="lg" />
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </header>

        <div className="hidden sm:flex font-semibold text-3xl sm:flex-col sm:mx-auto sm:gap-6 sm:my-20 sm:text-center">
          <Link
            to="/"
            className="no-underline text-lighterDark"
            onClick={() => history.push("/")}
          >
            Home
          </Link>

          <Link
            to="/shopping"
            className="no-underline text-lighterDark"
            onClick={() => history.push("/shopping")}
          >
            Product
          </Link>
          <Link
            to="/about"
            className="no-underline text-lighterDark"
            onClick={() => history.push("/about")}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="no-underline text-lighterDark"
            onClick={() => history.push("/contact")}
          >
            Contact
          </Link>
        </div>

        <div className="flex w-[80%] justify-between sm:hidden">
          <nav className="flex mx-auto gap-4">
            {[
              ["Home", "/"],
              ["Shop", "/shopping"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Team", "/team"],
            ].map(([title, url], idx) => (
              <div className="flex items-center justify-center" key={idx}>
                {title === "Shop" ? (
                  <div className="group relative">
                    <Link
                      to="/shopping"
                      className="no-underline text-darkText flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownToggle();
                      }}
                    >
                      <span>Shop</span>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`pl-3 transition-transform duration-300 transform ${
                          isDropdownOpen ? "-rotate-180" : ""
                        }`}
                      />
                    </Link>
                    <div
                      className={`absolute ${
                        isDropdownOpen ? "" : "hidden"
                      } z-10 mt-2 space-y-2 bg-white rounded-md shadow-lg`}
                    >
                      <div className="py-2 px-4">
                        <Link
                          to="/shopping/kadin"
                          className="font-bold text-gray-800"
                        >
                          Women
                        </Link>
                        <div className="space-y-2">
                          {womanCategories.map((category, idx) => (
                            <Link
                              key={idx}
                              to={`/shopping/kadin/${category.code.slice(
                                2
                              )}${search}`}
                              className="block px-4 py-2 text-sm text-gray-500"
                            >
                              {category.title}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="py-2 px-4">
                      <Link
                          to="/shopping/erkek"
                          className="font-bold text-gray-800"
                        >
                          Men
                        </Link>
                        {manCategories.map((category, idx) => (
                          <Link
                            key={idx}
                            to={`/shopping/erkek/${category.code.slice(
                              2
                            )}${search}`}
                            className="block px-4 py-2 text-sm text-gray-500 group-hover:block"
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    </div>
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
          <div className="flex gap-8 font-bold sm:hidden">
            <div className="flex items-center text-navBlue">
              {Object.keys(user).length > 1 ? (
                <div className="flex items-center gap-3 cursor-pointer">
                  <Gravatar userEmail={user.email} />
                  <div className="group relative">
                    <div className="flex items-center">
                      <span>{user.name}</span>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="pl-1 transition-transform duration-300 transform group-hover:-rotate-180"
                      />
                    </div>
                    <ul className="absolute hidden z-10 group-hover:block mt-2 space-y-2 bg-white rounded-md shadow-lg">
                      <li>
                        <div
                          onClick={() => handleLogOut()}
                          className="block px-4 py-2 text-sm text-lighterDark"
                        >
                          Log out
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faUser} size="sm" className="" />
                  <Link to="/login">Login</Link> /{" "}
                  <Link to="/signup">Register</Link>
                </div>
              )}
            </div>

            <div className="flex items-center text-navBlue">
              <FontAwesomeIcon icon={faSearch} size="sm" />
              <Link to="/login" className="no-underline text-navBlue text-sm" />
            </div>
            <div className="flex items-center text-navBlue">
              <FontAwesomeIcon icon={faCartShopping} size="sm" />
              <Link to="/login" className="no-underline text-navBlue text-sm" />
            </div>
            <div className="flex items-center text-navBlue">
              <FontAwesomeIcon icon={faHeart} size="sm" />
              <Link to="/login" className="no-underline text-navBlue text-sm" />
              <div className="font-normal leading-none text-sm tracking-tight">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
