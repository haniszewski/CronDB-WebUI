import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListUsers from '../../components/AdminPanel/ListUsers'
import CreateUser from '../../components/AdminPanel/CreateUser'
import '../../components/AdminPanel/AdminPanel.css';

const AdminPanel = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={ <ListUsers/> }/>
          <Route path='/create' element={ <CreateUser/> }/>
      </Routes>
    </div>
  )
}

export default AdminPanel