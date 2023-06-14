import { getToken } from '../auth/authHelper';

export const getDatabase = async () => { 
    try{
        const response = await fetch(process.env.REACT_APP_SERVER_URL + 'databases/postgres', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
        });

        const data = response.json();
        return data;
    } catch(error){
        console.log('Error:', error)
    }
}