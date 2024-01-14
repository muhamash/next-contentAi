'use client'

import React, { useState } from 'react';
import {Input} from 'antd'

const ForgetPassword = () =>
{
    const [ state, setState ] = useState()
    
    const handleChange = ( e:any ) =>
    {
        setState(e.target.value)
    }

    const handleClick = () =>
    {
        console.log(state)
    }

    return (
        <div className='py-10'>
            <div className='md:w-[400px] w-[60%] mx-auto bg-slate-300 p-10 rounded-md hover:shadow-md shadow'>
                <div className='text-lg font-semibold text-center pt-10'>
                    Verification Data?
                </div>
                <div className='flex gap-3 items-center py-5'>
                    <Input
                        className='h-[40px]'
                        placeholder="Enter your Email"
                        value={state}
                        onChange={handleChange}
                    />
                    <button
                        onClick={()=>handleClick()}
                        className='text-md font-semibold px-5 py-2 bg-green-700 my-3 rounded-md text-white'>send</button>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;