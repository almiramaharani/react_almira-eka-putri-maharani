import React, { useState } from 'react';
import CreateProduct from "./CreateProduct";
import "./ListProduct.css";
import Modal from 'react-bootstrap/Modal';


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const ProductTable = ({ tableData, deleteProduct }) => {
    console.log(tableData);
    return (
        <>
            <div className='content-main text-center'>
                <h2 className='page-title mt-3'>List Product</h2>
                <table className='table-sm table-striped m-3'>
                    <thead style={{ boxShadow: "0px 1px 10px rgba(0,0,0,0.1)" }}>
                        <tr>
                            <th scope='col'>No</th>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Product Category</th>
                            <th scope='col'>Product Freshness</th>
                            <th scope='col'>Product Price</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => {
                            return (
                                <tr key={data.numberProduct}>
                                    <td>{data.numberProduct}</td>
                                    <td>{data.productName}</td>
                                    <td>{data.category}</td>
                                    <td>{data.productFreshnessRadio}</td>
                                    <td>{data.price}</td>
                                    <td>
                                        <div className='column'>
                                            <button id='delete-btn' className='me-2' onClick={() => {deleteProduct(data.numberProduct)}}>Delete</button>
                                            <button id='edit-btn'>
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

function ListProduct () {
    const [dataTable, setDataTable] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    

    const addProductToTable = (product) => {
        setDataTable([
            ...dataTable,
            product,]   
        );
    }

    const handleSearch = () => {
        
        if (searchInput === '') {
            alert("Please enter the keywords you want to search for!");
            return;
        }

        const result = dataTable.find(data => data.productName === searchInput);
        alert(JSON.stringify(result ? result : "Product not found", null, 2));
        setSearchInput('');
    }

    const handleDelete = (numberProduct) => {
        if (dataTable.length === 0) return;

        const updatedTable = dataTable.filter((product) => product.numberProduct !== numberProduct);

        setDataTable(updatedTable);
    }

    return (
        <>
            <CreateProduct addProductToTable={addProductToTable} />
            <ProductTable tableData={dataTable} deleteProduct={handleDelete}/>
            <div className='row mt-4 ms-2'>
                <div className='form-outline col-4 mb-2'>
                    <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        className='form-control' 
                        placeholder='Search by Product Name'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)} 
                    />
                </div>
                <div className='col-2 ms-2'>
                    <button 
                        type='button' 
                        className='btn btn-outline-primary' 
                        id='search-btn'
                        onClick={handleSearch}
                        >Search</button>
                </div>
            </div>
        </>
    )
    
}

export default ListProduct;