import Image from 'next/image'
import React from 'react'

function FilteredPropertyCard() {
    return (
        <div className='w-full flex items-center cursor-pointer'>
            <div className='p-2 bg-white rounded-2xl'>
                <div className=''>
                    <div className='relative h-48 w-56'>
                        <Image className='max-w-full h-auto object-cover rounded-2xl' src="/property-filtered-1.jpg" alt="" fill />
                    </div>
                    <div className='px-2'>
                        <p className='text-gray-500 font-semibold mt-2'>Amaze Estate</p>
                        <div className='flex items-center text-gray-500'>
                            <p className='text-sm'>
                                Mulund, Mithaghar
                            </p>
                            <span className='ml-auto text-lg text-indigo-700 font-semibold'>₹ 11Cr</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FilteredPropertyCard