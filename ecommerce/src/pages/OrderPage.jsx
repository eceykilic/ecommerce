import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faInfo,
  faMobileScreenButton,
  faPlus,
  faTrash,
  faUser,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosInstance from "../api/axiosInstance";
import {
  removeAddressThunkAction,
  setAddress,
} from "../store/actions/orderAction/orderAction";
import AddressForm from "../components/OrderPage/AddressForm";
import OrderSum from "../components/Repetitive/OrderSum";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function OrderPage() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.orderReducer.address);
  const token = localStorage.getItem("Token");
  const [defaultAdress, setDefaultAdress] = useState({});
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [option, setOption] = useState("address");
  const [isAgreed, setIsAgreed] = useState(false);
  const history = useHistory();

  // useEffect içinde token kontrolü
  useEffect(() => {
    // Token değeri kontrol ediliyor
    if (!token) {
      console.log("Token is missing or invalid. Redirecting to login page...");
    } else {
      // Token mevcut ve geçerli ise API çağrısı
      axiosInstance
        .get("/user/address", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          dispatch(setAddress(res.data));
          if (res.data.length > 0) {
            setDefaultAdress(res.data[0]);
          }
        })

        .catch((error) => {
          // API çağrısı hata durumu
          console.error("API call failed:", error);
        });
    }
  }, [token, dispatch]);

  const removeAddress = (id) => {
    dispatch(removeAddressThunkAction(id));
    console.log(id);
  };

  const editAddress = (address) => {
    setDefaultAdress(address);
    setIsAddressFormOpen(true);
  };

  const handleCheckboxChange = (checked, address) => {
    if (checked && address) {
      setDefaultAdress(address);
    } else {
      setDefaultAdress({});
    }
  };

  const handleCheckboxChange2 = (event) => {
    setIsAgreed(event.target.checked);
  };


  const optionSelect = (e) => {
    setOption(e);
  };

  const openAddress = () => {
    setDefaultAdress({});
    setIsAddressFormOpen(true);
  };

  const closeAddress = () => {
    setIsAddressFormOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeAddress();
    }
  };

  //modal kapanma şartları

  const handleOutsideClick = (e) => {
    const modal = document.getElementById("addressFormModal");

    if (modal && !modal.contains(e.target)) {
      closeAddress();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeAddress();
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleFormSubmit = () => {
    // You can perform any necessary actions when the form is submitted
    // For example, redirecting to another page
    history.push("/order");
  };

  return (
    <div className="">
      <div className="flex max-w-screen-2xl justify-between mx-auto mt-14 gap-10 mb-10">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <div
              onClick={() => optionSelect("address")}
              className={`flex flex-col w-full gap-2 border-2 pr-10 ${
                option === "address"
                  ? "border-b-navBlue cursor-pointer bg-lightbg"
                  : "border-b-priceGray cursor-pointer"
              }`}
            >
              <h1 className="text-xl text-navBlue font-medium p-2">
                Shipping Address
              </h1>
              <div className="p-2">
                <p>
                  {defaultAdress?.name} {defaultAdress?.surname}
                </p>
                <p>
                  {defaultAdress?.address} {defaultAdress?.city}{" "}
                  {defaultAdress?.district}
                </p>
              </div>
            </div>
            <div
              onClick={() => optionSelect("payment")}
              className={`flex flex-col gap-2 border-2 w-full pr-10 ${
                option === "payment"
                  ? "border-b-navBlue cursor-pointer bg-lightbg"
                  : "border-b-priceGray cursor-pointer"
              }`}
            >
              <h1 className="text-xl text-navBlue font-medium p-2">
                Payment Methods
              </h1>
              <div className="p-2">
                <p>
                  <span className="font-bold text-darkText">
                    Banka/Kredi Kartı
                  </span>{" "}
                  veya{" "}
                  <span className="font-bold text-darkText">
                    Alışveriş Kredisi
                  </span>{" "}
                  ile ödemenizi güvenle yapabilirsiniz.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${
              option === "payment" ? "hidden" : "flex"
            } w-full border-2 py-4 px-4 gap-5 items-center`}
          >
            <FontAwesomeIcon
              className="rounded-full text-white p-1 text-xs border-1 h-4 w-5 bg-navBlue"
              icon={faInfo}
            />
            <p>
              Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese
              Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı kurumsal
              fatura adresinizi seçin.
            </p>
          </div>
          {option === "address" && (
            <div className="flex flex-col border-2 p-5">
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Delivery Address</h1>
                <div className="flex gap-1">
                  <input type="checkbox" />
                  <label htmlFor="">Send my invoice to the same address</label>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div
                  onClick={openAddress}
                  className="flex flex-col items-center gap-2 border-2 border-dashed border-navBlue rounded-md justify-center py-5 hover:bg-priceGray cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="text-navBlue text-xl"
                    icon={faPlus}
                  />
                  <h1 className="text-lg">Yeni Adres Ekle</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {address.slice(0, 8).map((item, index) => (
                    <div
                      key={index}
                      className="w-[48%] flex flex-col gap-5 p-3 mb-3"
                    >
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            checked={defaultAdress?.id === item.id}
                            onChange={(e) =>
                              handleCheckboxChange(e.target.checked, item)
                            }
                          />
                          <label htmlFor="">{item.title}</label>
                        </div>
                        <p
                          onClick={() => editAddress(item)}
                          className="text-sm underline cursor-pointer"
                        >
                          Düzenle
                        </p>
                      </div>
                      <div className="rounded-md flex flex-col gap-5 p-3 h-[150px] justify-center border-2">
                        <div className="flex justify-between">
                          <div className="flex gap-2">
                            <FontAwesomeIcon
                              className="text-navBlue pt-1"
                              icon={faUser}
                            />
                            <h2>
                              {item.name} {""}
                              {item.surname}
                            </h2>
                          </div>
                          <div className="flex gap-2">
                            <FontAwesomeIcon
                              className="text-navBlue"
                              icon={faMobileScreenButton}

                            />
                            <h2 className="text-sm">{item.phone}</h2>
                          </div>
                        </div>
                        <div className="flex justify-between">
                        <p>
                          {item.address}
                          <br />
                          {item.neighborhood} <br />
                          {item.district} {item.city} 
                          
                        </p>

                        <FontAwesomeIcon
                        onClick={() => removeAddress(item.id)}
                        className="h-4 w-4 text-lighterDark cursor-pointer pt-14"
                        icon={faTrash}
                      />
                        </div>
                        
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {option === "payment" && (
            <div className="flex flex-col border-2 p-5">
              <div className="flex justify-between items-center">
                <h1 className="text-xl">KART BİLGİLERİ BURDA OLCAK</h1>
                <div className="flex gap-1">
                  <input type="checkbox" />
                  <label htmlFor="">Send my invoice to the same address</label>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div
                  onClick={openAddress}
                  className="flex flex-col items-center gap-2 border-2 border-dashed border-navBlue rounded-md justify-center py-5 hover:bg-priceGray cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="text-navBlue text-xl"
                    icon={faPlus}
                  />
                  <h1 className="text-lg">Yeni Adres Ekle</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {address.slice(0, 8).map((item, index) => (
                    <div
                      key={index}
                      className="w-[48%] flex flex-col gap-5 p-3 mb-3"
                    >
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            checked={defaultAdress?.id === item.id}
                            onChange={(e) =>
                              handleCheckboxChange(e.target.checked, item)
                            }
                          />
                          <label htmlFor="">{item.title}</label>
                        </div>
                        <p
                          onClick={() => editAddress(item)}
                          className="text-sm underline cursor-pointer"
                        >
                          Düzenle
                        </p>
                      </div>
                      <div className="rounded-md flex flex-col gap-5 p-3 h-[150px] justify-center border-2">
                        <div className="flex justify-between">
                          <div className="flex gap-2">
                            <FontAwesomeIcon
                              className="text-navBlue pt-1"
                              icon={faUser}
                            />
                            <h2>
                              {item.name} {""}
                              {item.surname}
                            </h2>
                          </div>
                          <div className="flex gap-2">
                            <FontAwesomeIcon
                              className="text-navBlue"
                              icon={faMobileScreenButton}

                            />
                            <h2 className="text-sm">{item.phone}</h2>
                          </div>
                        </div>
                        <div className="flex justify-between">
                        <p>
                          {item.address}
                          <br />
                          {item.neighborhood} <br />
                          {item.district} {item.city} 
                          
                        </p>

                        <FontAwesomeIcon
                        onClick={() => removeAddress(item.id)}
                        className="h-4 w-4 text-lighterDark cursor-pointer pt-14"
                        icon={faTrash}
                      />
                        </div>
                        
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col border-2 p-4 max-w-[400px] h-[20%]">
          <div className="flex flex-col gap-4 ">
            <button
              onClick={() => {
                history.push("/checkout");
              }}
              className="text-sm border-1 rounded-md py-2 px-5 bg-navBlue text-white"
              disabled={!isAgreed} 
            >
              Save and Continue <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className="flex flex-col gap-3">
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="" id="" className="cursor-pointer w-8 h-8 mr-3 mb-8"
                checked={isAgreed}
                onChange={handleCheckboxChange2} />
                <label className="text-sm">
                  <span className="font-bold text-darkText underline cursor-pointer">
                    Ön Bilgilendirme Koşulları
                  </span>
                  'nı ve{" "}
                  <span className="font-bold text-darkText underline cursor-pointer">
                    Mesafeli Satış Sözleşmesi
                  </span>
                  'ni okudum,onaylıyorum.
                </label>
              </div>
            </div>

            <OrderSum />
            <button
              onClick={() => {
                history.push("/checkout");
              }}
              className="text-sm border-1 rounded-md py-2 px-5 bg-navBlue text-white"
              disabled={!isAgreed} 
            >
              Save and Continue <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>

      {isAddressFormOpen && (
        <div
          className="fixed inset-0 overflow-y-auto flex items-center justify-center modal-overlay"
          onClick={handleModalClick}
        >
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative bg-white p-8 rounded-lg">
            <AddressForm
              address={defaultAdress}
              closeModal={closeAddress}
              onSubmitCallback={handleFormSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
}
