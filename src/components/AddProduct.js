import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const addProduct = async () => {

        if(!name || !price || !category || !company) {
            setError(true); 
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: JSON.stringify({name, price, category, company, userId}),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter Product Name' className='inputField' value={name} onChange={(e) => {setName(e.target.value)}} />
            { error && <span className='invalidDetail'>Please Enter Valid Name</span> }

            <input type="text" placeholder='Enter Product Price' className='inputField' value={price} onChange={(e) => {setPrice(e.target.value)}} />

            <input type="text" placeholder='Enter Product Category' className='inputField' value={category} onChange={(e) => {setCategory(e.target.value)}} />

            <input type="text" placeholder='Enter Product Company' className='inputField' value={company} onChange={(e) => {setCompany(e.target.value)}} />

            <button onClick={addProduct} className='productButton' >Add Product</button>
        </div>
    );
}

export default AddProduct;