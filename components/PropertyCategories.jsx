import Image from 'next/image'
import React from 'react'
import PropertyCategoryCard from './PropertyCategoryCard';

function PropertyCategories() {

    const propertyCategories = [1, 2, 3, 4];

    return (
        <div className='py-20'>
            <div className='max-w-7xl mx-auto p-5 text-center'>
                <p className='text-3xl text-gray-500 font-semibold'>Move to What Moves You</p>
                <p className='text-gray-500 font-medium'>Keep calm & travel on</p>

                <div className='flex space-x-5 w-full pt-10 overflow-scroll overflow-y-hidden'>
                    {propertyCategories.map((category, i) => (
                        <PropertyCategoryCard key={i + 1} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PropertyCategories