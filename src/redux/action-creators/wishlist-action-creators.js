import {ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST} from "../action-types";

export const addProductToWishlist = (id) => ({type: ADD_PRODUCT_TO_WISHLIST, payload: id});
export const removeActionFromWishlist = (id) => ({type: REMOVE_PRODUCT_FROM_WISHLIST, payload: id});

export const toggleItemInWishlist = (id) => (dispatch, getState) => {

    const {wishlist: {productsInWishlist}} = getState();

    const alreadyExist = !!productsInWishlist.find(value => value === id);

    dispatch(alreadyExist ? removeActionFromWishlist(id) : addProductToWishlist(id))

};
