import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

const axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance.get('/users');
}
const getUser = (id) => {
    return axiosInstance.get(`/users${id}`);
}
const getPosts = () => {
    return axiosInstance.get('/posts'); //promise
};

const getPost = (id) => {
    return axiosInstance.get(`/posts${id}`); // promise
};
const getComments = () => {
    return axiosInstance.get('/comments'); //promise
};

const getComment = (id) => {
    return axiosInstance.get(`/comments${id}`); // promise
};
export {
    getUser, getUsers, getPosts, getPost, getComments, getComment, axiosInstance
};
