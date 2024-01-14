import Link from 'next/link';
import { PhoneOutlined, MenuUnfoldOutlined, CloseOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import Link from 'next/link';
// import Router from 'next/router';

// const handleLoginClick = () => {
//   const router = useRouter();
//   router.push('./login/login.tsx');
// };


const Nav = () =>
{
    const router = useRouter();

    const [ open, setOpen ] = useState( true )


    const loginClick = () =>
    {
        router.push( 'login/login'
        )
    }

    return (
        <nav>
            <div
                className='cursor-pointer md:hidden p-3'
                onClick={() => setOpen( !open )}>
                <span>{open === true ?
                    <CloseOutlined className='text-purple-700 text-2xl' /> :
                    <MenuUnfoldOutlined className='text-purple-700 text-2xl' />}
                </span>
                
                
            </div>
            <div className="flex sm:flex-col lg:flex-row justify-evenly px-5 py-10">
                {/* <div className="text-blue-600 text-3xl">
                Logo
            </div> */}
                <div className={`flex gap-3 md:flex sm:flex-col md:flex-row absolute duration-300 flex-wrap md:items-center ${ open ? 'top-6 px-10' : '-top-[300px] ' }`}>
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
                    <div className=''>
                        <div className="flex gap-3 lg:items-center sm:flex-col lg:flex-row">
                            <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500  text-lg p-[1px] rounded-3xl hover:shadow-2xl transition-all duration-300 cursor-pointer  hover:p-[2px] w-fit">
                                <div className='flex items-center gap-2 bg-slate-100 px-4 py-2 text-violet-950 rounded-3xl font-semibold hover:text-red-700'>
                                    <div>
                                        <PhoneOutlined className='text-2xl' />
                                    </div>
                                    <div>
                                        +888088987
                                    </div>
                                </div>
                            </div>
                            {/* user log in */}
                            <div>
                                <Link href='/login'>
                                    <button onClick={() => loginClick()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-md shadow-violet-200'>
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Nav;