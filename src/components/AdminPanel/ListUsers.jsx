import React, { useState } from 'react'

const ListUsers = () => {

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
        }
    ];

    const [search, setSearch] = useState('');
    const [active, setActive] = useState(true);

    return (
        <div className='container-admin'>
            <div className='form-block'>
                <h2>Create New User</h2>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required/>

                    <label for="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="phone" required/>

                    <input type="submit" value="Create User"/>
                </form>
            </div>
            <div className='table-block'>
                    <form>
                        <input
                            className='input-search'
                            placeholder = 'Search Filter'
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                            />
                    </form>
                <table>
                    <thead>
                        <tr>
                            <td>
                                username
                            </td>
                            <td>
                                email
                            </td>
                            <td>
                                isActive
                            </td>
                            <td>

                            </td>
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
                                        <td>{current.isActive}</td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
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

export default ListUsers
