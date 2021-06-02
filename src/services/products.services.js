const baseUrl = 'https://fakestoreapi.com/';

module.exports = {
    getProducts: () => {
        return fetch(
            baseUrl + 'products',
        );
    }
}
