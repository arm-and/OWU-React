import {END_PRODUCTS_LOADING, SET_PRODUCTS_LOADING, START_PRODUCTS_LOADING} from "../action-types";
import productsServices from "../../services/products.services";

export const startProductsLoading = () => ({type: START_PRODUCTS_LOADING});
export const endProductsLoading = () => ({type: END_PRODUCTS_LOADING});
export const setProductsLoading = (payload) => ({type: SET_PRODUCTS_LOADING, payload});

export const loadProductsLoading = () => async (dispatch) => {

    try {
        dispatch(startProductsLoading())
        const resp = await productsServices.getProducts();
        const json = await resp.json();
        dispatch(setProductsLoading(json));
        console.log(json);
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(endProductsLoading())
    }
}
