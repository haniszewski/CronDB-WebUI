import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainUsers from '../../components/AdminPanel/MainUsers'


import './AdminPanel.css';

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