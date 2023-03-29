import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react";
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function Login() {
    const router = useRouter();

    useEffect(() => {
        const user = auth.currentUser
        if (user) {
            router.push('/')
            console.log(user);
        } else {
            // Logged Out
        }
        console.log();
    }, [router])


    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const { data: session } = useSession();
    if (session) {
        router.push('/')
    }

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message);
        })
    }

    const login = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='relative flex items-center lg:justify-between md:justify-center h-screen w-screen overflow-hidden'>
            <div className='absolute z-10 lg:ml-20 m-3 bg-white rounded-3xl xl:w-1/2'>

                <div className='xl:p-10 p-5 md:max-w-xl xl:max-w-none'>
                    <div className='mx-auto lg:m-0 flex items-center justify-center lg:space-x-5 space-x-3'>
                        <div className='flex items-center justify-center h-8 w-8 lg:h-9 lg:w-9 bg-indigo-700 rounded-full'>
                            <BoltIcon className='h-6 w-6 lg:h-7 lg:w-7 text-indigo-100' />
                        </div>
                        <p className='text-xl font-semibold'>
                            <span className='text-indigo-700'>Build</span>
                            Estate
                        </p>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between lg:space-x-5 space-y-5 mt-10'>
                        <div className='lg:p-10 p-8 bg-gray-300 rounded-3xl'>
                            <h2 className='font-semibold text-gray-500 lg:text-3xl text-xl mb-3'>Welcome Back!</h2>
                            <p className='font-semibold text-gray-500 mb-8'>Sign In to Continue</p>
                            <p className='capitalize font-semibold text-gray-500 lg:text-4xl text-2xl'>Discover your most <span className='text-indigo-500'>comfort</span> place for your future life</p>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div className='flex flex-col space-y-5'>
                                <input ref={emailRef} className='px-6 py-2 bg-gray-300 rounded-xl' type="text" placeholder='Email' />
                                <input ref={passwordRef} className='px-6 py-2 bg-gray-300 rounded-xl' type="password" placeholder='Password' />
                            </div>
                            <button onClick={login} className='bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl mt-4'>Login</button>
                            <button onClick={() => router.push('/')} className='border border-indigo-700 text-indigo-700 font-semibold py-2 px-6 rounded-xl mt-4'>Cancle</button>

                            <h4 className='text-gray-500 font-semibold text-sm mt-5'>
                                <span>New to BuildEstate?</span>
                                {" "}
                                <span onClick={register} className='text-indigo-600 cursor-pointer'>SignUp Now</span>
                            </h4>

                            <div className='mt-8 flex items-center'>
                                <p className='text-gray-500 font-semibold text-sm'>Or Login Via:</p>
                                <FontAwesomeIcon onClick={signIn} className='h-7 w-7 text-gray-500 ml-3 cursor-pointer' icon={faGoogle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative w-full h-full'>
                <Image className='max-w-full h-auto object-cover' src='/login-bg.jpg' alt='' fill />
            </div>
        </div>
    )
}

export default Login