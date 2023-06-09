import Image from 'next/image'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { UsersIcon } from '@heroicons/react/24/solid'

function Services() {

    return (
        <div className='py-20'>
            <div className='border-b-2 border-gray-300'>
                <div className='max-w-7xl mx-auto flex flex-col items-center justify-center'>
                    <p className='text-lg font-semibold text-gray-500'>Trusted by 20,000+ companies</p>

                    <div className='flex items-start justify-between w-full px-5'>
                        <div className='relative h-28 w-40' >
                            <Image className='max-w-full h-auto object-contain' src="/google-trusted.png" alt="" fill />
                        </div>

                        <div className='relative h-28 w-40' >
                            <Image className='max-w-full h-auto object-contain' src="/amazon-trusted.png" alt="" fill />
                        </div>

                        <div className='relative h-28 w-40' >
                            <Image className='max-w-full h-auto object-contain' src="/booking.com-logo.png" alt="" fill />
                        </div>

                        <div className='relative h-28 w-40' >
                            <Image className='max-w-full h-auto object-contain grayscale' src="/microsoft-logo.png" alt="" fill />
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-20'>
                <div className='mx-5 xl:mx-10 py-8 bg-indigo-100 rounded-3xl flex flex-col justify-between'>
                    <div className='flex flex-col md:flex-row items-start md:items-end justify-between max-w-7xl w-full mx-auto p-5'>
                        <div className='flex flex-col items-start'>
                            <p className='text-indigo-700 text-lg font-semibold uppercase mb-1'>Ehm. So?</p>
                            <p className='text-3xl font-semibold text-gray-500 mb-4'>What We do</p>
                            <p className='text-gray-500/70 font-medium'>Full-Service Agents, Modern Technology</p>
                        </div>
                    </div>

                    <div className='max-w-7xl mx-auto lg:-mb-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mt-7'>

                        <div className='bg-white rounded-xl p-5 max-w-[20rem] shadow-lg'>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className='mb-5 h-16 w-16 flex items-center justify-center rounded-full bg-indigo-500/20'>
                                    <ChatBubbleBottomCenterTextIcon className='h-7 w-7 text-indigo-700' />
                                </div>
                                <h3 className='text-2xl font-semibold mb-2 text-gray-600'>Communication</h3>
                                <p className='w-64 text-gray-500'>Single point of contact, in sync with the tools you use. We speak you language.</p>
                            </div>
                        </div>

                        <div className='bg-white rounded-xl p-5 max-w-[20rem] shadow-lg'>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className='mb-5 h-16 w-16 flex items-center justify-center rounded-full bg-indigo-500/20'>
                                    <ShieldCheckIcon className='h-7 w-7 text-indigo-700' />
                                </div>
                                <h3 className='text-2xl font-semibold mb-2 text-gray-600'>Reliability</h3>
                                <p className='w-64 text-gray-500'>We keep our promises, provide upfront timelines and bring predictability.</p>
                            </div>
                        </div>

                        <div className='bg-white rounded-xl p-5 max-w-[20rem] shadow-lg'>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className='mb-5 h-16 w-16 flex items-center justify-center rounded-full bg-indigo-500/20'>
                                    <SparklesIcon className='h-7 w-7 text-indigo-700' />
                                </div>
                                <h3 className='text-2xl font-semibold mb-2 text-gray-600'>Quality First</h3>
                                <p className='w-64 text-gray-500'>Quality first. All projects are backed by our fantastic supports & 100% satisfaction gurantee.</p>
                            </div>
                        </div>

                        <div className='bg-white rounded-xl p-5 max-w-[20rem] shadow-lg'>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className='mb-5 h-16 w-16 flex items-center justify-center rounded-full bg-indigo-500/20'>
                                    <UsersIcon className='h-7 w-7 text-indigo-700' />
                                </div>
                                <h3 className='text-2xl font-semibold mb-2 text-gray-600'>Families</h3>
                                <p className='w-64 text-gray-500'>Rent a beautiful house for your family. Choose from flats in societies and individual apartments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services