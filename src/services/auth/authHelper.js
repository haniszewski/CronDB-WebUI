export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const isAuthenticated = () => {
    return getToken() != null;
}

export const logout = () => {
    localStorage.removeItem('token');
}