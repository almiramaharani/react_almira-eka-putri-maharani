import { useState } from 'react';

import './style.css';
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ContactModal = ({ show, handleClose, contactData }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Detail Contact
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>First Name: {contactData.fname}</p>
                <p>Last Name: {contactData.lname}</p>
                <p>Email Name: {contactData.email}</p>
                <p>Message: {contactData.message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    });

    const handleContact = (event) => {
        event.preventDefault();

        if(data.fname.trim() === '' || data.lname.trim() === '' 
            || data.email.trim() === '' || data.message.trim() === ''
        ) {
            alert('Harap isi semua input');
            return;
        }

        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setData({
            fname: '',
            lname: '',
            email: '',
            message: ''
        })
    };

    return (
        <>
            <div id='contact'>
                <div className='contact-container-bg'>
                    <div className='d-flex flex-col justify-content-around align-items-center pt-4 ms-3 container-contact'>
                        <div className='row contact-desc'>
                            <h2 style={{height: '1em'}} className='mb-4'>Contact Me</h2>
                            <p>
                                Whether you have a question, a comment, or just want to chat, you can reach out to me through the contact form on this page.
                            </p>
                        </div>
                        <div className='row pt-5'>
                            <form action="" id='form-contact'>
                                <div className='row mb-2'>
                                    <div className='col-6'>
                                        <label htmlFor="fname" className='form-label'>First Name</label>
                                        <input 
                                            id='fname'
                                            type="text" 
                                            className='form-control' 
                                            name= 'fname'
                                            value={data.fname}
                                            onChange={(e) => setData({...data, fname: e.target.value})}
                                            required />
                                    </div>
                                    <div className='col-6'>
                                        <label htmlFor="lname" className='form-label'>Last Name</label>
                                        <input 
                                            id='lname' 
                                            type="text" 
                                            className='form-control' 
                                            name= 'fname'
                                            value={data.lname}
                                            onChange={(e) => setData({...data, lname: e.target.value})}
                                            required />
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="email" className='form-label'>Email Address</label>
                                    <input 
                                        id='email' 
                                        type="email" 
                                        className='form-control' 
                                        name='email'
                                        value={data.email}
                                        onChange={(e) => setData({...data, email: e.target.value})}
                                        required />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="message" className='form-label'>Your Message</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        className='form-control' 
                                        cols="30" 
                                        rows="10" 
                                        value={data.message}
                                        onChange={(e) => setData({...data, message: e.target.value})}
                                        required></textarea>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button type='submit' className='btn-custom mt-4 align-self-center' onClick={handleContact}>Contact me</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ContactModal 
                show={showModal}
                handleClose={handleCloseModal}
                contactData={data}
            />

        </>
    )
}