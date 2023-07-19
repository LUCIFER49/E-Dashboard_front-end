import React, { useState, useEffect } from 'react'

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = () => {

    }

    return(
        <div className=''>
            <h1>Products List</h1>
        </div>
    );
}

export default ProductsList;