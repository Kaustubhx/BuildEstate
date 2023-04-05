import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Image from 'next/image';
import { ArrowsPointingOutIcon, StarIcon } from '@heroicons/react/24/solid';
import { TbBath } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { BanknotesIcon, CheckCircleIcon, CurrencyRupeeIcon, EnvelopeIcon, HeartIcon, HomeModernIcon, MapPinIcon, ReceiptPercentIcon, ShareIcon, Square3Stack3DIcon, TagIcon } from '@heroicons/react/24/outline';
import { fetchProperties } from '@/utils/fetchProperties';

function PropertyDetails({ fakeProperties }) {
    const ratings = [1, 2, 3,]
    console.log(fakeProperties)

    const router = useRouter();

    return (
        <div>
            <Header />

            <div className='max-w-7xl mx-auto p-5'>
                <div className='flex justify-between'>
                    <div className='bg-indigo-100 p-5 flex flex-col basis-[25%] rounded-3xl'>
                        <div className='w-2/3'>
                            <span className='bg-indigo-200 font-semibold text-indigo-600 px-3 py-2 rounded-full'>New</span>
                            <p className='text-3xl font-semibold mt-5'>Wooster 7 Street, 3A</p>
                            <p className='text-gray-500 font-medium'>Soho, New York</p>
                        </div>

                        <p className='text-gray-500 text-sm mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores recusandae asperiores eum odit officia earum eaque nam accusamus.
                        </p>

                        <div className='mt-5 divide-y-2 divide-gray-300 space-y-2'>
                            <p className='flex items-center font-medium text-gray-500'>
                                <ArrowsPointingOutIcon className='h-5 w-5 mr-3' />
                                Living Area
                                <span className='ml-auto text-gray-700 text-lg font-semibold'>
                                    60m <sup>2</sup>
                                </span>
                            </p>

                            <p className='flex items-center font-medium text-gray-500'>
                                <IoBedOutline className='h-5 w-5 mr-3' />
                                Bedrooms
                                <span className='ml-auto text-gray-700 text-lg font-semibold'>
                                    2
                                </span>
                            </p>

                            <p className='flex items-center font-medium text-gray-500'>
                                <TbBath className='h-5 w-5 mr-3' />
                                Bathrooms
                                <span className='ml-auto text-gray-700 text-lg font-semibold'>
                                    1
                                </span>
                            </p>
                        </div>
                        <p className='text-gray-700 text-3xl font-bold mt-3'>₹ {fakeProperties.price}</p>
                        <button className='bg-indigo-600 text-white font-semibold py-2 px-6 rounded-xl mt-5'>Get pre-qualified</button>
                        <div className='flex justify-around mt-5'>
                            <p className='text-gray-500 flex items-center cursor-pointer'>
                                <HeartIcon className='h-5 w-5 mr-1' />
                                Save
                            </p>
                            <p className='text-gray-500 flex items-center cursor-pointer'>
                                <ShareIcon className='h-5 w-5 mr-1' />
                                Share
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between basis-[70%]'>
                        <div className='relative h-[31rem] w-[56rem]'>
                            <Image className='absolute max-w-full h-auto object-cover object-center rounded-3xl' src='/property-details-2.jpg' alt='' fill />
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-8'>
                    <div className='flex flex-col basis-[25%]'>
                        <div className='bg-indigo-100 p-5 flex flex-col items-center rounded-3xl'>
                            <div className='flex items-center justify-center px-3 py-1 border border-gray-400 rounded-lg ml-auto'>
                                <EnvelopeIcon className='h-6 w-6 text-indigo-600 ml-auto' />
                            </div>
                            <div className='flex items-center'>
                                <div className='relative h-24 w-24'>
                                    <Image className='absolute max-w-full h-auto rounded-full object-cover' src="/agent-1.jpg" alt='' fill />
                                </div>
                                <div className='ml-4'>
                                    <p className='text-gray-500 text-xl'>Agent</p>
                                    <p className='text-gray-700 text-2xl font-semibold'>Antonio Hotston</p>
                                    <div className='flex'>
                                        {ratings.map((rating, i) => (
                                            <StarIcon key={i} className='h-5 w-5 text-yellow-400' />
                                        ))}
                                        <StarIcon className='h-5 w-5 text-gray-400' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-indigo-100 p-5 mt-8 rounded-3xl'>
                            <p className='uppercase text-gray-700 font-medium text-xl'>Reviews</p>
                            <div className='p-3 flex flex-col items-start'>
                                <div className='flex'>
                                    <div className='relative h-14 w-14'>
                                        <Image className='absolute max-w-full h-auto object-cover rounded-lg' src='/agent-1.jpg' alt='' fill />
                                    </div>
                                    <div className='ml-2'>
                                        <p className='text-gray-700'>Tonny Star</p>
                                        <p className='text-gray-500 text-xs'>06:36 pm</p>
                                    </div>
                                </div>
                                <div className='max-w-xs mt-2 text-gray-500'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <input className='px-4 py-2 rounded-lg w-full' type="text" placeholder='Write my review' />
                        </div>
                    </div>

                    <div className='flex flex-col basis-[72%]'>
                        <div className='flex flex-col'>

                            <div>
                                <p className='uppercase text-gray-700 text-lg font-medium'>Description</p>
                                <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia beatae animi, eum maiores pariatur quibusdam. Officiis accusantium consectetur tenetur eaque alias asperiores. Facilis delectus magni beatae, reprehenderit provident consequuntur minus sequi veritatis?</p>
                            </div>
                            <div className='mt-10 grid grid-cols-3 grid-rows-3 grid-flow-row gap-5'>
                                <div className='flex items-center'>
                                    <HomeModernIcon className='h-7 w-7 text-gray-500' />
                                    <div className='ml-3'>
                                        <p className='text-gray-700'>Condo</p>
                                        <p className='text-gray-500 text-xs'>Hometype</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <BanknotesIcon className='h-7 w-7 text-gray-500' />
                                    <div className='ml-3'>
                                        <p className='text-gray-700'>$500</p>
                                        <p className='text-gray-500 text-xs'>Montly common charges</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <Square3Stack3DIcon className='h-7 w-7 text-gray-500' />
                                    <div className='ml-3'>
                                        <p className='text-gray-700'>4</p>
                                        <p className='text-gray-500 text-xs'>Floors</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <CheckCircleIcon className='h-7 w-7 text-gray-500' />
                                    <div className='ml-3'>
                                        <p className='text-gray-700'>Good</p>
                                        <p className='text-gray-500 text-xs'>General Condition</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <CurrencyRupeeIcon className='h-7 w-7 text-gray-500' />
                                    <div className='ml-3'>
                                        <p className='text-gray-700'>For Sale</p>
                                        <p className='text-gray-500 text-xs'>Stauts</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <TagIcon className='h-7 w-7 text-gray-500' />
                                    <div className='ml-3'>
                                        <p className='text-gray-700'>20%</p>
                                        <p className='text-gray-500 text-xs'>Sale</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <MapPinIcon className='h-7 w-7 text-gray-500' />
                                    <div className='ml-3'>
                                        <p className='text-gray-700'>West-North-East-South</p>
                                        <p className='text-gray-500 text-xs'>Exposure</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <ReceiptPercentIcon className='h-7 w-7 text-gray-500' />
                                    <div className='ml-3'>
                                        <p className='text-gray-700'>$40</p>
                                        <p className='text-gray-500 text-xs'>Tax</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <p className='uppercase text-lg font-medium text-gray-700'>Amenities</p>
                            <div className='grid'>
                                <div className='flex'>
                                    <p>Sports</p>
                                </div>
                                <div className='flex'>
                                    <p>Football</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PropertyDetails

export const getServerSideProps = async () => {
    const fakeProperties = await fetchProperties();

    return {
        props: {
            fakeProperties,
        }
    }
}