import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-gray-700 h-screen flex justify-center items-center'>
            <div className=''>
                <h2 className='text-center text-rose-600 text-2xl md:text-4xl'>Opps, Something wrong with the URL</h2>
                <div className='flex justify-center mt-7'>
                    <button className='py-2 px-5 rounded-full bg-gray-900 shadow-lg text-slate-100' onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;