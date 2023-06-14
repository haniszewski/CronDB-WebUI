import React, { useState } from 'react'
import { createUser } from '../../services/users/userService';

const CreateUser = () => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageText, setMessageText] = useState('');
    
    const addUser = async () => {
        if(password === confirmPassword){
            try {
                await createUser(login, password, email, phone);
                window.location.reload();
            } catch (error){
                console.log('Error creating user:', error);
            }
        } else {
            console.log ('Passwords are not the same!')
        }
    }


    return (
            <div className='form-block'>
                <h2>Create New User:</h2>
                <form>

                    { message ? (
                        <div className={ error ? 'error-container' : 'message-conteiner'}>
                            <p>{message}</p>
                        </div>
                    ): (<div className='about-conteiner'>
                        <p>Here you can add new user!</p>
                    </div>)}
                    
                    <input className='input-user' type="text" placeholder='Username' id="username" name="username" onChange={(e) => {setLogin(e.target.value)}} required/>

                    <input className='input-user' type="password" placeholder='Password' id="password" name="password" onChange={(e) => {setPassword(e.target.value)}} required/>

                    <input className='input-user' type="password" placeholder='Confirm Password' id="confirm" name="confirm" onChange={(e) => {setConfirmPassword(e.target.value)}} required/>

                    <input className='input-user' type="email" placeholder='Email' id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} required/>

                    <input className='input-user' type="tel" placeholder='Phone Number' id="phoneNumber" name="phone" onChange={(e) => {setPhone(e.target.value)}} required/>

                    <button
                        type='button'
                        onClick={addUser}

                        className='button-create'
                    >Create</button>
                </form>
            </div>
  )
}

export default CreateUser
