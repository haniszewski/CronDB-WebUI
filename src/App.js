import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Databases from './containers/Databases';

const App = () => {
  return (
    <Routes>
        <Route exact path='/auth' element={<Login/>} />
        <Route path='/databases' element={<Databases/>} />
    </Routes>
  )
}

export default App