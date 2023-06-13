import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';


const ListOfSchedules = () => {

  const [edit, setEdit] = useState(false);
    const [user, setUser] = useState(null);

    const [search, setSearch] = useState('');

    const navigate = useNavigate();
    const databaseId = useParams();

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);

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
            <div className='table-data'>
                <h2>List of all schedules:</h2>
                <form>
                    <div className='create-search-div'>
                        <input
                            className='input-user search'
                            placeholder = 'Search Filter'
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                            />
            <button 
                    type='button'
                    className='add-button'
                    onClick={() => navigate(`/schedules/${databaseId.databaseId}/add`)}> + </button>
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
                                        <td className={current.accountActive ? 'table-active' : 'table-unactive'}>{current.accountActive ? 'Active' : 'Non Active'}</td>
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
  )
}

export default ListOfSchedules
