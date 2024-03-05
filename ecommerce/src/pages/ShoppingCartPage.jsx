import { useState } from "react";
import {
  setAddToCart,
  toggleCheckItemAction,
  removeFromCart,
} from "../store/actions/shoppingCart/shoppingCartActions";
import { useDispatch, useSelector } from "react-redux";

import {
  faChevronRight,
  faPlus,
  faTrash,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShoppingCartPage() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const [discountInput, setDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  
  //indirim kodu girişi
  const handleChange = (event) => {
    setDiscountCode(event.target.value);
  };


  //dispatching actions:
  function productAdder(item) {
    dispatch(setAddToCart(item));
  }

  function productRemover(item) {
    dispatch(setAddToCart(item, "decrement"));
  }

  function toggleCheckbox(item) {
    dispatch(toggleCheckItemAction(item));
  }

  function removeAllProduct(item) {
    dispatch(removeFromCart(item));
  }

  //toFixed() methodu ile çıkan sayıyı yuvarlama

  const roundTheNumber = (number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
  };

  let totalCargo = 29.99;

  
  // total fiyat hesabı
  function totalAmount() {
    let totalPrice = 0;
  
    for (let item of cart) {
      if (item.checked) {
        totalPrice += item.count * item.price;
      }
    }
  
    return totalPrice;
  }

  //totale göre kargo fiyatı ayarlama
  //sepetteki ürünlerin hiçbiri tikli değilse kargo fiyatı 0 görünmeli
  function cargoPrice() {
    if (cart.length === 0 || totalAmount() === 0) {
      return 0; // No items in the cart or totalAmount is 0, so shipping cost is 0
    } else if (totalAmount() > 150) {
      return parseFloat(totalAmount().toFixed(2));
    } else {
      return parseFloat((totalAmount() + totalCargo).toFixed(2));
    }
  }

  return (
    <>
    <div>
    <h1 className="text-xl font-bold text-darkText max-w-screen-2xl mx-auto mt-5">Shopping Cart ({cart.length} items)</h1>
    </div>
     
    <div className="flex max-w-screen-2xl justify-between mx-auto mt-5 gap-10">
        
      <div className="flex flex-col gap-8">
        
        {cart.map((item, index) => {
          if (item.count > 0) {
            return (
                
              <div
                key={index}
                className="flex items-center gap-10 border-2 py-5 px-2 justify-between"
              >
                <input
                  className="border-lighterDark scale-125"
                  type="checkbox"
                  checked={item.checked}
                  onClick={() => toggleCheckbox(item)}
                />
                <img
                  className="max-w-[150px] h-[200px] object-cover border-2 rounded-md"
                  src={item.images[0].url}
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <h1>{item.name}</h1>
                  <h2 className="text-lighterDark max-w-96">{item.description}</h2>
                  <p>Size: M</p>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      className="text-priceGreen"
                      icon={faTruck}
                    />
                    <p className="text-darkText">
                    Order within{" "}
                      <span className="font-bold text-darkText">
                        35 minutes
                      </span>{" "}
                      for{" "}
                      <span className="font-bold text-darkText">
                      next-day
                      </span>{" "}
                      delivery!
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <div className="flex items-center">
                    <button
                      onClick={() => productRemover(item)}
                      className="px-3 py-3 border-2 bg-gray-200"
                    >
                      -
                    </button>
                    <p className="px-3 py-3 border-t-2 border-b-2">
                      {item.count}
                    </p>
                    <button
                      onClick={() => productAdder(item)}
                      className="px-3 py-3 border-2 bg-gray-200 text-navBlue"
                    >
                      +
                    </button>
                  </div>
                  <h1 className="text-lg text-navBlue">
                    {roundTheNumber(item.price * item.count)}$
                  </h1>
                  <FontAwesomeIcon
                    className="text-lighterDark"
                    icon={faTrash}
                    onClick={() => removeAllProduct(item)}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      {cart.length > 0 ? (
        <div className="flex flex-col border-2 p-4 w-1/4 h-[20%]">
          <div className="flex flex-col gap-4 ">
          <button className="text-sm border-1 rounded-md py-2 px-5 bg-navBlue text-white">
              Proceed to Checkout <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <h1 className="text-xl">Order Summary</h1>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{roundTheNumber(totalAmount())} $</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>{totalCargo} $</p>
            </div>
            <div className="flex justify-between border-b-2 pb-2">
              <p>
                Free Shipping for <br /> 150$ and above
              </p>
              <p className="text-navBlue">-{totalCargo} $</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>Order total</p>
              <p className="text-navBlue">{cargoPrice()} $</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setDiscountInput(!discountInput)}
              className="text-sm font-medium border-1 rounded-md py-3 px-5 border-2"
            >
              <FontAwesomeIcon className="text-navBlue" icon={faPlus} />{" "}
              Enter Discount Code
            </button>
            {discountInput && (
              <form onSubmit={""} className="flex flex-col gap-2">
                <input
                  onChange={handleChange}
                  value={discountCode}
                  type="text"
                  placeholder="Enter Code"
                  className="text-center border-2 py-2"
                />
                <button
                  type="submit"
                  className="border-1 w-24 m-auto py-2 rounded-lg bg-navBlue text-white"
                >
                  Submit
                </button>
              </form>
            )}
            <button className="text-sm border-1 rounded-md py-2 px-5 bg-navBlue text-white">
              Proceed to Checkout <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      ) : (
        <h1 className="mx-auto text-3xl m-10 text-darkText">
          Shopping cart is empty.
        </h1>
      )}
    </div>
    </>
  );
}
