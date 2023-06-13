import React, {useState} from 'react'

const AddDatabase = () => {
  const [error, setError] = useState(false);
  const [errorMsg,setErrorMsg] = useState('');

  return ( 
      <div>
                <div className="login-box">
                    <form>
                        <div className="user-box">
                            <label className='label-input' htmlFor='username'>Username</label>
                            <input
                                id='username'
                                type="text"
                                // onChange={(e) => {setUsername(e.target.value)}}
                                required=""/>
                        </div>
                        <div className="user-box">
                            <label className='label-input' htmlFor='password'>Password</label>
                            <input 
                                id='password'
                                type="password"
                                // onChange={(e) => setPassword(e.target.value)}
                                required/>
                        </div>
                        { error && (
                            <div className='error-container'>
                                <p>Sign-in failed!</p>
                                <p>{errorMsg}</p>
                            </div>
                        )}  
                        <button
                            type='button'
                            // onClick={checkUser}
                            className='button-sign-in'
                        >
                            Create Database
                        </button>
                    </form>
                </div>
                </div>
  )
}

export default AddDatabase
