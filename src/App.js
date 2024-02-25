// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AddProductPage from './pages/AddProductPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import SearchProductsPage from './pages/SearchProductsPage';

function App() {
    return (
        <Router>
             <Header />
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/add-product" element={<AddProductPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/search-products" element={<SearchProductsPage />} />

                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
