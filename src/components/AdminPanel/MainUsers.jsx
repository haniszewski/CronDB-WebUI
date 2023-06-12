import React, { useState } from 'react'

const MainUsers = () => {

    const list = [
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 2,
            username: 'User',
            email: 'user@gmail.com',
            isActive: 1,
        },
        {
            id: 3,
            username: 'Profile',
            email: 'profile@gmail.com',
            isActive: 1
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 1,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
    ];

    const [search, setSearch] = useState('');

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageText, setMessageText] = useState('');

    const addUser = () => {


        if(false){
        validatePassword();

        setMessage(true);
        setMessageText('New user added successfully!')
        }
    }

    const validatePassword = () => {
        if(password === confirmPassword){
            setMessage(false);
            setError(false);
        } else {
            setMessage(true);
            setError(true);
            setMessageText('Passwords do not match!')
        }
    }

    return (
        <div className='container-admin'>
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
                    
                    <input
                        type='submit'
                        onClick={addUser}
                        className='button-create'
                        value='Create'/>
                </form>
            </div>
            <div className='table-block'>
                <h2>List of all users:</h2>    
                <form>
                    <input
                        className='input-user'
                        placeholder = 'Search Filter'
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Username
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Is Active?
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.filter((item) => {
                                return search.toLowerCase() === '' ? item :
                                    (item.username.toLowerCase().includes(search) || item.email.toLowerCase().includes(search));
                            }).map((current) => { 
                                return (
                                    <tr key={current.id}>
                                        <td>{current.username}</td>
                                        <td>{current.email}</td>
                                        <td className={current.isActive ? 'table-active' : 'table-unactive'}>{current.isActive ? 'Active' : 'Non Active'}</td>
                                        <td>
                                            <button
                                                className='table-user-button'
                                                >Edit
                                            </button>
                                            <button
                                                className='table-user-button'
                                                >Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainUsers
