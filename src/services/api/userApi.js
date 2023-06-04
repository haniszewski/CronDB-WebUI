import { getToken } from '../auth/authHelper';

export const getAllUsers = async () => { 
    const response = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        },
    });

    const data = response.json();
    return data;
}