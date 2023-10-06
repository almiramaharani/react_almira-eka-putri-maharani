import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { selectProduct } from "../store/getProductSlice";
import { editProduct } from '../store/editProductSlice';

import './CreateProduct.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditProduct(){
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector(selectProduct).data;
    const productToEdit = products.find((product) => product.id === id);
    const initialValues = {
        productName: productToEdit.productName,
        price: productToEdit.price,
        image: productToEdit.image,
    }

    const onSubmit = (values) => {
        
        const productName= values.productName;
        const price= values.price;
        const image= values.image;
        // console.log(editedProduct);
        dispatch(editProduct({id, productName, price, image}))
            .then(() => {
                navigate(-1);
            });
    };

    const formik = useFormik({
        initialValues,
        onSubmit,

    });

    const handleBack = () => {
        navigate(-1);
    }
    return (
        <>
            <div className="formContainer">
                    <h3>Edit Product</h3>
                    <form id="product-form" onSubmit={formik.handleSubmit}>
                        <div className="col pt-3">
                            <label htmlFor="productName" className='form-label'>Product name</label>
                            <input 
                                type="text" 
                                className={`form-control ${formik.errors.productName ? 'is-invalid' : ''}`}
                                id="productName"
                                name="productName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.productName}
                            />
                        </div>

                        <div className="col pt-3">
                            <label htmlFor="image" className="form-label">Image of Product</label>
                            <input 
                                type="text" 
                                id="image"
                                name="image"
                                className={`form-control ${formik.errors.imageURL ? 'is-invalid' : ''}`}
                                placeholder="Masukkan URL gambar"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.image}
                            />
                        </div>

                        <div className="col pt-3">
                            <label htmlFor="price" className="form-label">Product Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                className={`form-control ${formik.errors.price ? 'is-invalid' : ''}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.price}
                                placeholder="$ 1"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-3" id="submit-btn">
                            Edit
                        </button>
                    </form>
                </div>
        </>
    )
}