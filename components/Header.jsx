import Image from 'next/image'
import React, { useState } from 'react'
import { BoltIcon } from '@heroicons/react/24/solid'
import MenuModal from './MenuModal'
import { useRouter } from "next/router";

function Header() {

    const router = useRouter();

    const [menu, openMenu] = useState()

    const toggleMenu = () => {
        openMenu(!menu);
    }

    return (
        <header>
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
                    <div className='flex items-center justify-center h-8 w-8 lg:h-9 lg:w-9 bg-indigo-700 rounded-full'>
                        <BoltIcon className='h-6 w-6 lg:h-7 lg:w-7 text-indigo-100' />
                    </div>
                    <p className='text-xl font-semibold'>
                        <span className='text-indigo-700'>Build</span>
                        Estate
                    </p>
                </div>

                <nav className='hidden lg:inline-flex'>
                    <ul className='lg:flex items-center space-x-5 text-gray-500  font-semibold'>
                        <li className='hover:text-indigo-700 cursor-pointer transition-all duration-200 ease-in-out'>Home</li>
                        <li className='hover:text-indigo-700 cursor-pointer transition-all duration-200 ease-in-out'>About</li>
                        <li className='hover:text-indigo-700 cursor-pointer transition-all duration-200 ease-in-out'>Sales</li>
                        <li className='hover:text-indigo-700 cursor-pointer transition-all duration-200 ease-in-out'>Contact Us</li>
                    </ul>
                </nav>

                <div className='hidden lg:flex space-x-5'>
                    <button
                        onClick={() => router.push('/login')}
                        className='font-semibold bg-indigo-700 text-indigo-50 px-5 py-2 rounded-lg'>Register</button>
                    <button
                        onClick={() => router.push('/login')}
                        className='font-semibold px-5 py-2 border border-indigo-700 rounded-lg text-indigo-700'>Login</button>
                </div>
            </div>
        </header>
    )
}

export default Header