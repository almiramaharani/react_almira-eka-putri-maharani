import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, fetchGetProducts } from "../store/productSlice";

import CreateProduct from "./CreateProduct";
import "./ListProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductTable = () => {
    const navigate = useNavigate();
    const products = useSelector(selectProduct).data;
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchGetProducts());
        };
        fetchData();
    }, [dispatch]);

    const handleDetailProduct = (data) => {
        console.log(data);
        navigate(`/product/${data.id}`,
                    {state: data}
        )
    }

    const handleEditProduct = (id) => {
        navigate(`/edit-product/${id}`)
    }


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
                            <th scope='col'>Product Image</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.productName}</td>
                                <td>{data.category}</td>
                                <td>{data.freshness}</td>
                                <td>{data.price}</td>
                                <td>{data.image}</td>
                                <td>
                                    <div className='column'>
                                        <button id='delete-btn' className='me-2' 
                                            // onClick={() => {dispatch(handleDelete(data.id))}}
                                            >Delete</button>
                                        <button id='edit-btn' className='me-2' onClick={() => {handleEditProduct(data.id)}}>
                                            Edit
                                        </button>
                                        <button id='detail-btn'  onClick={() => {handleDetailProduct(data)}}>
                                            Detail
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

function ListProduct () {
    const products = useSelector(selectProduct).data;
    
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {    
        if (searchInput === '') {
            alert("Please enter the keywords you want to search for!");
            return;
        }
        console.log(products);
        const result = products.find(data => data.productName === searchInput);
        alert(JSON.stringify(result ? result : "Product not found", null, 2));
        setSearchInput('');
    }

    return (
        <>
            <CreateProduct />
            <ProductTable />
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