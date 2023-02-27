import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-gray-700 h-screen'>
            <Outlet/>
        </div>
    );
};

export default Main;