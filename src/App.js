import React from "react";
import {useDispatch} from "react-redux";
import "././components/index.css"
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";

function App() {


    const dispatch = useDispatch();

    return (
        <div className={'App'}>
            <div className={"header"}>
                <Header/>
            </div>
            <div className={'product-ui'}>
                <div className={'products-list'}>
                    <ProductsList/>
                </div>
            </div>
        </div>
    );
}

export default App;
