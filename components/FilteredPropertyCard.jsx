import { urlFor } from '@/sanity'
import Image from 'next/image'
import React from 'react'

function FilteredPropertyCard({ properties }) {
    return (
        <div className='w-full flex items-center overflow-y-hidden space-x-5 pb-3 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-thumb-rounded-full scrollbar-track-indigo-200 scrollbar-track-rounded-full'>
            {properties.map((property) => (
                <div key={property._id} className='p-2 bg-white rounded-2xl cursor-pointer'>
                    <div className=''>
                        <div className='relative h-48 w-56'>
                            <Image className='max-w-full h-auto object-cover rounded-2xl' src={urlFor(property?.image).url()} alt="" fill />
                        </div>
                        <div className='px-2'>
                            <p className='text-gray-800 font-semibold mt-2'>{property?.title}</p>
                            <div className='flex items-center text-gray-500'>
                                <p className='text-sm'>
                                    {property?.short_address}
                                </p>
                                <span className='ml-auto text-lg text-indigo-700 font-semibold'>₹ {property?.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default FilteredPropertyCard