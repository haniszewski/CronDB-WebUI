import React, {useState} from 'react'

const EditUser = ({user}) => {

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [messageText, setMessageText] = useState('');
    
    const editUser = () => {

        if(false){
        validatePassword();

        setMessage(true);
        setMessageText('New user added successfully!')
        }
    }

    const validatePassword = () => {
        if(password === confirmPassword){
            setMessage(false);
            setError(false);
        } else {
            setMessage(true);
            setError(true);
            setMessageText('Passwords do not match!')
        }
    }

  return (
    <div className='form-block'>
      <h2>Edit {user.username} : {user.id}</h2>
      <form>
          { message ? (
              <div className={ error ? 'error-container' : 'message-conteiner'}>
                  <p>{message}</p>
              </div>
          ): (<div className='about-conteiner'>
              <p>Here you can edit data of chosen user!</p>
          </div>)}

          <input className='input-user' value={user.username} type="text" placeholder='New Username' id="username" name="username" onChange={(e) => {setLogin(e.target.value)}} required/>

          <input className='input-user' type="password" placeholder='New Password' id="password" name="password" onChange={(e) => {setPassword(e.target.value)}} required/>

          <input className='input-user' type="password" placeholder='Confirm New Password' id="confirm" name="confirm" onChange={(e) => {setConfirmPassword(e.target.value)}} required/>

          <input className='input-user' value={user.email} type="email" placeholder='New Email' id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} required/>
          
          <select className='input-user'>
            <option value={1}>Active</option>
            <option value={0}>Non Active</option>
          </select>

          <input className='input-user' type="tel" placeholder='New Phone Number' id="phoneNumber" name="phone" onChange={(e) => {setPhone(e.target.value)}} required/>
          
          <input
              type='submit'
              onClick={editUser}
              className='button-create'
              value='Update User'/>
      </form>
  </div>
  )
}

export default EditUser
