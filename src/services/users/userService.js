import { getToken } from "../auth/authHelper";

export const createUser = async (login, password, email, phoneNumber) => {
    const url = process.env.REACT_APP_SERVER_URL + '/users/add';
    console.log(JSON.stringify({
        login: login,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        accountActive: true
    }));
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({
                login: login,
                password: password,
                email: email,
                phoneNumber: phoneNumber,
                accountActive: true
            })
        });

        if (response.ok) {
            const user = await response.json();
            console.log('User created:', user);
        } else {
            const error = await response.json();
            console.log('Error creating user:', error)
        }
    } catch (error) {
        console.error('Error! creating user:', error);
    }
}