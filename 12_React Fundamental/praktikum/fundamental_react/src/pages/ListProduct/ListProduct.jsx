import React from 'react';
import "./ListProduct.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListProduct() {
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
                            <th scope='col'>Image of Product</th>
                            <th scope='col'>Product Freshness</th>
                            <th scope='col'>Additional Description</th>
                            <th scope='col'>Product Price</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div className='input-group'>
                    <div className='row m-3'>
                        <div className='form-outline mb-2' style={{width: "60%"}}>
                            <input type="search" name="search" id="search" className='form-control' placeholder='Search by Product Name' />
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <button type='button' className='btn btn-primary' id='delete-btn'>Deletion</button>
                            </div>
                            <div className='col-4'>
                                <button type='button' className='btn btn-outline-primary' id='search-btn'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}