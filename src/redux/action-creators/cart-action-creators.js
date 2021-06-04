import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from "../action-types";

export const addProductToCart = (id) => ({type: ADD_PRODUCT_TO_CART, payload: id});
export const removeActionFromCart = (id) => ({type: REMOVE_PRODUCT_FROM_CART, payload: id});

export const toggleItemInCart = (id) => (dispatch, getState) => {

    const {cart: {productsInCart}} = getState();

    const alreadyExist = !!productsInCart.find(value => value === id);

    dispatch(alreadyExist ? removeActionFromCart(id) : addProductToCart(id))

}

