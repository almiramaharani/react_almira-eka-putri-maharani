import React, { useState } from 'react';
import CreateProduct from '../CreateProduct/CreateProduct';
import "./ListProduct.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListProduct() {
    const [tableData, setTableData] = useState([]);
    const [searchInput, setSeachInput] = useState('');
    
    const handleFormSubmit = (formData) => {
        setTableData([...tableData, formData]);
    }

    const handleSearch = () => {
        const result = tableData.find(data => data.productName === searchInput);
        alert(JSON.stringify(result ? result : "Product not found", null, 2));
        setSeachInput('');
    }

    const handleDelete = () => {
        if (tableData.length === 0) return;
        const updatedData = [...tableData];
        updatedData.pop();
        setTableData(updatedData);
    }

    return (
        <>
            <CreateProduct onSubmit={handleFormSubmit}/>
            <div className='content-main text-center'>
                <h2 className='page-title mt-3'>List Product</h2>
                <table className='table-sm table-striped m-3'>
                    <thead style={{ boxShadow: "0px 1px 10px rgba(0,0,0,0.1)" }}>
                        <tr>
                            <th scope='col'>No</th>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Product Category</th>
                            <th scope='col'>Image of Product</th>
                            <th scope='col'>Product Freshness</th>
                            <th scope='col'>Additional Description</th>
                            <th scope='col'>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.productName}</td>
                                    <td>{data.category}</td>
                                    <td>{data.image}</td>
                                    <td>{data.productFreshnessRadio}</td>
                                    <td>{data.addDesc}</td>
                                    <td>{data.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className='input-group'>
                    <div className='row m-3'>
                        <div className='form-outline mb-2' style={{width: "60%"}}>
                            <input 
                                type="search" 
                                name="search" 
                                id="search" 
                                className='form-control' 
                                placeholder='Search by Product Name'
                                value={searchInput}
                                onChange={(e) => setSeachInput(e.target.value)} 
                            />
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <button 
                                    type='button' 
                                    className='btn btn-primary' 
                                    id='delete-btn'
                                    onClick={handleDelete}
                                    >Deletion</button>
                            </div>
                            <div className='col-4'>
                                <button 
                                    type='button' 
                                    className='btn btn-outline-primary' 
                                    id='search-btn'
                                    onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}