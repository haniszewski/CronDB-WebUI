import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import Databases from '../Databases/Databases';
import Backups from '../Backups/Backups';
import Schedules from '../Schedule/Schedules';
import Monitor from '../Monitor/Monitor';

const Home = () => {

    const[clicked,isClicked] = useState(false)

    return (
        <div>
            <Navbar clicked={clicked} isClicked={isClicked}/>
            {clicked ? <Menu/> : null}
        <div>
            <Routes>
                <Route path="/databases" element={<Databases />}/>
                <Route path="/backups" element={<Backups />}/>
                <Route path="/schedules" element={<Schedules />}/>
                <Route path="/backups" element={<Backups />}/>
                <Route path="/monitor" element={<Monitor />}/>
            </Routes>
        </div>
    </div>
  )
}

export default Home
