import React, { useState } from 'react'

const AddStorage = () => {
    const [error, setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
  
    const [host, setHost] = useState('');
    const [port, setPort] = useState(0);
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [passive, setPassive] = useState('');

  
    return ( 
        <div>
                  <div className="form-creation">
                      <form autoComplete='off'>
                        <h2>Adding Storage FTP</h2>
                        { error ? (
                          <div className='error-container'>
                              <p>{errorMsg}</p>
                          </div>
                      ): (<div className='about-conteiner'>
                          <p>Here you can add new storage ftp!</p>
                      </div>)}
                        <label className='label-input' htmlFor='ftpHost'>Host</label>
                        <input
                            id='ftpHost'
                            type="text"
                            className='input-user'
                            onChange={(e) => {setHost(e.target.value)}}
                            required={true}/>
  
                        <label className='label-input' htmlFor='ftpPort'>Port</label>
                        <input
                            id='ftpPort'
                            autoComplete="off"
                            type="number"
                            className='input-user'
                            onChange={(e) => {setPort(e.target.value)}}
                            required={true}/>

                        <label className='label-input' htmlFor='ftpLogin'>Login</label>
                        <input
                            id='ftpLogin'
                            type="text"
                            className='input-user'
                            onChange={(e) => {setLogin(e.target.value)}}
                            required={true}/>

                        <label className='label-input' htmlFor='ftpPass'>Password</label>
                        <input
                            id='ftpPass'
                            autoComplete="off"
                            type="password"
                            className='input-user'
                            onChange={(e) => {setPass(e.target.value)}}
                            required={true}/>
  
                        <label className='label-input' htmlFor='passive'>Passive</label>
                        <select className='input-user' id='passive'>
                            <option value={1}>Active</option>
                            <option value={0}>Passive</option>
                        </select>
  
                          { error && (
                              <div className='error-container'>
                                  <p>Sign-in failed!</p>
                                  <p>{errorMsg}</p>
                              </div>
                          )}  
                          <button
                              type='button'
                              // onClick={checkUser}
                              className='button-create'
                          >
                              Add
                          </button>
                      </form>
                  </div>
                  </div>
  )
}

export default AddStorage
