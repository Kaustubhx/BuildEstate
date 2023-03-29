import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Banner() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const onSearch = (event) => {
        event.preventDefault();
        router.push(`/search?q=${searchQuery}`)
    };

    return (
        <div className='relative flex flex-col items-center justify-center'>
            <div className='banner h-96 lg:h-[32rem] w-full' />

            <div className='hidden lg:flex lg:flex-col absolute'>
                <div className='text-center text-gray-500 space-y-5 max-w-[650px] mx-auto'>
                    <p className='text-6xl font-bold'>Let&apos;s find a home that&apos;s perfect for you</p>
                    <p className='text-lg font-medium'>Search confidently with your trusted source of homes for sale or rent</p>
                </div>

                {/* Destop View Search Function */}

                <form
                    onSubmit={onSearch}
                    className='relative mt-5'
                >
                    <input
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        className='bg-gray-200 h-12 xl:w-[900px] lg:w-[600px] rounded-xl px-6 py-2 placeholder:text-gray-500'
                        type="text"
                        placeholder='Search by Location'
                    />
                    <button className='absolute flex items-center bg-indigo-700 text-white font-medium rounded-xl px-4 py-2 top-1 lg:right-14 xl:right-1'>
                        <MagnifyingGlassIcon className='h-6 w-6 mr-2 text-white' />
                        Search
                    </button>
                </form>
            </div>

            {/* Mobile Viewport Search */}
            <div className='lg:hidden mx-5 -mt-14 shadow-lg bg-white rounded-xl relative z-10 max-w-xl md:mx-auto'>
                <form
                    onSubmit={onSearch}
                    className='p-5'
                >
                    <p className='mb-4 font-semibold text-lg text-gray-500'>Find Real Estate That Suits You</p>
                    <div className='relative'>
                        <input
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            className='bg-gray-300 h-12 w-full rounded-xl px-6 py-2 placeholder:text-gray-500' type="text" placeholder='Search by Location'
                        />
                        <button type='submit' className='absolute top-2 right-2 h-8 w-8 bg-indigo-700 rounded-full flex items-center justify-center'>
                            <MagnifyingGlassIcon className='h-6 w-6 text-white' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Banner