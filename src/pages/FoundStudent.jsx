import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoundStudent = () => {
    const navigate = useNavigate();

    let content = '';


    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <div className='border border-indigo-800 p-5 md:p-10 shadow-lg rounded bg-slate-50'>
                    <p>Student result is not set yet.</p>
                    <p>Do you want to set result for : Tomas Nunez ?</p>
                    <div className='flex justify-center mt-5'><button className='px-5 h-10 bg-indigo-800 rounded text-slate-100' onClick={() => navigate('/result-add')}>Add Result</button></div>
                </div>
                <div className='border border-indigo-800 p-5 md:p-10 shadow-lg rounded bg-slate-50'>
                    <p className='md:text-xl'>Result of : Tomas Nunez</p>
                    <ul>
                        <li>Bangla: 80</li>
                        <li>English: 85</li>
                        <li>Math: 90</li>
                        <li>Science: 90</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FoundStudent;