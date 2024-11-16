import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Root = () => {
    const jahid=useContext(AuthContext)
    return (
        <div>
            <h3>this is roor sections</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;