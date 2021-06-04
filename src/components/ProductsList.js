import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadProductsLoading, toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators"

const ProductsList = () => {

    const {products, isLoading} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsLoading());
    }, [])

    return (
        <div>
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
                        <div key={value.id} className={'items'}
                             style={{width: '40%', margin: '10px auto', border: 'solid chocolate 4px'}}>
                            <h2>{value.title}</h2>

                            <button
                                style={{backgroundColor: productsInCart.includes(value.id) ? 'red' : ''}}
                                onClick={() => dispatch(toggleItemInCart(value.id))}>
                                {productsInCart.includes(value.id) ? 'remove from cart' : 'add to cart'}
                            </button>
                            <button
                                style={{backgroundColor: productsInWishlist.includes(value.id) ? 'red' : ''}}
                                onClick={() => dispatch(toggleItemInWishlist(value.id))}>
                                {productsInWishlist.includes(value.id) ? 'remove from wishlist' : 'add to wishlist'}
                            </button>
                            <h3 style={{color: "green"}}>{value.price}$</h3>
                            <h3>{value.description}</h3>
                            <img style={{width: '40%'}} src={value.image} alt={'some picture'}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList;
