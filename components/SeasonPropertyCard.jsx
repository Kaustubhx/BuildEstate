import Image from 'next/image'
import React from 'react'

function SeasonPropertyCard() {
    return (
        <article className='text-center flex flex-col items-center w-full'>
            <div className='max-w-xs'>
                <div className='relative h-[26rem] w-80 mb-5'>
                    <Image className='max-w-full h-auto object-cover rounded-3xl' src="/property-card-1.jpg" alt='' fill />
                </div>
                <p className='text-gray-500 font-semibold mb-3'>Enjoy the great cold</p>
                <p className='w-2/5 mx-auto rounded-xl py-2 px-3 border text-sm text-gray-500 font-medium border-gray-500 shadow-md'>
                    <span className='text-gray-500 font-semibold '>4,568</span>{" "}
                    properties
                </p>
            </div>
        </article>
    )
}

export default SeasonPropertyCard