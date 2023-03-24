import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { MegaphoneIcon } from '@heroicons/react/24/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

function MenuModal({ menu }) {

    const router = useRouter();

    return (
        <nav className={`absolute lg:hidden bg-white top-[72px] h-screen left-0 w-72 z-40 -translate-x-80 transition-all duration-500 ease-in-out ${menu ? 'translate-x-0' : ''}`}>
            <ul className='text-center divide-y-2'>
                <li onClick={() => router.push('/')} className='text-gray-500 font-semibold p-4 flex items-center justify-start'>
                    <HomeIcon className='h-5 w-5 mr-3' />
                    Home
                </li>
                <li className='text-gray-500 font-semibold p-4 flex items-center justify-start'>
                    <ExclamationCircleIcon className='h-5 w-5 mr-3' />
                    About
                </li>
                <li className='text-gray-500 font-semibold p-4 flex items-center justify-start'>
                    <MegaphoneIcon className='h-5 w-5 mr-3' />
                    Sales
                </li>
                <li className='text-gray-500 font-semibold p-4 flex items-center justify-start'>
                    <PhoneIcon className='h-5 w-5 mr-3' />
                    Contact Us
                </li>
            </ul>

            <div className='flex flex-col border-t border-gray-500 p-2'>
                <p className='text-sm text-gray-500 font-semibold p-2 py-4'>New User / Existing User</p>

                <div className='flex justify-start space-x-5'>
                    <button
                        onClick={() => router.push('/login')}
                        className='xl:text-lg font-semibold bg-indigo-700 text-indigo-50 px-5 py-2 rounded-lg'>
                        Register
                    </button>
                    <button
                        onClick={() => router.push('/login')}
                        className='xl:text-lg font-semibold px-5 py-2 border border-indigo-700 rounded-lg text-indigo-700'>
                        Login
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default MenuModal