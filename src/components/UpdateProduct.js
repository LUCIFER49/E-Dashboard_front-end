import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  });  //array is used for calling params single time

  //For calling of the API(for fetching data specific to _id)
  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    console.warn(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    console.warn(result);
    navigate('/');
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input 
        type="text" 
        placeholder="Product Name" 
        className="inputField" 
        value={name}
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
