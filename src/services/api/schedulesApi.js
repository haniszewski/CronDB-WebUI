import { getToken } from '../auth/authHelper';

export const getSchedulesById = async (databaseId) => {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL + `/schedules/database/${databaseId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
    }});
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(`Error: ${error}`);
      }
}