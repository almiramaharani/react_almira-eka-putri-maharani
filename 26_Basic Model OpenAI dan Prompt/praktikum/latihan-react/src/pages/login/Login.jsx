import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const dummyUser = {username: 'admin', password: 'password'};
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === null) {
            localStorage.setItem('isLoggedIn', 'false');
        }
    }, []);

    const handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;

        if (name === 'username') {
            if(value === "") {
                setUsernameError('Username is required');
            } else {
                setUsername(value);
                setUsernameError("");
            }
        }

        if (name === 'password') {
            if (value === "") {
                setPasswordError('Password is required');
            } else {
                setPassword(value);
                setPasswordError('');
            }
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();

        if(user && user.username === username && user.password===password) {
            localStorage.setItem('isLoggedIn', 'true');
            setUsername('');
            setPassword('');

            navigate('/');
        } else if (username === dummyUser.username && password === dummyUser.password){
            localStorage.setItem('user', JSON.stringify(dummyUser));
            localStorage.setItem('isLoggedIn', 'true');
            setUsername('');
            setPassword('');

            navigate('/');
        } else {
            console.log(username);
            console.log(password);
            localStorage.setItem('isLoggedIn', 'false');
            alert("Invalid username or password");
        }
    };

    return (
        <>
            <div className="containerStyle">
                <div className="formStyle">
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className='col pt-3'>
                            <label htmlFor="username" className='form-label'>Username</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='username' 
                                name='username'
                                // value={username}
                                onChange={handleChange}
                                />
                            <div className='error-message'>{usernameError}</div>
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input 
                                type="password" 
                                className='form-control' 
                                id='password' 
                                name='password'
                                // value={password}
                                onChange={handleChange}
                                />
                            <div className='error-message'>{passwordError}</div>
                        </div>
                        <button type='submit' className='btn btn-primary mt-3'>Login</button>
                    </form>

                </div>
            </div>
        </>
    )
}