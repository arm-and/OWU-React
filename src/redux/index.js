import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers";
import {DEC, INC, RESET} from "./action-types";
import thunk from "redux-thunk";

const logger = (store) => (next) => (action) => {
    console.log(action);
    const result = next(action);

    console.log('next state', store.getState())

    return result
};

const protectCounter = (store) => (next) => (action) => {

    const actionsForCounter = [INC, DEC, RESET];

    const {isAllowedToChange} = store.getState().counter1

    if (!isAllowedToChange && actionsForCounter.includes(action.type)) {
        console.log('you"re not allowed to modify counter');
        return;
    }
    next(action)
}

const persister = (store) => (next) => (action) => {

    next(action);

    const {counter1} = store.getState();
    localStorage.setItem('counter1', JSON.stringify(counter1));
}

const middlewares = [thunk, protectCounter, logger, persister];

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares)

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
