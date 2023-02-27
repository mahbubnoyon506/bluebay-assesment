import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-slate-100 h-screen'>
            <Outlet/>
        </div>
    );
};

export default Main;