import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../services/auth/authHelper';

const PrivateRoutes = () => {
  
  return (
    isAuthenticated() ? < Outlet /> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes
