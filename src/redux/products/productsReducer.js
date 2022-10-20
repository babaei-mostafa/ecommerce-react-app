import { PRODUCTS_ACTIONS } from "./productsType";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case PRODUCTS_ACTIONS.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
