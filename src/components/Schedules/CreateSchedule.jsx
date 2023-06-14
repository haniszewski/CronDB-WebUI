import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const CreateSchedule = () => {
  const [error, setError] = useState(false);
  const [errorMsg,setErrorMsg] = useState('');

  const [storages, setStorages] = useState([]);

  const [name, setName] = useState('');
  const [num, setNum] = useState(0);
  const [cron, setCron] = useState('');
  const [storage, setStorage] = useState();

  const params = useParams();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setStorage(selectedOption);
  };

  return ( 
      <div>
          <form autoComplete='off'>
            <h2>Adding Schedule to database:</h2>
            { error ? (
              <div className='error-container'>
                  <p>{errorMsg}</p>
              </div>
          ): (<div className='about-conteiner'>
              <p>Here you can add new Schedule to database!</p>
          </div>)}
            <label className='label-input' htmlFor='schName'>Name of Schedule:</label>
            <input
                id='schName'
                type="text"
                className='input-user'
                onChange={(e) => {setName(e.target.value)}}
                required={true}/>

            <label className='label-input' htmlFor='numCopy'>Number of Copy:</label>
            <input
                id='numCopy'
                autoComplete="off"
                type="number"
                className='input-user'
                onChange={(e) => {setNum(e.target.value)}}
                required={true}/>

            <label className='label-input' htmlFor='cron'>Cron:</label>
            <input
                id='cron'
                autoComplete="off"
                type="text"
                className='input-user'
                onChange={(e) => {setCron(e.target.value)}}
                required={true}/>

            <label className='label-input' htmlFor='pgVersion'>Storage FTP:</label>
            <select className='input-user' value={storage} onChange={handleSelectChange}>
              {storages.map((ftp) => (
                <option key={ftp.id} value={ftp.id}>{ftp.host}</option>
              ))}
            </select>
              <button
                  type='button'
                  // onClick={checkUser}
                  className='button-create'
              >
                  Add
              </button>
          </form>
      </div>
  )
}

export default CreateSchedule
