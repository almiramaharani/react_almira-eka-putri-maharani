import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, fetchGetProducts } from "../../store/getProductSlice";
import { deleteProduct } from '../../store/deleteProductSlice';

import CreateProduct from "../create-product/CreateProduct";
import ProductSearch from '../ProductSearch';
import "./ListProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductTable = () => {
    const navigate = useNavigate();
    const products = useSelector(selectProduct).data;
    console.log(products);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchGetProducts());
        };
        fetchData();
    }, [dispatch]);

    const handleDetailProduct = (id) => {
        navigate(`/product/${id}`)
    }

    const handleEditProduct = (id) => {
        navigate(`/edit-product/${id}`)
    }

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
            .then(() => {
                dispatch(fetchGetProducts());
            })
    };


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
                                            onClick={() => {handleDeleteProduct(data.id)}}
                                            >Delete</button>
                                        <button id='edit-btn' className='me-2' onClick={() => {handleEditProduct(data.id)}}>
                                            Edit
                                        </button>
                                        <button id='detail-btn'  onClick={() => {handleDetailProduct(data.id)}}>
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
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchGetProducts());
        };
        fetchData();
    }, [dispatch]);
    return (
        <>
            <CreateProduct />
            <ProductTable />
            <ProductSearch/>
        </>
    )
    
}

export default ListProduct;