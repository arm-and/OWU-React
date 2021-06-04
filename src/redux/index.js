import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers";
import thunk from "redux-thunk";

const logger = (store) => (next) => (action) => {
    console.log(action);
    const result = next(action);

    console.log('next state', store.getState())

    return result
};

const persister = (store) => (next) => (action) => {

    next(action);

    const {wishlist, cart} = store.getState();
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('cart', JSON.stringify(cart));
};

const middlewares = [thunk, logger, persister];

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares)

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
