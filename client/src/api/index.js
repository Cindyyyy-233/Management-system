import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000' })
const API = axios.create({ baseURL: 'https://postmemory.herokuapp.com/' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      console.log("assign auth")
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

// export const FetchPosts = () => API.get('/posts');
// export const createPost = (newPost) => API.post('', newPost);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const FetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);