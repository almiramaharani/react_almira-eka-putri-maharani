import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EditFormModal({ show, handleClose, product, handleUpdateProduct }) {
    const [editedProduct, setEditedProduct] = useState({
        ...product,
    });

    const handleChangeField = (event) => {
        const { name, value } = event.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value,
        });
    }
    
    const handleSave = () => {
        const updatedProduct = {
            ...editedProduct,
            numberProduct: product.numberProduct,
            price: editedProduct.price ? editedProduct.price : product.price,
            productName: editedProduct.productName ? editedProduct.productName : product.productName,
            image: editedProduct.image ? editedProduct.image : product.image,
            addDesc: product.addDesc,
            category: product.category,
            productFreshnessRadio: product.productFreshnessRadio,
        };
        handleUpdateProduct(updatedProduct);
        handleClose();
        setEditedProduct({});     
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor="productName" className='form-label'>Product Name</label>
                            <input 
                                type="text"
                                className='form-control'
                                id='productName'
                                name='productName'
                                value={editedProduct.productName}
                                onChange={handleChangeField}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="price" className='form-label'>Price</label>
                            <input 
                                type="number" 
                                className='form-control'
                                id='price'
                                name='price'
                                value={editedProduct.price}
                                onChange={handleChangeField}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="image" className='form-label'>Image</label>
                            <input 
                                type="file" 
                                className='form-control'
                                id='image'
                                name='image'
                                value={editedProduct.image}
                                onChange={handleChangeField}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='secondary'
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        variant='primary'
                        onClick={handleSave}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditFormModal;

