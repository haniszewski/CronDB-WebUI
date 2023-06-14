import React, {useState} from 'react'
import { addDatabase} from '../../services/databases/databasesService';

const AddDatabase = () => {
    const [error, setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');

    const [host, setHost] = useState('');
    const [port, setPort] = useState(0);
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [version, setVersion] = useState(0.00);

    const createDatabase = async () => {
            try {
                const isOk = await addDatabase(host, port, login, pass, name, version);
                isOk ? console.log('ok') : console.log('bad')
            } catch (error){
                console.log('Error creating user:', error);
            }
        }


    return ( 
        <div>
            <div className="form-creation">
                <form autoComplete='off'>
                    <h2>Adding Postgres Database</h2>
                    { error ? (
                        <div className='error-container'>
                            <p>{errorMsg}</p>
                        </div>
                    ): (<div className='about-conteiner'>
                        <p>Here you can add new database!</p>
                    </div>)}
                    <label className='label-input' htmlFor='dbHost'>Host</label>
                    <input
                        id='dbHost'
                        type="text"
                        className='input-user'
                        onChange={(e) => {setHost(e.target.value)}}
                        required={true}/>

                    <label className='label-input' htmlFor='dbPort'>Port</label>
                    <input
                        id='dbPort'
                        autoComplete="off"
                        type="number"
                        className='input-user'
                        onChange={(e) => {setPort(e.target.value)}}
                        required={true}/>
                    
                    <label className='label-input' htmlFor='dbLogin'>Login</label>
                    <input
                        id='dbLogin'
                        autoComplete="off"
                        type="text"
                        className='input-user'
                        onChange={(e) => {setLogin(e.target.value)}}
                        required={true}/>

                    <label className='label-input' htmlFor='dbPass'>Password</label>
                    <input
                        id='dbPass'
                        autoComplete="off"
                        type="password"
                        className='input-user'
                        onChange={(e) => {setPass(e.target.value)}}
                        required={true}/>

                    <label className='label-input' htmlFor='dbName'>Name</label>
                    <input
                        id='dbName'
                        type="text"
                        className='input-user'
                        onChange={(e) => {setName(e.target.value)}}
                        required={true}/>

                    <label className='label-input' htmlFor='pgVersion'>Version</label>
                    <input 
                        id='pgVersion'
                        type="number"
                        step="0.01"
                        className='input-user'
                        onChange={(e) => setVersion(e.target.value)}
                        required={true}/>

                        { error && (
                            <div className='error-container'>
                                <p>Sign-in failed!</p>
                                <p>{errorMsg}</p>
                            </div>
                        )}  
                        <button
                            type='button'
                            onClick={createDatabase}
                            className='button-create'
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
  )
}

export default AddDatabase
