import { urlFor } from '@/sanity'
import Image from 'next/image'
import React from 'react'

function SuitablePropertyCard({ properties }) {
    return (
        <article className='text-center flex items-center w-full overflow-scroll overflow-y-hidden space-x-5 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-thumb-rounded-full scrollbar-track-indigo-200 scrollbar-track-rounded-full'>
            {properties.map((suitProp) => (
                <div className='max-w-xs flex flex-col pb-3 cursor-pointer' key={suitProp?._id}>
                    <div className='relative h-[26rem] w-80 mb-5'>
                        <Image className='max-w-full h-auto object-cover rounded-3xl' src={urlFor(suitProp?.image).url()} alt='' fill />
                    </div>
                    <p className='text-gray-500 font-semibold mb-3'>{suitProp?.title}</p>
                    <p className='w-2/4 mx-auto rounded-xl py-2 px-3 border text-sm text-gray-500 font-medium border-gray-300 shadow-md'>
                        <span className='text-gray-500 font-semibold '>4,568</span>{" "}
                        properties
                    </p>
                </div>
            ))}
        </article>
    )
}

export default SuitablePropertyCard