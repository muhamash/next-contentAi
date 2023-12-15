'use client'

import { PhoneOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const handleLoginClick = () => {
  const router = useRouter();
  router.push('./login/login.tsx');
};


const Nav = () =>
{
    return (
        <div className="flex justify-evenly px-5 py-10">
            <div className="text-blue-600 text-3xl">
                Logo
            </div>
            <div className="flex gap-5 items-center">
                <div className='hover:text-navItems hover:text-lg  transition-all ease-in-out duration-300 cursor-pointer'>
                    Home
                </div>
                <div className='hover:text-navItems hover:text-lg  transition-all ease-in-out duration-300 cursor-pointer'>
                    Items
                </div>
                <div className='hover:text-navItems hover:text-lg  transition-all ease-in-out duration-300 cursor-pointer'>
                    Folder
                </div>
                <div className='hover:text-navItems hover:text-lg  transition-all ease-in-out duration-300 cursor-pointer'>
                    ABout Us
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500  text-lg p-[1px] rounded-3xl hover:shadow-2xl transition-all duration-300 cursor-pointer  hover:p-[2px]">
                    <div className='flex items-center gap-2 bg-slate-100 px-4 py-2 text-violet-950 rounded-3xl font-semibold hover:text-red-700'>
                        <div>
                            <PhoneOutlined className='text-2xl' />
                        </div>
                        <div>
                            +888088987
                        </div>
                    </div>
                </div>
                {/* user log in */ }
                <Link href={'./login/login.tsx'}>
                    <a  onClick={() => console.log( 'clicked' )} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-md shadow-violet-200'>
                        Login
                    </a>
                </Link>
            </div>
        </div>
    )
};

export default Nav;