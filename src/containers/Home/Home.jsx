import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Databases from '../Databases/Databases';
import Backups from '../Backups/Backups';
import Schedules from '../Schedule/Schedules';
import Monitor from '../Monitor/Monitor';
import Storages from '../Storages/Storages';
import AdminPanel from '../AdminPanel/AdminPanel';
import './Home.css'

const Home = () => {

    return (
        <div>
            <Navbar/>
        <div>
            <Routes>
                <Route path="/databases*" element={<Databases />}/>
                <Route path="/backups*" element={<Backups />}/>
                <Route path="/schedules*" element={<Schedules />}/>
                <Route path="/backups*" element={<Backups />}/>
                <Route path="/monitor*" element={<Monitor />}/>
                <Route path="/storages*" element={<Storages />}/>
                <Route path="/admin*" element={<AdminPanel />}/>
            </Routes>
        </div>
    </div>
  )
}

export default Home
