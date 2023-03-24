import { BoltIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='pb-10'>
            <div className='max-w-7xl mx-auto px-5 space-y-10 lg:space-y-0 lg:flex lg:justify-between'>

                <div className='flex flex-col lg:flex-row lg:max-w-lg items-center lg:items-start justify-center text-center lg:text-left space-y-5 lg:space-y-0 lg:space-x-10'>
                    <div className='lg:m-0 flex items-center lg:space-x-5 space-x-3'>
                        <div className='flex items-center justify-center h-8 w-8 lg:h-10 lg:w-10 bg-indigo-700 rounded-full'>
                            <BoltIcon className='h-6 w-6 lg:h-8 lg:w-8 text-indigo-100' />
                        </div>
                        <p className='text-2xl font-semibold'>
                            <span className='text-indigo-700'>Build</span>
                            Estate
                        </p>
                    </div>
                    <p className='text-gray-500 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum veritatis.</p>
                </div>

                <div className='flex items-start justify-between lg:space-x-32'>
                    <div className='space-y-5'>
                        <p className='text-indigo-700 font-semibold'>Services</p>
                        <div className='font-semibold space-y-3 text-gray-500'>
                            <p>Email Marketing</p>
                            <p>Campaingns</p>
                        </div>
                    </div>

                    <div className='space-y-5'>
                        <p className='text-indigo-700 font-semibold'>About</p>
                        <div className='font-semibold space-y-3 text-gray-500'>
                            <p>Our Story</p>
                            <p>Benifits</p>
                        </div>
                    </div>

                    <div className='space-y-5'>
                        <p className='text-indigo-700 font-semibold'>Follow Us</p>
                        <div className='flex space-x-2 lg:space-x-5 text-gray-500'>
                            <FontAwesomeIcon className='h-5 w-5' icon={faTwitter} />
                            <FontAwesomeIcon className='h-5 w-5' icon={faInstagram} />
                            <FontAwesomeIcon className='h-5 w-5' icon={faFacebook} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer