export const login = async (username, password) => {
    try{
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });
        
        const data = response.json();
        return data;

    } catch (err){
        console.log(err);
    }
}

export const logout = async() => {
    
}