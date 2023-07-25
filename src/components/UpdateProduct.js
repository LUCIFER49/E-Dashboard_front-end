import React, { useState } from "react";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const updateProduct = async () => {
    console.warn(name, price, category, company);
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input 
        type="text" 
        placeholder="Product Name" 
        className="inputField" 
        vale={name}
        onChange={(e) => {
            setName(e.target.value);
        }}
      />

      <input 
        type="text"
        placeholder="Product Price"
        className="inputField"
        value={price}
        onChange={(e) => {
            setPrice(e.target.value);
        }}
      />

      <input 
        type="text"
        placeholder="Product Category"
        className="inputField"
        value={category}
        onChange={(e) => {
            setCategory(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Product Company"
        className="inputField"
        value={company}
        onChange={(e) => {
            setCompany(e.target.value);
        }}
      />

      <button onClick={updateProduct} className="updateButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
