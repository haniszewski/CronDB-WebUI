import { getToken } from '../auth/authHelper';

export const getAllStorages = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL + '/storages/ftp', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
        });
        if (response.ok) {
          const storages = await response.json();
          return storages;
        } else {
          console.log(response);
          console.log('Failed to retrieve storages');
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
}