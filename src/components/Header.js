// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/add-product">Add Product</Link></li>
                    <li><Link to="/products">Product List</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
