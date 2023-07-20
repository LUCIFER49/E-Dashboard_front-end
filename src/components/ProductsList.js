import React, { useState, useEffect } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  }
  console.warn("products", products);

  return (
    <div className="product-list">
      <h1>Products List</h1>
      
      {
        products.map((item, index) => 
        <ul>
            <li>{ index+1 }</li>
            <li>{ item.name}</li>
            <li>$ { item.price }</li>
            <li>{ item.category }</li>
            <li>{ item.company}</li>
        </ul>
        )
      }
    </div>
  );
};

export default ProductsList;
