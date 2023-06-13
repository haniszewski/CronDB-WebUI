import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Routes, Route } from 'react-router-dom';
import ListOfDatabases from '../../components/Databases/ListOfDatabases';
import AddDatabases from '../../components/Databases/AddDatabase';
import './Databases.css';

const Databases = () => {

  return (
    <div>
        <Routes>
          <Route path='/' element={<ListOfDatabases/>}/>
          <Route path='/add' element={<AddDatabases/>}/>
        </Routes>
    </div>
  )
}

export default Databases