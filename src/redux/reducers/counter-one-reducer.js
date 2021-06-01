import {INC, DEC, RESET} from "../action-types";

const initFormLs = localStorage.getItem('counter1')

const initialState = initFormLs ? JSON.parse(initFormLs) : {
    counter: 0,
    isAllowedToChange: true
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case INC: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case DEC: {
            return {
                ...state,
                counter: state.counter - action.payload
            }
        }
        case RESET: {
            return {
                ...state,
                counter: 0
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;
