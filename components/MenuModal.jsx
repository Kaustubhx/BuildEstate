import React, { useEffect } from 'react'
import { HomeIcon, PhoneIcon, MegaphoneIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { ArrowLeftOnRectangleIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'
import { AiOutlineHistory } from 'react-icons/ai'
import { auth } from '@/firebase'
import { login, logout, selectUser } from '@/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function MenuModal({ menu }) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                    name: userAuth.displayName,
                }))
            } else {
                dispatch(logout())
            }
        });
        return unsubscribe;
    }, [])

    const router = useRouter();

    return (
        <nav className={`absolute lg:hidden bg-white top-[72px] h-screen left-0 w-72 z-40 -translate-x-80 transition-all duration-500 ease-in-out ${menu ? 'translate-x-0' : ''}`}>
            <ul className='text-center divide-y divide-gray-500 border-b border-gray-500'>
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

            {user ?
                <div className='mt-7'>
                    <p className='text-gray-500 font-semibold p-2'>Hello, <span className='text-indigo-600'>{user.name}</span></p>

                    <div className='divide-y divide-gray-500 border-gray-500'>
                        <p
                            className='p-4 cursor-pointer text-gray-500 font-semibold text-sm flex items-center hover:text-indigo-500 transition-all duration-300 ease-in-out'>
                            <UserIcon className='h-6 w-6 mr-3' />
                            Profile
                        </p>
                        <p
                            className='p-4 cursor-pointer text-gray-500 font-semibold text-sm flex items-center hover:text-indigo-500 transition-all duration-300 ease-in-out'>
                            <AiOutlineHistory className='h-6 w-6 mr-3' />
                            Recent Search
                        </p>
                        <p
                            className='p-4 cursor-pointer text-gray-500 font-semibold text-sm flex items-center hover:text-indigo-500 transition-all duration-300 ease-in-out'>
                            <HeartIcon className='h-6 w-6 mr-3' />
                            Liked
                        </p>
                        <p
                            onClick={() => auth.signOut()}
                            className='p-4 cursor-pointer text-gray-500 font-semibold flex items-center text-sm hover:text-indigo-500 transition-all duration-300 ease-in-out'>
                            <ArrowLeftOnRectangleIcon className='h-5 w-5 mr-3' />
                            Logout
                        </p>
                    </div>
                </div>
                :
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
            }
        </nav>
    )
}

export default MenuModal