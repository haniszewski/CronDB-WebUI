export const getSchedulesById = async (scheduleId) => {
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL + `/schedules/database/${id}`, {
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