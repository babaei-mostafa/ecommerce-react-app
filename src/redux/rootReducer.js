import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductReducer,
} from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: selectedProductReducer,
});

export default rootReducer;
