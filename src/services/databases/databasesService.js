import { getToken } from '../auth/authHelper';

export const addDatabase = async (host, port, login, pass, name, version) => {
    try{
        const response = await fetch(process.env.REACT_APP_SERVER_URL + '/databases/postgres/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({
                dbHost: host,
                dbPort: port,
                dbpLogin: login,
                dbPass: pass,
                dbName: name,
                version: version
        })})
        if (response.ok) {
          return true;
        } else {
          return false;
        }
    }catch(error){
        console.log(error);
        return false;
    }
}

export const testConnectionToDatabase = async (host, port, login, pass, name, version) => {
    try{
        const response = await fetch(process.env.REACT_APP_SERVER_URL + '/databases/postgres/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({
                dbHost: host,
                dbPort: port,
                dbpLogin: login,
                dbPass: pass,
                dbName: name,
                version: version
        })})
        if (response.ok) {
          return true;
        } else {
          return false;
        }
    }catch(error){
        console.log(error);
        return false;
    }
}