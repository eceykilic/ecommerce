import { toast } from "react-toastify";
import {
  ADD_CARDS,
  REMOVE_ADDRESS,
  SET_ADDRESS,
  SET_LOADING,
  UPDATE_ADDRESS,
} from "./orderActionTypes";
import axiosInstance from "../../../api/axiosInstance";
import useLocalStorage from "../../../hooks/useLocalStorage";


export const setAddress = (address) => {
  // Local storage'a adresi kaydet
  localStorage.setItem("address", JSON.stringify(address));
  return { type: SET_ADDRESS, payload: address };
};

export const removeAddressAction = (id) => {
  // Local storage'tan adresi sil
  const storedAddress = JSON.parse(localStorage.getItem("address"));
  if (storedAddress && storedAddress.id === id) {
    localStorage.removeItem("address");
  }
  return { type: REMOVE_ADDRESS, payload: id };
};

export const updateAddressAction = (address) => {
  // Local storage'taki adresi güncelle
  localStorage.setItem("address", JSON.stringify(address));
  return { type: UPDATE_ADDRESS, payload: address };
};

export const setLoading = (loading) => {
  return { type: SET_LOADING, payload: loading };
};

export const addCard = (card) => {
  // Local storage'a kartı kaydet
  localStorage.setItem("card", JSON.stringify(card));
  return { type: ADD_CARDS, payload: card };
};

export const setAddressThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("Token");
  axiosInstance
    .post("/user/address", formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(setAddress(res.data));
    })
    .catch((err) => console.log(err));
};

export const removeAddressThunkAction = (id) => (dispatch) => {
  const token = localStorage.getItem("Token");
  axiosInstance
    .delete("/user/address/" + id, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(removeAddressAction(id));
      console.log(res.data);
      toast.success("Address deleted.");
    })
    .catch((err) => {
      toast.error("Error deleting address! Please try again.");
      console.error(err);
    });
};

export const updateAddressThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("Token");
  dispatch(setLoading(true));

  console.log("Updating Address - formData:", formData); // Add this line

  axiosInstance
    .put(`/user/address`, formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log("Update Address Response:", res.data); // Add this line
      dispatch(updateAddressAction(res.data));
      toast.success("Address updated.");
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.error(err.response);
      toast.error("Error updating address.");
    });
};

export const addCardsThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("Token");
  axiosInstance
    .post("/user/card", formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(addCard(res.data));
    });
};

export const updateCardThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("Token");
  axiosInstance
    .put(`/user/card`, formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
      toast.success("Card updated.");
    })
    .catch((err) => {
      console.error(err.response);
      toast.error("Error updating card.");
    });
};
