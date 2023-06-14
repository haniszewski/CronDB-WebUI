import { getToken } from '../auth/authHelper';

export const addSchedule = async(name, cron, numOfCopy, database, storage) => {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL + '/schedules/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()

            },
            body: JSON.stringify({
                name: name,
                cron: cron,
                numberOfCopy: numOfCopy,
                database: database,
                storage: storage
            })
        });

    if (response.ok) {
      return 'Schedule added successfully';
    } else {
      return 'Failed to add schedule';
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export const deleteSchedule = async (id) => {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL + `/schedules/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()

            },
        });
    
        if (response.ok) {
            return 'Schedule deleted successfully';
        } else {
            return 'Deleting was failed';
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
}