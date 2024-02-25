// src/pages/SearchProductsPage.js

import React, { useState } from 'react';
import axios from 'axios';
import SearchComponent from '../components/SearchComponent';
import Product from '../components/Product'; // Reuse the Product component to display results

function SearchProductsPage() {
    const [products, setProducts] = useState([]);

    const handleSearch = async (query) => {
        const response = await axios.get(`http://localhost:5000/search-products?query=${query}`);
        setProducts(response.data);
    };

    return (
        <div>
            <h2>Search Products</h2>
            <SearchComponent onSearch={handleSearch} />
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default SearchProductsPage;
