import React, { Component } from 'react';
import bootstrapLogo from '../../components/img/bootstrap-logo.svg.png';
import './CreateProduct.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productName: '',
            category: '',
            image: '',
            productFreshnessRadio: '',
            addDesc: '',
            price: '',
            search: '',
            isFormValid: false
        };
    }

    addNewproduct = (event) => {
        event.preventDefault();

        const {
            productName,
            category,
            image,
            productFreshnessRadio, 
            addDesc,
            price,
        } = this.state;

        const product = {
            ProductName: productName,
            ProductCategory: category,
            ProductImage: image,
            ProductFreshness: productFreshnessRadio,
            AdditionalDescription: addDesc,
            ProductPrice: parseFloat(price),
        };

        this.setState((prevState) => ({
            products: [...prevState.products, product],
        }));

        this.props.addProductToTable(product);

        alert("Successfully added new product");

        this.setState({
            productName: '',
            category: '',
            image: '',
            productFreshnessRadio: '',
            addDesc: '',
            price: '',
        });
        document.getElementById('image').value = '';
        const radioElements = document.getElementsByName('productFreshnessRadio');
        radioElements.forEach((radio) => {
            if (radio.checked) {
                radio.checked = false; 
            }
        });
        this.state.isFormValid = false;
    };

    handleChangeField = (event) => {
        const { name, value } = event.target;
        let isFormValid = true;

        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA'){

            if (name === 'productName') {
                if (value.length > 25 || /[/@#{}]/.test(value)) {
                    isFormValid = false;
                }
            }

            if (name === 'price') {
                if (value <= 0 || isNaN(value)) {
                    isFormValid = false;
                } 
            }

            event.target.classList.toggle('invalid-field', !isFormValid);
        }

        const formFields = 
            this.state.productName && 
            this.state.category && 
            this.state.image && 
            this.state.productFreshnessRadio && 
            this.state.addDesc && 
            this.state.price;

        isFormValid = formFields && isFormValid;
        this.setState({
            [name]: value,
            isFormValid,
        });
    };

   

    render() {
        const {
            productName,
            category,
            addDesc,
            price,
            isFormValid,
        } = this.state;

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
                                <input 
                                    type="text" 
                                    className='form-control' 
                                    id='productName' 
                                    name='productName'
                                    value={productName}
                                    onChange={this.handleChangeField}
                                    required />
                            </div>
                            <div className='col pt-3'>
                                <label htmlFor="category" className='form-label'>Product Category</label>
                                <div className='input-group mb-3'>
                                    <select 
                                        name="category" 
                                        id="category" 
                                        className='form-select' 
                                        value={category}
                                        onChange={this.handleChangeField}
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
                                        style={{color: "#0D6EFD"}} 
                                        onChange={this.handleChangeField}
                                        required />
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
                                        onChange={this.handleChangeField}
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
                                        onChange={this.handleChangeField}
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
                                        onChange={this.handleChangeField}
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
                                    onChange={this.handleChangeField}
                                    value={addDesc}
                                    required></textarea>
                            </div>
                            <div className='col pt-3'>
                                <label htmlFor="price" className='form-label'>Product Price</label>
                                <input 
                                    type="number"  
                                    name="price" 
                                    id="price" 
                                    className='form-control' 
                                    onChange={this.handleChangeField}
                                    value={price}
                                    placeholder='$ 1' required/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-3" id="submit-btn" disabled={!isFormValid} onClick={this.addNewproduct}>Submit</button>
                        </form>
                    </div>
                </div>            
            </>
        )
    }
};

export default CreateProduct;