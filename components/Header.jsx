import Image from 'next/image'
import React, { useState } from 'react'
import { BoltIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'
import { AiOutlineHistory } from "react-icons/ai";
import MenuModal from './MenuModal'
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
    const { data: session } = useSession();
    const router = useRouter();

    const [userMenu, openUserMenu] = useState();
    const toggelUserMenu = () => {
        openUserMenu(!userMenu)
    }


    const [menu, openMenu] = useState()
    const toggleMenu = () => {
        openMenu(!menu);
    }


    return (
        <header className='border border-b-gray-300'>
            <div className='relative max-w-7xl mx-auto flex items-center justify-between p-5'>

                <div className="three col lg:hidden">
                    <div className={`hamburger ${menu ? "is-active" : ''}`} id="hamburger-1" onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>

                <MenuModal menu={menu} />

                <div
                    onClick={() => router.push('/')}
                    className='mx-auto lg:m-0 flex items-center lg:space-x-5 space-x-3 cursor-pointer'
                >
                    <div className='flex items-center justify-center h-8 w-8 lg:h-9 lg:w-9 bg-indigo-500 rounded-full'>
                        <BoltIcon className='h-6 w-6 lg:h-7 lg:w-7 text-indigo-100' />
                    </div>
                    <p className='text-xl font-semibold'>
                        <span className='text-indigo-500'>Build</span>
                        Estate
                    </p>
                </div>

                {router.pathname === '/' ? "" :
                    <div className='hidden relative lg:flex items-center'>
                        <input className='bg-gray-300 px-6 py-2 rounded-xl' type="text" placeholder='Search Location' />
                        <MagnifyingGlassIcon className='h-6 w-6 absolute right-2 text-indigo-600' />
                    </div>
                }

                <nav className='hidden lg:inline-flex'>
                    <ul className='lg:flex items-center space-x-5 text-gray-500  font-semibold'>
                        <li onClick={() => router.push('/')} className='hover:text-indigo-500 cursor-pointer transition-all duration-200 ease-in-out'>Home</li>
                        <li className='hover:text-indigo-500 cursor-pointer transition-all duration-200 ease-in-out'>About</li>
                        <li className='hover:text-indigo-500 cursor-pointer transition-all duration-200 ease-in-out'>Sales</li>
                        <li className='hover:text-indigo-500 cursor-pointer transition-all duration-200 ease-in-out'>Contact Us</li>
                    </ul>
                </nav>

                {session ?
                    <div className='relative' onClick={toggelUserMenu}>
                        <p className='hidden lg:flex flex-col cursor-pointer text-gray-500 hover:underline decoration-indigo-600'>
                            <span className='text-xs font-semibold'>Hello, <span className='text-indigo-600'>{session.user.name}</span></span>
                            <span className='flex items-center font-semibold'>
                                Account & List
                                <ChevronDownIcon className='h-4 w-4 ml-3' />
                            </span>
                        </p>
                        <div className={`hidden absolute divide-y-2 shadow-lg w-40 flex-col z-10 bg-white mt-5 p-2 ${userMenu ? '!flex' : ''}`}>
                            <p
                                className='p-1 cursor-pointer text-gray-500 font-semibold text-sm flex items-center justify-between hover:text-indigo-500 transition-all duration-300 ease-in-out'>
                                Profile
                                <UserIcon className='h-6 w-6' />
                            </p>
                            <p
                                className='p-1 cursor-pointer text-gray-500 font-semibold text-sm flex items-center justify-between hover:text-indigo-500 transition-all duration-300 ease-in-out'>
                                Recent Search
                                <AiOutlineHistory className='h-6 w-6 ml-2' />
                            </p>
                            <p
                                className='p-1 cursor-pointer text-gray-500 font-semibold text-sm flex items-center justify-between hover:text-indigo-500 transition-all duration-300 ease-in-out'>
                                Liked
                                <HeartIcon className='h-6 w-6 ml-2' />
                            </p>
                            <p
                                onClick={signOut}
                                className='p-1 cursor-pointer text-gray-500 font-semibold flex items-center justify-between text-sm hover:text-indigo-500 transition-all duration-300 ease-in-out'>
                                Logout
                                <ArrowLeftOnRectangleIcon className='h-5 w-5 ml-2' />
                            </p>
                        </div>
                    </div>
                    :
                    <div className='hidden lg:flex space-x-5'>
                        <button
                            onClick={() => router.push('/login')}
                            className='font-semibold bg-indigo-500 text-indigo-50 px-5 py-2 rounded-lg'>
                            Register
                        </button>
                        <button
                            onClick={() => router.push('/login')}
                            className='font-semibold px-5 py-2 border border-indigo-500 rounded-lg text-indigo-500'>
                            Login
                        </button>
                    </div>
                }


            </div>
        </header>
    )
}

export default Header