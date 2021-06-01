const baseUrl = 'https://dummyapi.io/data/api/'
const appId = {headers: {'app-id': 'lTE5abbDxdjGplutvTuc'}}

module.exports = {
    getUsersPhotos: () => {
        return fetch(
            baseUrl + 'user?limit=10',
            appId,
        );
    }
}
