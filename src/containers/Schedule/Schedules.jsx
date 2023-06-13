import React from 'react';
import SidebarData from '../../components/SidebarData/SidebarData';
import { Routes, Route } from 'react-router-dom';
import ListOfSchedules from '../../components/Schedules/ListOfSchedules';
import CreateSchedule from '../../components/Schedules/CreateSchedule';
import './Schedules.css';

const Schedules = () => {
  return (
    <div className='side-data-container'>
      <div className='sidebar-container'>
          <SidebarData/>
      </div>
      <div className='data-container'>
          <Routes>
            <Route path='/:databaseId' element={<ListOfSchedules/>}/>
            <Route path='/:databaseId/add' element={<CreateSchedule/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default Schedules