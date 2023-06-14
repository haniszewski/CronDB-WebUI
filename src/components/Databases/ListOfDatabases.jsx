import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import {getDatabases} from '../../services/api/databaseApi';
import { testConnectionToDatabase } from '../../services/databases/databasesService';


const ListOfDatabases = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDatabases();
                console.log(response);
                setData(response);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    const testDatabase = async ({database}) => {
        const isOk = await testConnectionToDatabase(database.dbHost, database.dbPort, database.dbLogin, database.dbPass, database.dbName, database.version);
        return isOk ? true : false;
    }

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

  return (
    <div className='table-container'>
      <h2>Databases PostgresQL:</h2>    
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
                    onClick={() => navigate('/databases/add')}> + </button>
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
                        Name
                    </th>
                    <th>
                        Dialect
                    </th>
                    <th>
                        Connection  
                    </th>
                    <th>

                    </th>
              </tr>
          </thead>
          <tbody>
              { data.length != 0 ? (
                  data.filter((item) => {
                      return search.toLowerCase() === '' ? item :
                          (item.dbPort.toLowerCase().includes(search)
                           || item.dbHost.toLowerCase().includes(search)
                           || item.dbName.toLowerCase().includes(search));
                  }).slice(offset, offset + PER_PAGE).map((current) => {
                      return (
                          <tr key={current.id}>
                              <td>{current.dbHost}</td>
                              <td>{current.dbPort}</td>
                              <td>{current.dbName}</td>
                              <td>{current.dialect}</td>
                              <td className={testDatabase(current) ? 'table-active' : 'table-unactive'}>{testDatabase(current) ? 'Connect' : 'Diconnect'}</td>
                              <td>
                                  <button
                                      type='button'
                                      className='table-user-button'
                                    //   onClick={() => {editUser(current); setEdit(true)}}
                                      >Add Backup
                                  </button>
                              </td>
                          </tr>
                      )
                  })
              ) : null}
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

export default ListOfDatabases
