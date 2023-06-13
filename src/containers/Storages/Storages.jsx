import React from 'react'
import ListOfStorages from '../../components/Storages/ListOfStorages'
import AddStorage from '../../components/Storages/AddStorage'
import { Routes, Route } from 'react-router-dom';

const Storages = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<ListOfStorages/>}/>
          <Route path='/add' element={<AddStorage/>}/>
        </Routes>
    </div>
  )
}

export default Storages
