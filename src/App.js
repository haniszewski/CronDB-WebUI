import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import Login from './components/Login/Login';
import Databases from './containers/Databases/Databases'; 

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Databases/>} path='/databases'/>
      </Route>
      <Route element={<Login />} path='/login'/>
    </Routes>
  )
}

export default App