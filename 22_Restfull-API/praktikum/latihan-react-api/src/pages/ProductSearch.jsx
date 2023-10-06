import React, { useState } from 'react';
import { useSelector } from "react-redux";


import { selectProduct } from "../store/getProductSlice";

import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';

export default function ProductSearch() {
    const [ showModal, setShowModal ] = useState(false);
    const [ searchInput, setSearchInput ] = useState('');
    const [ result, setResult ] = useState(null);

    const products = useSelector(selectProduct).data;

    const handleSearch = () => {
        const product = products.find(data => data.productName === searchInput);
        setResult(product);
        setShowModal(true);
        setSearchInput('');
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className='row mt-4 ms-2'>
                <div className='form-outline col-4 mb-2'>
                    <input 
                        type="text" 
                        name="search" 
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
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Search Product Result
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {result ? (
                        <>
                            <div>
                                <p><strong>Product Name:</strong> {result.productName}</p>
                                <p><strong>Price:</strong> {result.price}</p>
                                <p><strong>Product Category:</strong> {result.category}</p>
                                <p><strong>Product Freshness:</strong> {result.freshness}</p>
                                <p><strong>Product Image URL:</strong> {result.image}</p>
                            </div>
                        </>
                    ) : (
                        <p>Product not found</p>
                    )

                    }
                </Modal.Body>
            </Modal>
        </>
    )
}