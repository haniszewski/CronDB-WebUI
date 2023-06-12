import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainUsers from '../../components/AdminPanel/MainUsers'
import EditUser from '../../components/AdminPanel/EditUser'
import '../../components/AdminPanel/AdminPanel.css';

const AdminPanel = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={ <MainUsers/> }/>
      </Routes>
    </>
  )
}

export default AdminPanel