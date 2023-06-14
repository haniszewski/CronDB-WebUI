import React, {useState} from 'react'
import { updateUser } from '../../services/users/userService';
const EditUser = ({user}) => {

    
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [active, setActive] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [messageText, setMessageText] = useState('');
    
    const editUser = async (id, login, password, email, phone, accountActive) => {

        if(password === confirmPassword){
            try {
                await updateUser(id, login, password, email, phone, accountActive);
                window.location.reload();
            } catch (error){
                console.log('Error creating user:', error);
            }
        } else {
            console.log ('Passwords are not the same!')
        }
    }

  return (
    <div className='form-block'>
      <h2>Edit {user.login} : {user.id}</h2>
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
          
          <select onChange={(e) => setActive(e.target.value)} className='input-user'>
            <option value={true}>Active</option>
            <option value={false}>Non Active</option>
          </select>

          <input className='input-user' type="tel" placeholder='New Phone Number' id="phoneNumber" name="phone" onChange={(e) => {setPhone(e.target.value)}} required/>
          
          <input
              type='button'
              onClick={() => editUser(user.id, login, password, email, phone, active)}
              className='button-create'
              value='Update User'/>
      </form>
  </div>
  )
}

export default EditUser
