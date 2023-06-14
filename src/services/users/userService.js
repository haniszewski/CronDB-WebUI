import { getToken } from "../auth/authHelper";

export const createUser = async (login, password, email, phoneNumber) => {
    const url = process.env.REACT_APP_SERVER_URL + '/users/add';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({
                login: login,
                password: password,
                email: email,
                phoneNumber: phoneNumber,
                accountActive: true
            })
        });

        if (response.ok) {
            const user = await response.json();
            console.log('User created:', user);
        } else {
            const error = await response.json();
            console.log('Error creating user:', error)
        }
    } catch (error) {
        console.error('Error! creating user:', error);
    }
}

export const deleteUser = async (id) => {
    try{
        const response = await fetch(process.env.REACT_APP_SERVER_URL + `/users/delete/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + getToken()
          }
          });
      
          if (response.ok) {
            console.log('User deleted successfully');
            return true;
          } else {
            console.log('Failed to delete user');
            return false;
          }
    }catch(error){
        console.log(error);
    }
}

export const updateUser = async (id, login, password, email, phoneNumber, accountActive) => {
    const url = process.env.REACT_APP_SERVER_URL + `/users/update/${id}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({
                login: login,
                password: password,
                email: email,
                phoneNumber: phoneNumber,
                accountActive: accountActive
            })
        });

        if (response.ok) {
            const user = await response.json();
            console.log('User updated:', user);
        } else {
            const error = await response.json();
            console.log('Error updating user:', error)
        }
    } catch (error) {
        console.error('Error updating user:', error);
    }
}