import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './SidebarData.css';
// import {getDatabases} from '../../services/api/databaseApi';

const SidebarData = () => {

  const data = [
    {
      id: 1,
      name: 'first_database'
    },
    {
      id: 2,
      name: 'second_database'
    },
    {
      id: 3,
      name: 'third_database'
    },
    {
      id: 4,
      name: 'fourth_database'
    },
    {
      id: 5,
      name: 'fifth_database'
    },
    {
      id: 6,
      name: 'sixth_database'
    },
    {
      id: 7,
      name: 'seventh_database'
    },
    {
      id: 8,
      name: 'eight_database'
    },
    {
      id: 9,
      name: 'nineth_database'
    },
  ];

  const [schedules, setSchedules] = useState([]);
  
  
  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await getDatabases();
  //             console.log(response);
  //             setSchedules(response);
  //         } catch (error) {
  //             console.log(error)
  //         }
  //     };

  //     fetchData();
  // }, []);

  return (
    <div className='links-container'>
      <h2>Databases:</h2>
      <hr/>
      <div className='links-div'>
      {
        data.slice(0, data.length - 1).map((database) => (
          <NavLink
            to={`/schedules/${database.id}`}
            className={({isActive}) => (isActive ? 'link-sidebar active' : 'link-sidebar non-active')}
            //onClick={handleCloseSidebar}
            key={database.id}
          >
            {database.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarData
