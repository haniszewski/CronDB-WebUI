import React from 'react'
import { getToken } from '../../services/auth/authHelper'

const Databases = () => {
  return (
    <div>
      {getToken()}
    </div>
  )
}

export default Databases
