import React from "react";
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addProduct } from "../../store/postProductSlice";
import {fetchGetProducts } from "../../store/getProductSlice";

import bootstrapLogo from '../../assets/bootstrap-logo.svg.png';
import './CreateProduct.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "../Greeting";

function generateRandomNumber() {
    return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
}

export default function CreateProduct() {
    const dispatch = useDispatch();

    const initialValues = {
        id: null,
        productName: '',
        category: '',
        image: "",
        freshness: '',
        addDesc: '',
        price: 0,
    };

    const onSubmit = (values, { resetForm }) => {
        const randomNum = generateRandomNumber();
        const newProduct = {
            id: randomNum,
            productName: values.productName,
            category: values.category,
            image: values.image,
            freshness: values.freshness,
            addDesc: values.addDesc,
            price: values.price,
        };

        dispatch(addProduct(newProduct))
            .then(() => {
                dispatch(fetchGetProducts());
            })

        alert("Successfully added new product");
        resetForm();
    };

    const validationSchema = Yup.object({
        productName: Yup.string()
            .required('Product name is required')
            .test('special-char', 'Invalid characters in product name', (value) => {
                const regex = /[@#{}[\]/]/;
                return !regex.test(value);
            })
            .max(10, 'Product name must not exceed 10 characters'),

        image: Yup.string()
            .required('Image URL is required')
            .url('Insert a valid URL')
            .matches(/\.(jpeg|jpg|gif|png)$/, 'Invalid type of image'),

        category: Yup.string()
            .required('Product category is required'),
        
        addDesc: Yup.string()
            .required("Description of product is required"),
        
        price: Yup.number()
            .required('Price is required')
            .min(10, 'Price must be at least 10'),
        
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <div className="mainContainer">
            <div className="content">
                <img src={bootstrapLogo} alt="Bootstrap Logo" />
                <Greeting/>
            </div>
            <div className="formContainer">
                <h3>Add Product</h3>
                <form id="product-form" onSubmit={formik.handleSubmit}>
                    <div className="col pt-3">
                        <label htmlFor="productName" className="form-label">Product name</label>
                        <input 
                            type="text" 
                            className={`form-control ${formik.errors.productName ? 'is-invalid' : ''}`}
                            id="productName"
                            name="productName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.productName}
                        />
                        {formik.touched.productName && (
                            <div className="error-message">{formik.errors.productName}</div>
                        )}
                    </div>

                    <div className="col pt-3">
                        <label htmlFor="category" className="form-label">Product Category</label>
                        <div className="input-group mb-3">
                            <select 
                                name="category" 
                                id="category"
                                className={`form-select ${formik.errors.category ? 'is-invalid' : ''}`}  
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.category}
                            >
                                <option value="" disabled>Choose...</option>
                                <option value="electronic">Electronic</option>
                                <option value="fashion">Fashion</option>
                                <option value="food">Food</option>
                            </select>
                            {formik.touched.category && (
                                <div className="error-message">{formik.errors.category}</div>
                            )}
                        </div>
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
                        {formik.touched.image && formik.errors.image && (
                            <div className="error-message">{formik.errors.image}</div>
                        )}
                    </div>

                    <div className="col pt-3">
                        <label className="form-label">Product Freshness</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="freshness"
                                id="brandNew"
                                value="Brand New"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.freshness === "Brand New"}
                            />
                            <label htmlFor="brandNew" className="form-check-label">
                                Brand New
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="freshness"
                                id="secondHand"
                                value="Second Hand"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.freshness === "Second Hand"}
                            />
                            <label htmlFor="secondHand" className="form-check-label">
                                Second Hand
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="freshness"
                                id="refurbished"
                                value="Refurbished"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.freshness === "Refurbished"}
                            />
                            <label htmlFor="refurbished" className="form-check-label">
                                Refurbished
                            </label>
                        </div>
                        {formik.touched.freshness && formik.errors.freshness && (
                            <div className="error-message">{formik.errors.freshness}</div>
                        )}
                    </div>

                    <div className="col pt-3">
                        <label htmlFor="addDesc" className="form-label">Additional Description</label>
                        <textarea
                            className={`form-control ${formik.errors.addDesc ? 'is-invalid' : ''}`}
                            name="addDesc"
                            id="addDesc"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.addDesc}
                            required
                        ></textarea>
                        {formik.touched.addDesc && formik.errors.addDesc && (
                            <div className="error-message">{formik.errors.addDesc}</div>
                        )}
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
                        {formik.touched.price && formik.errors.price && (
                            <div className="error-message">{formik.errors.price}</div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mt-3" id="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}