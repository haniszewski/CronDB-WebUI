import { getToken } from '../auth/authHelper';

export const testConnectionToStorage = async (host, port, login, pass, passive) => {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL + '/storages/ftp/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({
                ftpHost: host,
                ftpPort: port,
                ftpLogin: login,
                ftpPass: pass,
                passive: passive
            })
        });
        if (response.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(`Error: ${error}`);
        return false;
      }
}

export const addStorage = async (host, port, login, pass, passive) => {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL + '/storages/ftp/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({
                ftpHost: host,
                ftpPort: port,
                ftpLogin: login,
                ftpPass: pass,
                passive: passive
            })
        });
        if (response.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(`Error: ${error}`);
        return false;
      }
}

export const deleteStorage = async (id) => {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL + `/storages/ftp/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
        });
    
        if (response.ok) {
          console.log('Storage deleted successfully');
          return true;
        } else {
          console.log('Failed to delete storage');
          return false;
        }
      } catch (error) {
        console.log(`Error: ${error}`);
        return false;
      }
}