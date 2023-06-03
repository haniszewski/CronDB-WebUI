import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import CronDB from '../../assets/images/cron.mp4';
import logo from '../../assets/images/logo.png';
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);
   
    const navigate = useNavigate();
    
    const checkUser = () => {

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
                <div class="login-box">
                    <div className='image-container'>
                        <img src={logo} width='250px' alt='logo'/>
                    </div>
                    <form>
                        <div className="user-box">
                            <label className='label-input' for='username'>Username</label>
                            <input id='username' type="text" name="" required=""/>
                        </div>
                        <div className="user-box">
                            <label className='label-input' for='password'>Password</label>
                            <input id='password' type="password" name="" required=""/>
                        </div>
                        <div className='error-container'>
                            <p>Sign-in failed!</p>
                            <p> Please check your username and password.</p>
                        </div>
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