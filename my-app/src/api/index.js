import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

// export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchCards = (category,page) => API.get(`/card?category=${category}&page=${page}`);
export const fetchNewCards = (page) => API.get(`/card/new?page=${page}`);
export const fetchCard = (id) => API.get(`/card/${id}`);
export const postComment = (reviewData,config) => API.put(`/card/review`,reviewData,config);
export const getRecommendSearch = (searchQuery) => API.get(`/card/recomendsearch?Keywords=${searchQuery.Keywords}&category=${searchQuery.category}`);
// export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createCard = (formData) => API.post('/card/createcard', formData);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const googleSignUp = (formData) => API.post('/user/googleSignUp', formData);
export const updateProfile = (profiledata,config) => API.put(`/user/update`,profiledata,config);
