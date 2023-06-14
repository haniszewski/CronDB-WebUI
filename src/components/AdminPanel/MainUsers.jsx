import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import {getAllUsers} from '../../services/api/userApi'
import { deleteUser } from '../../services/users/userService';

const MainUsers = () => {

    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState(null);

    const [search, setSearch] = useState('');

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllUsers();
                console.log(response);
                setData(response);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    const getUsers = async () => {
        const data = await getAllUsers();
        console.log(data);
  }

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
    
    const deleteHandleUser = async (id) => {
        try{
            const isOk = await deleteUser(id);
            window.location.reload();
        }catch(error){
            console.log(error)
        }
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
                                        <td>{current.login}</td>
                                        <td>{current.email ? current.email : 'None'}</td>
                                        <td className={current.accountActive == 1 ? 'table-active' : 'table-unactive'}>{current.accountActive == 1 ? 'Active' : 'Non Active'}</td>
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
                                                onClick={() => deleteHandleUser(current.id)}
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
                { getPageCount() > PER_PAGE ?
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
                    : null }
            </div>
        </div>
    )
}

export default MainUsers
