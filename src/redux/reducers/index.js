import {combineReducers} from "redux";
import counter1Reducer from '../reducers/counter-one-reducer'
import counter2Reducer from '../reducers/counter-two-reducer'

export const reducer = combineReducers({
    counter1: counter1Reducer,
    counter2: counter2Reducer,
})
