import { PRODUCTS_ACTIONS } from "./productsType";

export const setProducts = (products) => {
  return {
    type: PRODUCTS_ACTIONS.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: PRODUCTS_ACTIONS.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: PRODUCTS_ACTIONS.REMOVE_SELECTED_PRODUCT,
  };
};
