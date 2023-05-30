import React, { useEffect, useState } from 'react'
import { BoltIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'
import { AiOutlineHistory } from "react-icons/ai";
import MenuModal from './MenuModal'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '@/slices/userSlice';
import { auth } from '@/firebase';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const router = useRouter();

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

    const [userMenu, openUserMenu] = useState();
    const toggelUserMenu = () => {
        openUserMenu(!userMenu)
    }


    const [menu, openMenu] = useState()
    const toggleMenu = () => {
        openMenu(!menu);
    }

    const [searchQuery, setSearchQuery] = useState("");
    const onSearch = (event) => {
        event.preventDefault();
        router.push(`/results?search_query=${searchQuery}`)
    };

    return (
        <header className='border border-b-gray-300'>
            <div className='relative max-w-7xl mx-auto flex items-center justify-between p-3 lg:p-5'>

                {/* Mobile Style Header */}
                {/* Hamburger Menu */}
                <div className="three col lg:hidden">
                    <div className={`hamburger ${menu ? "is-active" : ''}`} id="hamburger-1" onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <MenuModal menu={menu} />

                {/* Desktop Style Header */}
                <div
                    onClick={() => router.push('/')}
                    className='mx-auto lg:m-0 flex items-center lg:space-x-5 space-x-3 cursor-pointer'
                >
                    <div className='flex items-center justify-center h-8 w-8 lg:h-9 lg:w-9 bg-indigo-600 rounded-full'>
                        <BoltIcon className='h-6 w-6 lg:h-7 lg:w-7 text-indigo-100' />
                    </div>
                    <p className='text-xl font-semibold'>
                        <span className='text-indigo-600'>Space</span>
                        Perfect
                    </p>
                </div>

                {router.pathname === '/' ? "" :
                    <form
                        onSubmit={onSearch}
                        className='hidden relative lg:flex items-center'
                    >
                        <input
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            className='bg-gray-300 px-6 py-2 rounded-xl' type="text" placeholder='Search Location'
                        />
                        <MagnifyingGlassIcon className='h-6 w-6 absolute right-2 text-indigo-600' />
                    </form>
                }

                <nav className='hidden lg:inline-flex'>
                    <ul className='lg:flex items-center space-x-5 text-gray-500  font-semibold'>
                        <li onClick={() => router.push('/')} className='hover:text-indigo-600 cursor-pointer transition-all duration-200 ease-in-out'>Home</li>
                        <li className='hover:text-indigo-600 cursor-pointer transition-all duration-200 ease-in-out'>Sales</li>
                        <li className='hover:text-indigo-600 cursor-pointer transition-all duration-200 ease-in-out'>About</li>
                        <li className='hover:text-indigo-600 cursor-pointer transition-all duration-200 ease-in-out'>Contact Us</li>
                    </ul>
                </nav>

                {user ?
                    <div className='relative' onClick={toggelUserMenu}>
                        <button className='hidden lg:flex flex-col cursor-pointer text-gray-500 hover:underline decoration-indigo-600'>
                            <span className='text-xs font-semibold'>Hello, <span className='text-indigo-600'>{user.name}</span></span>
                            <span className='flex items-center font-semibold'>
                                Account & List
                                <ChevronDownIcon className='h-4 w-4 ml-3' />
                            </span>
                        </button>
                        <div className={`hidden absolute divide-y-2 shadow-lg w-40 flex-col z-10 bg-white mt-5 p-2 ${userMenu ? '!flex' : ''}`}>
                            <p
                                className='p-1 cursor-pointer text-gray-500 font-semibold text-sm flex items-center justify-between hover:text-indigo-600 transition-all duration-300 ease-in-out'>
                                Profile
                                <UserIcon className='h-6 w-6' />
                            </p>
                            <p
                                className='p-1 cursor-pointer text-gray-500 font-semibold text-sm flex items-center justify-between hover:text-indigo-600 transition-all duration-300 ease-in-out'>
                                Recent Search
                                <AiOutlineHistory className='h-6 w-6 ml-2' />
                            </p>
                            <p
                                className='p-1 cursor-pointer text-gray-500 font-semibold text-sm flex items-center justify-between hover:text-indigo-600 transition-all duration-300 ease-in-out'>
                                Liked
                                <HeartIcon className='h-6 w-6 ml-2' />
                            </p>
                            <p
                                onClick={() => auth.signOut()}
                                className='p-1 cursor-pointer text-gray-500 font-semibold flex items-center justify-between text-sm hover:text-indigo-600 transition-all duration-300 ease-in-out'>
                                Logout
                                <ArrowLeftOnRectangleIcon className='h-5 w-5 ml-2' />
                            </p>
                        </div>
                    </div>
                    :
                    <div className='hidden lg:flex space-x-5'>
                        <button
                            onClick={() => router.push('/login')}
                            className='font-semibold bg-indigo-600 text-indigo-50 px-5 py-2 rounded-lg'>
                            Register
                        </button>
                        <button
                            onClick={() => router.push('/login')}
                            className='font-semibold px-5 py-2 border border-indigo-600 rounded-lg text-indigo-600'>
                            Login
                        </button>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header