import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    decAction,
    decActionTwo,
    incAction, incActionTwo,
    incCustomAction,
    incCustomActionTwo,
    resetAction, resetActionTwo
} from "./redux/action-creators";

function App() {

    // const counter1 = useSelector(({counter1: {counter}}) => {
    //     return counter
    // })
    // const counter2 = useSelector(({counter2: {counter}}) => {
    //     return counter
    // })

    const {counter1, counter2} = useSelector(({counter1, counter2}) => ({
        counter1: counter1.counter,
        counter2: counter2.counter,
    }))

    const dispatch = useDispatch();

    return (
        <div className={'App'}
             style={{display: "flex", textAlign: "center", justifyContent: 'center'}}>
            <div>
                <div>
                    <h1>{counter1}-one</h1>
                    <h1>{counter2}-two</h1>
                </div>
                <div style={{backgroundColor: "red"}}>
                    <button onClick={() => dispatch(incCustomAction(100))}>INC_CUSTOM</button>
                    <hr/>
                    <button onClick={() => dispatch(incAction())}>INC</button>
                    <button onClick={() => dispatch(decAction())}>DEC</button>
                    <button onClick={() => dispatch(resetAction())}>RESET</button>
                    <hr/>
                </div>
                <div style={{backgroundColor: "green"}}>
                    <button onClick={() => dispatch(incCustomActionTwo(100000))}>INC_CUSTOM</button>
                    <hr/>
                    <button onClick={() => dispatch(incActionTwo())}>INC</button>
                    <button onClick={() => dispatch(decActionTwo())}>DEC</button>
                    <button onClick={() => dispatch(resetActionTwo())}>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default App;
