import axios from 'axios';
import * as actionType from '../constants/actionTypes';

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {

    if (localStorage.getItem('profile')) {

        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;

    };

    return req;

});

export const signIn = (form) => API.post('/user/signin', form);

export const signUp = (form) => API.post('/user/signup', form);