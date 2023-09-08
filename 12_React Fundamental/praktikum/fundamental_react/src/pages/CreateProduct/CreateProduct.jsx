import React from 'react';
import bootstrapLogo from '../../components/img/bootstrap-logo.svg.png';
import './CreateProduct.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateProduct () {
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
                    <form id='product-form'>
                        <div className='col pt-3'>
                            <label htmlFor="productName" className='form-label'>Product name</label>
                            <input type="text" className='form-control' id='productName' name='productName' required />
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="category" className='form-label'>Product Category</label>
                            <div className='input-group mb-3'>
                                <select name="category" id="category" className='form-select' defaultValue="" required>
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
                                <input type="file" className='form-control' id='image' name='image' style={{color: "#0D6EFD"}} required />
                            </div>
                        </div>
                        <div className='col pb-3'>
                            <label htmlFor="productFreshness" className='form-label'>Product Freshness</label>
                            <div className='form-check'>
                                <input type="radio" className='form-check-input' name='productFreshnessRadio' id='brandNew' value={"Brand New"} required/>
                                <label htmlFor="brandNew" className='form-check-label'>Brand New</label>
                            </div>
                            <div className='form-check'>
                                <input type="radio" className='form-check-input' name='productFreshnessRadio' id='secondHand' value={"Second Hand"} required/>
                                <label htmlFor="secondHand" className='form-check-label'>Second Hand</label>
                            </div>
                            <div className='form-check'>
                                <input type="radio" className='form-check-input' name='productFreshnessRadio' id='refufbished' value={"Refufbished"} required/>
                                <label htmlFor="refufbished" className='form-check-label'>Refufbished</label>
                            </div>
                        </div>
                        <div className='col'>
                            <label htmlFor="addDesc" className='form-label'>Additional Description</label>
                            <textarea className='form-control' name="addDesc" id="addDesc" cols="30" rows="5" required></textarea>
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="price" className='form-label'>Product Price</label>
                            <input type="number" name="price" id="price" className='form-control' placeholder='$ 1' required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-3" id="submit-btn">Submit</button> {/* letak button submit masih salah */}
                    </form>
                </div>
            </div>            
        </>
    )
}