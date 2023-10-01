import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === null) {
            localStorage.setItem('isLoggedIn', 'false');
        }
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        if(username !== "" && password !== "") {
            localStorage.setItem('isLoggedIn', 'true');
            setUsername('');
            setPassword('');

            navigate('/');
        } else {
            localStorage.setItem('isLoggedIn', 'false');
        }
    };

    return (
        <>
            <div className="containerStyle">
                <div className="formStyle">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className='col pt-3'>
                            <label htmlFor="username" className='form-label'>Username</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='username' 
                                name='username'
                                onChange={(e) => setUsername(e.target.value)}
                                required />
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input 
                                type="password" 
                                className='form-control' 
                                id='password' 
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <button type='submit' className='btn btn-primary mt-3'>Login</button>
                    </form>

                </div>
            </div>
        </>
    )
}
