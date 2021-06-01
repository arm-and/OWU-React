import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadProductsLoading} from "../redux/action-creators"

const ProductsList = () => {

    const {products, isLoading} = useSelector(store => store.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsLoading());
    }, [])

    return (
        <div className={'products-list'}>
            <div className={'loading'}>
                {isLoading && (
                    <h1 style={{color: 'red'}}>
                        LOADING...
                    </h1>
                )}
            </div>

            <div className={'products-ui'}>
                {
                    !isLoading && !!products.length && products.map(value => (
                        <div key={value.id}
                             style={{width: '40%', margin: '10px auto', border: 'solid chocolate 4px'}}>
                            <h2>{value.title}</h2>
                            <h3 style={{color: "green"}}>{value.price}$</h3>
                            <h3>{value.description}</h3>
                            <img style={{width: '40%'}} src={value.image} alt={'some picture'}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ProductsList;
