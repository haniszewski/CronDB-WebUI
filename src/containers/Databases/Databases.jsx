import React from 'react'
import { getAllUsers } from '../../services/api/userApi';

const Databases = () => {
  
  const getUsers = async () => {
    const data = await getAllUsers();
    console.log(data);
  }

  return (
    <div>
      <button
        onClick={getUsers}
      >
        Click me!
      </button>
    </div>
  )
}

export default Databases