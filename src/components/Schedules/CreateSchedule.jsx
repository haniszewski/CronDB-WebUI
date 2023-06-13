import React from 'react'
import { useParams } from 'react-router-dom'

const CreateSchedule = () => {
  const params = useParams();
  
  return (
    <div>
      Create: {params.databaseId}
    </div>
  )
}

export default CreateSchedule
