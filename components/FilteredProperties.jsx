import React from 'react'
import FilteredPropertyCard from './FilteredPropertyCard'

function FilteredProperties({ properties }) {
    return (
        <div className='py-10'>
            <div className='border-b-2 border-gray-300'>
                <div className='mx-5 xl:mx-10 mb-20 py-8 bg-indigo-100 rounded-3xl flex flex-col justify-between'>
                    <div className='flex flex-col md:flex-row items-start md:items-end justify-between max-w-7xl w-full mx-auto p-5 space-y-4 lg:space-y-4'>
                        <div className='flex flex-col items-start'>
                            <p className='text-indigo-700 text-lg uppercase mb-1'>Come Now!</p>
                            <p className='text-3xl font-semibold text-gray-500 mb-4 capitalize'>Live Who you Are</p>
                            <p className='text-gray-400 font-medium'>Own the Home Meant for You.</p>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4'>
                            <select className='px-4 py-3 w-60 rounded-lg text-gray-500 font-semibold' name="Recently Added" id="recent">
                                <option value="Recently Added">Recently Added</option>
                                <option value="Recently Added">Furnished</option>
                                <option value="Recently Added">Un-Furnished</option>
                                <option value="Recently Added"></option>
                            </select>
                            <button className='mt-4 lg:mt-0 bg-indigo-300/50 text-indigo-600 py-3 px-5 rounded-xl font-semibold'>
                                See More
                            </button>
                        </div>
                    </div>

                    <div className='pt-10 px-5 max-w-7xl mx-auto w-full flex'>
                        <FilteredPropertyCard properties={properties} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilteredProperties