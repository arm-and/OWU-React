import {START_PRODUCTS_LOADING, END_PRODUCTS_LOADING, SET_PRODUCTS_LOADING} from "../action-types";

export const startProductsLoading = () => ({type: START_PRODUCTS_LOADING});
export const endProductsLoading = () => ({type: END_PRODUCTS_LOADING});
export const setProductsLoading = (payload) => ({type: SET_PRODUCTS_LOADING, payload});

export const loadProductsLoading = () => async (dispatch) => {

    try {
        dispatch(startProductsLoading())
        const resp = await fetch('https://fakestoreapi.com/products');
        const json = await resp.json();
        dispatch(setProductsLoading(json));
        console.log(json);
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(endProductsLoading())
    }
}
