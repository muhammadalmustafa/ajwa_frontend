// src/components/Product.js

function Product({ product }) {
    return (
        <div className="product">
            <h3>Name:{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Discount: {product.discount}</p>
            <p>categoryId: {product.categoryId}</p>
            {/* Display discount and categoryId if necessary */}
        </div>
    );
}

export default Product;
