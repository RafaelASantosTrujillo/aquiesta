import { createContext } from 'react';

export const AuthContext = createContext({
    user:'',
    isLoggedIn: false,
    token: null,
    login: () => { },
    logout: () => { }
});
