import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CronDB from '../../assets/images/cron.mp4';
import logo from '../../assets/images/logo.png';
import { login } from '../../services/auth/authService';
import { setToken } from '../../services/auth/authHelper';

import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const navigate = useNavigate();
    
    const checkUser = async () => {
        const data = await login(username, password);
        console.log(data.message);
        if(data.token != null){
            const token = data.token;
            setToken(token);
            navigate('/databases');
        } else {
            setError(true);
            setErrorMsg('Invalid login or password!');
        }
    }

    return (
        <div className='container'>
            <div className='video-container'>
                <video
                    src={CronDB}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                />

                <div className='form-container'>
                <div className="login-box">
                    <div className='image-container'>
                        <img src={logo} width='250px' alt='logo'/>
                    </div>
                    <form>
                        <div className="user-box">
                            <label className='label-input' htmlFor='username'>Username</label>
                            <input
                                id='username'
                                type="text"
                                onChange={(e) => {setUsername(e.target.value)}}
                                required=""/>
                        </div>
                        <div className="user-box">
                            <label className='label-input' htmlFor='password'>Password</label>
                            <input 
                                id='password'
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required/>
                        </div>
                        { error && (
                            <div className='error-container'>
                                <p>Sign-in failed!</p>
                                <p>{errorMsg}</p>
                            </div>

                        )}  
                        <button
                            type='button'
                            onClick={checkUser}
                            className='button-sign-in'
                        >
                            Sign In
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login