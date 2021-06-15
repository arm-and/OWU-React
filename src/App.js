import React from "react";
import {useDispatch} from "react-redux";
import "././components/index.css"
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";

function App() {

    const dispatch = useDispatch();

    return (
        <div className={'App'}>
            <Header/>
            <ProductsList/>
        </div>
    );
}

export default App;
