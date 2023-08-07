import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Chat from './chat/Chat';
import Auth from './authentication/Auth';

const Main = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('profile'));
        setUser(userData);
        navigate(user ? "/chat" : "/auth");
    }, []);

    return (

        <Routes>

            <Route path="/chat" element={<Chat />} />

            <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/chat" />} />

        </Routes>

    );

};

export default Main;