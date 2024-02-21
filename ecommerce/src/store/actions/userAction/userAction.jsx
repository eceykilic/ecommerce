import axios from "axios";
import * as types from './userActionTypes';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const userRequest = (userData) => {
    return {
        type: types.USER_REQUEST,
        payload: userData,
    };
};

export const userSuccess = (response) => {
    return {
        type: types.USER_SUCCESS,
        payload: response,
    };
};

export const userFailure = (error) => {
    return {
        type: types.USER_FAILURE,
        payload: error,
    };
};

export const userLogOut = () => {
    return {
        type: types.USER_LOG_OUT
    }
} 

export const signUpUser = (userData, history) => (dispatch) => {
    dispatch(userRequest(userData));
    axios
        .post('https://workintech-fe-ecommerce.onrender.com/signup', userData)
        .then((response) => {
            dispatch(userSuccess(response.data));
            console.log("Sign up has been successfully");
            toast.success("Sign up successful! Check your email to activate your account.");
            setTimeout(() => {
                history.goBack();
              }, 5000);
        }).catch((error) => {
            dispatch(userFailure(error))
            console.error("Sign up has been failed", error);
        })
};

export const loginUser = (userData, history, setToken) => (dispatch) => {
    dispatch(userRequest(userData));
    axios
        .post('https://workintech-fe-ecommerce.onrender.com/login', userData)
        .then((response) => {
            dispatch(userSuccess(response.data));
            setToken(response.data.token);
            console.log("Login has been successfully");
            history.push("/");
        }).catch((error) => {
            dispatch(userFailure(error))
            console.error("Login has been failed", error);
        })
};

export const logOutUser = (history) => (dispatch) => {
    dispatch(userLogOut());
    console.log("Log out has been successfully");
    history.push("/");
};
