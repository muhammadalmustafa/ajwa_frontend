// src/pages/LoginPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginForm from '../components/LoginForm';

function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = async (credentials) => {
        try {
            // Adjust the URL according to your backend configuration
            const response = await axios.post('http://localhost:5000/login', credentials);
            console.log(response.data);
            // alert('Login successful');
            navigate('/dashboard'); 
            // Here you could redirect the user or save the login state
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default LoginPage;
