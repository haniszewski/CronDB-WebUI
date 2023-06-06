import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import Login from './components/Login/Login';
import Home from './containers/Home/Home';

const App = () => {

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Navigate to="/databases" replace/>}/>
        <Route element={<Home/>} path='/*'/>
      </Route>
      <Route element={<Login />} path='/login'/>
    </Routes>
  )
}

export default App