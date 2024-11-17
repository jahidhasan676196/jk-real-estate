import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Root = () => {
    const jahid=useContext(AuthContext)
    return (
        <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;