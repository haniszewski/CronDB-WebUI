import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import '../../containers/Schedule/Schedules.css';

const ListOfSchedules = () => {

    const [search, setSearch] = useState('');

    const navigate = useNavigate();
    const databaseId = useParams();

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([{
        name: 'Basic schedule',
        cron: '01.01.0101',
        storage: 'ftpstorage nr1'
    }]);

    const PER_PAGE = 5;
    const RANGE_PAGE = 2;
    const MARG_PAGE = 2;
    const offset = currentPage * PER_PAGE;

    const getPageCount = () => {
        console.log(data.length, " ", PER_PAGE)
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
    
    const deleteSchedule = (id) => {
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
                                Name
                            </th>
                            <th>
                                Cron
                            </th>
                            <th>
                                Storage
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.filter((item) => {
                                return search.toLowerCase() === '' ? item :
                                    (item.name.toLowerCase().includes(search) || item.storage.toLowerCase().includes(search));
                            }).slice(offset, offset + PER_PAGE).map((current) => {
                                return (
                                    <tr key={current.id}>
                                        <td>{current.name}</td>
                                        <td>{current.cron}</td>
                                        <td>{current.storage}</td>
                                        <td>
                                            <button
                                                type='button'
                                                className='table-user-button'
                                                onClick={() => deleteSchedule(current.id)}
                                                >Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>{ getPageCount() > PER_PAGE ?
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
  )
}

export default ListOfSchedules
