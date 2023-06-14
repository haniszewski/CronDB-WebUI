import React from 'react';
import {NavLink} from 'react-router-dom';
import './SidebarData.css';

const data = [
  {
    id : 1,
    name: 'first_databasesadasdasdasdasdasdasdasdasdasd'
  },
  {
    id : 2,
    name: 'first_database'
  },
  {
    id : 3,
    name: 'first_database'
  },
  {
    id : 4,
    name: 'first_database'
  },
  {
    id : 5,
    name: 'first_database'
  },
  {
    id : 6,
    name: 'first_database'
  },
  {
    id : 7,
    name: 'first_database'
  },
  {
    id : 8,
    name: 'first_database'
  },
  {
    id : 9,
    name: 'first_database'
  },
  {
    id : 10,
    name: 'first_database'
  },
  {
    id : 11,
    name: 'first_database'
  },
  {
    id : 12,
    name: 'first_database'
  },
  {
    id : 13,
    name: 'first_database'
  },
  {
    id : 14,
    name: 'first_database'
  },
  {
    id : 15,
    name: 'first_database'
  },
  {
    id : 16,
    name: 'first_database'
  },
  {
    id : 17,
    name: 'first_database'
  },
  {
    id : 18,
    name: 'first_database'
  },
  {
    id : 19,
    name: 'first_database'
  },
  {
    id : 20,
    name: 'first_database'
  },
  {
    id : 21,
    name: 'first_database'
  }
]

const SidebarData = () => {



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
