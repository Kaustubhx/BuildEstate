import Image from 'next/image'
import React from 'react'
import { IoBed } from "react-icons/io5";
import { TbBathFilled } from "react-icons/tb";
import { RiRulerFill } from "react-icons/ri";
import { HeartIcon } from '@heroicons/react/24/outline';

function SearchPropetyCard({ fakeproperty }) {
    console.log(fakeproperty)
    return (
        <div className='bg-indigo-100 p-2 rounded-2xl'>
            <div className='space-y-4 lg:space-y-0 bg-white p-2 rounded-2xl lg:flex'>
                <div className='relative h-52 w-auto lg:h-[17rem] lg:w-96 xl:h-72 xl:w-[30rem]'>
                    <Image className='max-w-auto h-auto object-cover object-center rounded-2xl' src='/property-card-2.jpg' alt='' fill />

                    <div className='absolute flex items-center justify-between w-full p-2'>
                        <div className='flex items-center justify-center space-x-3'>
                            <p className='bg-green-500 rounded-xl px-3 py-2 text-white font-semibold text-sm'>New</p>
                            <p className='bg-blue-500 rounded-xl px-3 py-2 text-white font-semibold text-sm'>For Sale</p>
                        </div>
                        <div className='flex items-center justify-center bg-gray-100 rounded-xl px-2 py-2'>
                            <HeartIcon className='h-5 w-5 fill-gray-400 text-gray-400' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:ml-5 xl:ml-8 lg:flex-grow'>
                    <p className='text-indigo-500 font-semibold text-xl'>₹ {fakeproperty?.price}</p>
                    <p className='font-semibold text-lg text-gray-500'>{fakeproperty?.name}</p>
                    <p className='text-gray-500 font-semibold text-sm'>{fakeproperty?.address} {fakeproperty?.city}, {fakeproperty?.state}-{fakeproperty?.zip}</p>
                    <p className='text-gray-500 mt-3'>{fakeproperty?.description}</p>

                    <div className='flex items-center justify-between mt-3 text-sm font-semibold'>
                        <p className='flex items-center justify-center bg-gray-300 px-3 py-2 rounded-xl text-gray-500'>
                            <IoBed className='h-6 w-6 mr-2 text-amber-500' />
                            {fakeproperty?.bedrooms}
                        </p>
                        <p className='flex items-center justify-center bg-gray-300 px-3 py-2 rounded-xl text-gray-500'>
                            <TbBathFilled className='h-6 w-6 mr-2 text-blue-500' />
                            {fakeproperty?.bathrooms}
                        </p>
                        <p className='flex items-center justify-center bg-gray-300 px-3 py-2 rounded-xl text-gray-500'>
                            <RiRulerFill className='h-6 w-6 mr-2 text-teal-500' />
                            60m <sup>2</sup>
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center mt-5 space-y-3'>
                        <button className='text-lg font-semibold py-2 text-indigo-100 bg-indigo-700 w-full rounded-xl'>
                            Details
                        </button>
                        <button className='text-lg font-semibold py-2 text-indigo-500 border border-indigo-700 w-full rounded-xl'>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPropetyCard