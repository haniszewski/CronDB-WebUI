import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

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
            id: 4,
            username: 'Some',
            email: 'some@gmail.com',
            isActive: 0
        },
        {
            id: 5,
            username: 'Jack',
            email: 'jack@gmail.com',
            isActive: 0
        },
        {
            id: 6,
            username: 'Johny',
            email: 'johny@gmail.com',
            isActive: 1
        },
        {
            id: 7,
            username: 'Rodrigo',
            email: 'rodrigo@gmail.com',
            isActive: 1
        },
        {
            id: 8,
            username: 'Anon',
            email: 'anon@gmail.com',
            isActive: 1
        },
        {
            id: 9,
            username: 'John',
            email: 'john@gmail.com',
            isActive: 1
        },
        {
            id: 10,
            username: 'Tony',
            email: 'tony@gmail.com',
            isActive: 1
        },
        {
            id: 11,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 12,
            username: 'User',
            email: 'user@gmail.com',
            isActive: 1,
        },
        {
            id: 13,
            username: 'Profile',
            email: 'profile@gmail.com',
            isActive: 1
        },
        {
            id: 14,
            username: 'Some',
            email: 'some@gmail.com',
            isActive: 0
        },
        {
            id: 15,
            username: 'Jack',
            email: 'jack@gmail.com',
            isActive: 0
        },
        {
            id: 16,
            username: 'Johny',
            email: 'johny@gmail.com',
            isActive: 1
        },
        {
            id: 17,
            username: 'Rodrigo',
            email: 'rodrigo@gmail.com',
            isActive: 1
        },
        {
            id: 18,
            username: 'Anon',
            email: 'anon@gmail.com',
            isActive: 1
        },
        {
            id: 19,
            username: 'John',
            email: 'john@gmail.com',
            isActive: 1
        },
        {
            id: 20,
            username: 'Tony',
            email: 'tony@gmail.com',
            isActive: 1
        },
        {
            id: 21,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 22,
            username: 'User',
            email: 'user@gmail.com',
            isActive: 1,
        },
        {
            id: 23,
            username: 'Profile',
            email: 'profile@gmail.com',
            isActive: 1
        },
        {
            id: 24,
            username: 'Some',
            email: 'some@gmail.com',
            isActive: 0
        },
        {
            id: 25,
            username: 'Jack',
            email: 'jack@gmail.com',
            isActive: 0
        },
        {
            id: 26,
            username: 'Johny',
            email: 'johny@gmail.com',
            isActive: 1
        },
        {
            id: 27,
            username: 'Rodrigo',
            email: 'rodrigo@gmail.com',
            isActive: 1
        },
        {
            id: 28,
            username: 'Anon',
            email: 'anon@gmail.com',
            isActive: 1
        },
        {
            id: 29,
            username: 'John',
            email: 'john@gmail.com',
            isActive: 1
        },
        {
            id: 30,
            username: 'Tony',
            email: 'tony@gmail.com',
            isActive: 1
        },
        {
            id: 31,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 32,
            username: 'User',
            email: 'user@gmail.com',
            isActive: 1,
        },
        {
            id: 33,
            username: 'Profile',
            email: 'profile@gmail.com',
            isActive: 1
        },
        {
            id: 34,
            username: 'Some',
            email: 'some@gmail.com',
            isActive: 0
        },
        {
            id: 35,
            username: 'Jack',
            email: 'jack@gmail.com',
            isActive: 0
        },
        {
            id: 36,
            username: 'Johny',
            email: 'johny@gmail.com',
            isActive: 1
        },
        {
            id: 37,
            username: 'Rodrigo',
            email: 'rodrigo@gmail.com',
            isActive: 1
        },
        {
            id: 38,
            username: 'Anon',
            email: 'anon@gmail.com',
            isActive: 1
        },
        {
            id: 39,
            username: 'John',
            email: 'john@gmail.com',
            isActive: 1
        },
        {
            id: 40,
            username: 'Tony',
            email: 'tony@gmail.com',
            isActive: 1
        },
        {
            id: 41,
            username: 'Admin',
            email: 'tonysorokaol@gmail.com',
            isActive: 1,
        },
        {
            id: 42,
            username: 'User',
            email: 'user@gmail.com',
            isActive: 1,
        },
        {
            id: 43,
            username: 'Profile',
            email: 'profile@gmail.com',
            isActive: 1
        },
        {
            id: 44,
            username: 'Some',
            email: 'some@gmail.com',
            isActive: 0
        },
        {
            id: 45,
            username: 'Jack',
            email: 'jack@gmail.com',
            isActive: 0
        },
        {
            id: 46,
            username: 'Johny',
            email: 'johny@gmail.com',
            isActive: 1
        },
        {
            id: 47,
            username: 'Rodrigo',
            email: 'rodrigo@gmail.com',
            isActive: 1
        },
        {
            id: 48,
            username: 'Anon',
            email: 'anon@gmail.com',
            isActive: 1
        },
        {
            id: 49,
            username: 'John',
            email: 'john@gmail.com',
            isActive: 1
        },
        {
            id: 50,
            username: 'Tony',
            email: 'tony@gmail.com',
            isActive: 1
        },
    ];

    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState(null);

    const [search, setSearch] = useState('');

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState(list);

    const PER_PAGE = 10;
    const RANGE_PAGE = 2;
    const MARG_PAGE = 2;
    const offset = currentPage * PER_PAGE;

    const getPageCount = () => {
        if(search === '') {
            return Math.ceil(data.length / PER_PAGE);
        } else {
            return Math.ceil(data.filter((item) => {
                return item.username.toLowerCase().includes(search) || item.email.toLowerCase().includes(search);
            }).length / PER_PAGE);
        }
    }

    const handlePageClick = ({selected}) => {
        setCurrentPage(selected);
    }

    const editUser = (current) => {
            setUser(current);
    }
    
    const deleteUser = (id) => {
        console.log('deleted: ' + id);
    }

    return (
        <div className='container-admin'>
            {edit ? (user && <EditUser user={user}/>) : <CreateUser/>}
            <div className='table-block'>
                <h2>List of all users:</h2>    
                <form>
                    <div className='create-search-div'>
                        <input
                            className='input-user search'
                            placeholder = 'Search Filter'
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                            />
                        {edit ? 
                        (<button
                            type='button' 
                            className='table-user-button margin'
                            onClick={() => setEdit(false)}
                            >Create New</button>) : null
                        }
                    </div>
                </form>
                <div className='responsive-table'>
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
                            data.filter((item) => {
                                return search.toLowerCase() === '' ? item :
                                    (item.username.toLowerCase().includes(search) || item.email.toLowerCase().includes(search));
                            }).slice(offset, offset + PER_PAGE).map((current) => {
                                return (
                                    <tr key={current.id}>
                                        <td>{current.username}</td>
                                        <td>{current.email}</td>
                                        <td className={current.isActive ? 'table-active' : 'table-unactive'}>{current.isActive ? 'Active' : 'Non Active'}</td>
                                        <td>
                                            <button
                                                type='button'
                                                className='table-user-button'
                                                onClick={() => {editUser(current); setEdit(true)}}
                                                >Edit
                                            </button>
                                            <button
                                                type='button'
                                                className='table-user-button'
                                                onClick={() => deleteUser(current.id)}
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
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    pageCount={getPageCount()}
                    pageRangeDisplayed={RANGE_PAGE}
                    marginPagesDisplayed={MARG_PAGE}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination-link"}
                    nextLinkClassName={"pagination-link"}
                    pageClassName={"pagination-link"}
                    breakClassName={"pagination-link-break"}
                    disabledLinkClassName={"pagination-link-disabled"}
                    activeClassName={"pagination-link-active"}/>
            </div>
        </div>
    )
}

export default MainUsers
