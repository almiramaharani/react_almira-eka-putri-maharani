import React, { useState } from 'react';
import bootstrapLogo from '../../components/img/bootstrap-logo.svg.png';
import './CreateProduct.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateProduct ({ onSubmit }) {
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        image: null,
        productFreshnessRadio: "",
        addDesc: '',
        price: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const { productName, category, image, productFreshnessRadio, addDesc, price } = formData;
        
        const isProductNameValid = productName.trim() !== '' && !(productName > 25 || /[/@#{}]/.test(productName));
        const isCategoryValid = category.trim() !== '';
        const isImageSelected = !!image;
        const isProductFreshnessValid = !!productFreshnessRadio;
        const isAddDescValid = addDesc.trim() !== '';
        const isPriceValid = !isNaN(price) && price > 0;

        if (!isProductNameValid) {
            document.getElementById('productName').classList.add('invalid-field');
        } else {
            document.getElementById('productName').classList.remove('invalid-field');
        }
        
        if (!isPriceValid) {
            document.getElementById('price').classList.add('invalid-field');
        } else {
            document.getElementById('price').classList.remove('invalid-field');
        }

        setIsFormValid(
            isProductNameValid && isCategoryValid && 
            isProductFreshnessValid && isImageSelected &&
            isAddDescValid && isPriceValid
        );
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({
            productName: '',
            category: '',
            image: null,
            productFreshnessRadio: "",
            addDesc: '',
            price: ''
        });
        setIsFormValid(false);
    };

    return (
        <>
            <div className="mainContainer">
                {/* Content */}
                <div className="content">
                    <img src={bootstrapLogo} alt="Bootstrap logo" />
                    <h2 style={ {paddingTop: "10px"} }>Create Product</h2>
                    <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a 
                        <br/>validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
                {/* Form */}
                <div className="formContainer">
                    <h3>Detail Product</h3>
                    <form id='product-form' onSubmit={handleSubmit}>
                        <div className='col pt-3'>
                            <label htmlFor="productName" className='form-label'>Product name</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='productName' 
                                name='productName'
                                value={formData.productName}
                                onChange={handleInputChange}
                                onBlur={validateForm}
                                required />
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="category" className='form-label'>Product Category</label>
                            <div className='input-group mb-3'>
                                <select 
                                    name="category" 
                                    id="category" 
                                    className='form-select' 
                                    defaultValue="" 
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    onBlur={validateForm}
                                    required
                                >
                                    <option value="" disabled>Choose...</option>
                                    <option value="electronic">Electronic</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="food">Food</option>
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <label htmlFor="image" className='form-label'>Image of Product</label>
                            <div className='input-group mb-3'>
                                <input 
                                    type="file" 
                                    className='form-control' 
                                    id='image' 
                                    name='image' 
                                    onChange={handleInputChange}
                                    onBlur={validateForm}
                                    style={{color: "#0D6EFD"}} required />
                            </div>
                        </div>
                        <div className='col pb-3'>
                            <label htmlFor="productFreshness" className='form-label'>Product Freshness</label>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    className='form-check-input' 
                                    name='productFreshnessRadio' 
                                    id='brandNew' 
                                    value="Brand New" 
                                    onChange={handleInputChange}
                                    onBlur={validateForm}
                                    required
                                />
                                <label htmlFor="brandNew" className='form-check-label'>Brand New</label>
                            </div>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    className='form-check-input' 
                                    name='productFreshnessRadio' 
                                    id='secondHand' 
                                    value="Second Hand"
                                    onChange={handleInputChange}
                                    onBlur={validateForm}    
                                    required
                                />
                                <label htmlFor="secondHand" className='form-check-label'>Second Hand</label>
                            </div>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    className='form-check-input' 
                                    name='productFreshnessRadio' 
                                    id='refufbished' 
                                    value="Refufbished" 
                                    onChange={handleInputChange}
                                    onBlur={validateForm}
                                    required
                                />
                                <label htmlFor="refufbished" className='form-check-label'>Refufbished</label>
                            </div>
                        </div>
                        <div className='col'>
                            <label htmlFor="addDesc" className='form-label'>Additional Description</label>
                            <textarea 
                                className='form-control' 
                                name="addDesc" 
                                id="addDesc"
                                value={formData.addDesc}
                                onChange={handleInputChange} 
                                onBlur={validateForm}
                                required></textarea>
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="price" className='form-label'>Product Price</label>
                            <input 
                                type="number"  
                                name="price" 
                                id="price" 
                                className='form-control' 
                                value={formData.price}
                                onChange={handleInputChange}
                                onBlur={validateForm}
                                placeholder='$ 1' required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-3" id="submit-btn" disabled={!isFormValid}>Submit</button> {/* letak button submit masih salah */}
                    </form>
                </div>
            </div>            
        </>
    )
}