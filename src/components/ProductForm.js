// src/components/ProductForm.js

import React from 'react';

function ProductForm({ productData, onSubmit }) {
    // Use the productData prop for initial form state
    const [product, setProduct] = React.useState(productData);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(product); // Pass the product data to the parent component's onSubmit handler
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
            <input type="number" name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange} required />
            <input type="number" step="any" name="discount" placeholder="Discount" value={product.discount} onChange={handleChange} />
            <input type="number" name="categoryId" placeholder="Category ID" value={product.categoryId} onChange={handleChange} />
            
            <button type="submit">Add Product</button>
        </form>
    );
}

export default ProductForm;
