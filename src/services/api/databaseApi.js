import getToken from '../auth/authHelper/getToken';

export const getDatabase = async () => { 
    const response = await fetch('http://localhost:3000/databases', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        },
    });

    const data = response.json();
    return data;
}