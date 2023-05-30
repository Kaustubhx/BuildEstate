import React from 'react'
import SuitablePropertyCard from './SuitablePropertyCard';

function SuitableProperties({ properties }) {
    return (
        <div className='py-20'>
            <div className='max-w-7xl mx-auto p-5 text-center'>
                <p className='text-3xl text-gray-500 font-semibold'>Move to What Moves You</p>
                <p className='text-gray-400 font-medium'>Keep calm & travel on</p>

                <div className='flex space-x-5 w-full pt-10'>
                    <SuitablePropertyCard properties={properties} />
                </div>
            </div>
        </div>
    )
}

export default SuitableProperties