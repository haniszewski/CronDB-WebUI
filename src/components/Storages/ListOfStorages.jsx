import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

const ListOfStorages = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');
  
    const navigate = useNavigate();

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

    const testConnection = ({database}) => {
        return true;
    }
  return (
    <div className='table-container'>
      <h2>Storages FTP:</h2>    
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
                    onClick={() => navigate('/storages/add')}> + </button>
          </div>
      </form>
      <div className='responsive-table'>
      <table>
          <thead>
              <tr>
                    <th>
                        Host
                    </th>
                    <th>
                        Port
                    </th>
                    <th>
                        Login
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Passive 
                    </th>
                    <th>
                        Connection
                    </th>
                    <th>
                        
                    </th>
              </tr>
          </thead>
          <tbody>
              {
                  data.filter((item) => {
                      return search.toLowerCase() === '' ? item :
                          (item.dbPort.toLowerCase().includes(search)
                           || item.dbHost.toLowerCase().includes(search)
                           || item.dbLogin.toLowerCase().includes(search));
                  }).slice(offset, offset + PER_PAGE).map((current) => {
                      return (
                          <tr key={current.id}>
                              <td>{current.ftpHost}</td>
                              <td>{current.ftpPort}</td>
                              <td>{current.ftpLogin}</td>
                              <td>{current.ftpPass}</td>
                              <td>{current.passive ? 'Active' : 'Passive'}</td>
                              {testConnection(current) ?
                              <td className='table-active'>Connect</td> :
                              <td className='table-unactive'>Disconnect</td> }
                            <td><button className='table-user-button'>Delete</button></td>
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
  )
}

export default ListOfStorages
