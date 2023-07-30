import React, { useState } from "react";

const AddProductPage = ({ addProduct }) => {
    const [inputValue, setInputValue] = useState([])
    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputValue({ ...inputValue, [name]: value });
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        addProduct(inputValue);
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder="Enter Products Name" onChange={onHandleChange} name='name' />
                <input type="text" placeholder="Enter Products Price" onChange={onHandleChange} name='price' />
                <button type="submit">Add New</button>
            </form>
        </div>
    )
}
export default AddProductPage