import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultAdd = () => {
    const navigate = useNavigate();
    const handleAddBangla = (e) => {
        e.preventDefault();
        navigate('/found-student');
    }
    const handleAddEnglish = (e) => {
        e.preventDefault();
        navigate('/found-student')
    }
    const handleAddMath = (e) => {
        e.preventDefault();
        navigate('/found-student')
    }
    const handleAdScience = (e) => {
        e.preventDefault();
        navigate('/found-student')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <h3 className='md:text-xl'>Add result for Student : Tomas Nunez</h3>
                <div className='mt-5'>
                    <ul>
                        <li className='flex items-center'>
                            <p className='font-semibold w-20'>Bangla</p>
                            <form onSubmit={handleAddBangla}>
                                <input className='mx-2 my-1 rounded border border-gray-700 py-2 px-2 focus:outline-none mr-2 w-56' type="text" name="" id="" />
                                <button type='submit' onclick className='px-5 h-10 bg-[#022534] rounded text-slate-100'>Save Result</button>
                            </form>
                        </li>
                        <li className='flex items-center'>
                            <p className='font-semibold w-20'>English</p>
                            <form onSubmit={handleAddEnglish}>
                                <input className='mx-2 my-1 rounded border border-gray-700 py-2 px-2 focus:outline-none mr-2 w-56' type="text" name="" id="" />
                                <button type='submit' className='px-5 h-10 bg-[#022534] rounded text-slate-100'>Save Result</button>
                            </form>
                        </li>
                        <li className='flex items-center'>
                            <p className='font-semibold w-20'>Math</p>
                            <form onSubmit={handleAddMath}>
                                <input className='mx-2 my-1 rounded border border-gray-700 py-2 px-2 focus:outline-none mr-2 w-56' type="text" name="" id="" />
                                <button type='submit' className='px-5 h-10 bg-[#022534] rounded text-slate-100'>Save Result</button>
                            </form>
                        </li>
                        <li className='flex items-center'>
                            <p className='font-semibold w-20'>Science</p>
                            <form onSubmit={handleAdScience}>
                                <input className='mx-2 my-1 rounded border border-gray-700 py-2 px-2 focus:outline-none mr-2 w-56' type="text" name="" id="" />
                                <button type='submit' className='px-5 h-10 bg-[#022534] rounded text-slate-100'>Save Result</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResultAdd;