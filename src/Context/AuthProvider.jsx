import React, { createContext } from 'react';
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider value={'jahid'}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;