import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  products: productReducer,
});

export default rootReducer;
