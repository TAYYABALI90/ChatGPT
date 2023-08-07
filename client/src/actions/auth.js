import { AUTH } from '../constants/actionTypes';

import * as api from '../api';

export const signin = (form, navigate) => async (dispatch) => {

    try {

        const { data } = await api.signIn(form);

        dispatch({ type: AUTH, data });

        navigate('/chat');

    } catch (error) {

        console.log('Sign in Error:', error);

    };

};

export const signup = (form, navigate) => async (dispatch) => {

    try {

        const { data } = await api.signUp(form);

        dispatch({ type: AUTH, data });

        navigate('/chat');

    } catch (error) {

        console.log('Sign up Error:', error);

    };

};