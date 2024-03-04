import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ShoppingCartDropdown = ({ onClose }) => {
   const shoppingCart = useSelector((store) => store.shoppingCart);
  console.log("ShoppingCartDropdown - shoppingCart:", shoppingCart);

  const cartList = useSelector((store) => store.shoppingCart.cartList);
  console.log("ShoppingCartDropdown - cartList:", cartList);

  return (
    <div className="absolute right-0 top-12 bg-white border border-gray-300 p-4 rounded-md shadow-lg z-50">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Shopping Cart</h3>
        <FontAwesomeIcon
          icon={faTimes}
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>
      {cartList.length > 0 ? (
        <ul className="space-y-2">
          {cartList.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.count}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCartDropdown;
