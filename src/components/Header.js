import React, {useMemo} from "react";
import {useSelector} from "react-redux";

export default function Header() {

    const {products, productsInCart, productsInWishlist} = useSelector(store => ({
        ...store.products,
        ...store.cart,
        ...store.wishlist
    }));

    const calculatedCartSum = useMemo(() => {
        return products
            .filter(value => productsInCart.includes(value.id))
            .reduce((acc, value) => acc += value.price, 0)
    }, [products, productsInCart]);

    const calculatedWishlistSum = useMemo(() => {
        return products
            .filter(value => productsInWishlist.includes(value.id))
            .reduce((acc, value) => acc += value.price, 0)
    }, [products, productsInWishlist]);

    return (
        <header>
            <h1>Header</h1>
            <div className={'counters'}>
                <span>
                    wishlist:{productsInWishlist.length} ({calculatedWishlistSum} $)
                </span>
                <span>
                    cart:{productsInCart.length} ({calculatedCartSum} $)
                </span>
            </div>
        </header>
    );
}
