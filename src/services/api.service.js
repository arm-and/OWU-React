import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

const axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance.get('/users');
}
const getUser = (id) => {
    return axiosInstance.get(`/users'${id}`);
}
const getPosts = () => {
    return axiosInstance.get('/posts'); //promise
};

const getPost = (id) => {
    return axiosInstance.get(`/users'${id}`); // promise
};
export {
    getUser, getUsers, getPosts, getPost, axiosInstance
};
