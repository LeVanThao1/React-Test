import React, { useState } from 'react'
import * as jwt from 'jsonwebtoken';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    let valueLogin = true;
    const local = JSON.parse(localStorage.getItem('token')) ||'';
    if(!local) valueLogin = false;
    else {
        const token = jwt.verify(local, 'acexis');
        if(token !== "123") valueLogin = false;
    }
    const [isLogin, setLogin] = useState(valueLogin);

    console.log(isLogin);
    function updateLogin() {
        setLogin(!isLogin);
    }
    return (
        <AuthContext.Provider value={{
            login: isLogin, 
            upLogin: updateLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}
