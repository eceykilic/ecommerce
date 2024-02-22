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
  faShoppingCart
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

export default function Header() {
  const { phone, mail, offerMsg, companyName } = data.navBar;
  const history = useHistory();
  const user = useSelector((store) => store.user.response);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    if (history) {
      // çıkış yapmak istendiğinde logOutUser eylemini tetikle
      dispatch(logOutUser());
      // Redirect to the home page or another page after logout
      history.push('/');
    }
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
          <h6 className="text-sm font-bold leading-normal mb-0">Follow Us :</h6>
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
          <FontAwesomeIcon icon={faSearch} size='lg'  />
          <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
          <FontAwesomeIcon icon={faBars} size='lg' />
          </div>
        </header>

          <div className="hidden sm:flex font-semibold text-3xl sm:flex-col sm:mx-auto sm:gap-6 sm:my-20 sm:text-center">

                    <Link to="/" className="no-underline text-lighterDark" onClick={() => history.push("/")}>
                      Home
                    </Link>

                    <Link to="/shopping" className="no-underline text-lighterDark" onClick={() => history.push("/shopping")}>
                      Product
                    </Link>
                    <Link to="/about" className="no-underline text-lighterDark" onClick={() => history.push("/about")}>
                      About
                    </Link>
                    <Link to="/contact" className="no-underline text-lighterDark" onClick={() => history.push("/contact")}>
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
              {title == "Shop" ? (
                <div>
                  <label tabIndex={0} className="font-medium text-sm ">
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
        <div className="flex gap-8 font-bold sm:hidden">
        <div className="flex items-center text-navBlue">
        {Object.keys(user).length > 1 ? (
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <Gravatar userEmail={user.email} />
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button">{user.name}</div>
                                        <ul tabIndex={0}>
                                            <li><div onClick={() => handleLogOut()} className="text-lighterDark text-sm">Log out</div></li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faUser} size="sm" className="" />
                                    <Link to="/login">Login</Link> / <Link to="/signup">Register</Link>
                                </div>
                            )}
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
