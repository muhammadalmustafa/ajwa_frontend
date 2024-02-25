// src/pages/AddProductPage.js

import React from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

function AddProductPage() {
    const initialProductData = { name: '', description: '', price: '', quantity: '' ,  discount: '',  // Add default value if necessary
        categoryId: ''};

    const handleSubmit = async (product) => {
        try {
            await axios.post('http://localhost:5000/add-product', product);
            alert('Product added successfully!');
            // Optionally, redirect to the product list page or clear the form
        } catch (error) {
            alert('Failed to add product');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <ProductForm productData={initialProductData} onSubmit={handleSubmit} />
        </div>
    );
}

export default AddProductPage;
