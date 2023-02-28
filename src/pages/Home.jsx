import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProblemSolve from '../components/ProblemSolve';
import axios from '../interceptor/axios.config'

const Home = () => {
    const [searchValue, setSearchValue] = useState({})
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`/api/Student/list/${searchValue}`)
            .then(function (res) {

                console.log(res)
            })
            .catch(function (error) {
                console.log(error)
            })
        navigate('/found-student')
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='p-5 md:p-10'>
                    <h3 className='text-lg md:text-xl lg:text-2xl'>Enter your email to find student</h3>
                    <div className='flex items-center mt-5'>
                        <form onSubmit={handleSearch}>
                            <input onChange={(e) => setSearchValue(e.target.value)} className='rounded border border-gray-700 h-10 px-2 focus:outline-none mr-2' type="search" name="" id="" placeholder='Enter email' />
                            <button type='submit' className='px-5 h-10 bg-indigo-800 rounded text-slate-100'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <ProblemSolve />
        </div>
    );
};

export default Home;