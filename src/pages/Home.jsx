import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center'>
            <div className='p-5 md:p-10'>
                <h3 className='text-lg md:text-xl lg:text-2xl'>Enter your email to find student</h3>
                <div className='flex items-center mt-5'>
                    <input className='rounded border border-gray-700 h-10 px-2 focus:outline-none mr-2' type="search" name="" id="" placeholder='Enter email' />
                    <button onClick={() => navigate('/found-student')} className='px-5 h-10 bg-indigo-800 rounded text-slate-100'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Home;