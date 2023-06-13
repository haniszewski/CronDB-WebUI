import { getToken } from '../auth/authHelper';

export const getAllUsers = async () => { 
    const response = await fetch(process.env.REACT_APP_SERVER_URL + '/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        },
    });

    const data = response.json();
    return data;
}