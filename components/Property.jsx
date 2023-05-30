import Image from 'next/image';
import React from 'react';
import { urlFor } from '@/sanity'
import { ArrowsPointingOutIcon, StarIcon } from '@heroicons/react/24/solid';
import { TbBath } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { BanknotesIcon, CheckCircleIcon, CurrencyRupeeIcon, EnvelopeIcon, HeartIcon, HomeModernIcon, MapPinIcon, ReceiptPercentIcon, ShareIcon, Square3Stack3DIcon, TagIcon } from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Property({ property }) {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const features = [
        {
            name: 'overview',
            label: 'Overview'
        },
        {
            name: 'price_list',
            label: 'Price List',
        },
        {
            name: 'floor_plan',
            label: 'Floor Plan',
        },
        {
            name: 'broucher',
            label: 'Broucher',
        },
        {
            name: 'video',
            label: 'Video',
        },
        {
            name: 'amenities',
            label: 'Amenities',
        },
        {
            name: 'specification',
            label: 'Specification',
        },
        {
            name: 'commute_time',
            label: 'Commute Time',
        },
        {
            name: 'location_landmark',
            label: 'Location & Landmark',
        },
        {
            name: 'about_builder',
            label: 'About Builder',
        },
    ];

    return (
        <>
            <div className='flex flex-col lg:flex-row-reverse lg:justify-between space-y-5 lg:space-y-0'>
                <div className='h-56 w-[22rem] md:h-96 md:w-[46.5rem] lg:h-[35rem] relative lg:basis-2/3'>
                    <Image className='absolute max-w-full h-full object-cover rounded-2xl' src={'/property-details-2.jpg'} alt='' fill />
                </div>

                <div className='bg-indigo-100 px-5 py-3 rounded-2xl lg:basis-[30%]'>
                    <div className='mt-3'>
                        <span className='bg-indigo-200 font-semibold text-indigo-600 px-3 py-2 rounded-full'>New</span>
                        <h1 className='text-lg lg:text-2xl font-semibold mt-4 w-[56%]'>{property?.street}</h1>
                        <h4 className='text-gray-500'>{property?.city}</h4>
                    </div>

                    <p className='text-sm text-gray-500 mt-5'>{property?.short_description}</p>

                    <div className='mt-5 divide-y-2 divide-gray-300 space-y-2'>
                        <p className='flex items-center font-medium text-gray-500'>
                            <ArrowsPointingOutIcon className='h-5 w-5 mr-3' />
                            Living Area
                            <span className='ml-auto text-gray-700 text-lg font-semibold'>
                                {property?.minSize} - {property?.maxSize} sq.ft
                            </span>
                        </p>

                        <p className='flex items-center font-medium text-gray-500'>
                            <IoBedOutline className='h-5 w-5 mr-3' />
                            Bedrooms
                            <span className='ml-auto text-gray-700 text-lg font-semibold'>
                                {property?.bedrooms}
                            </span>
                        </p>

                        <p className='flex items-center font-medium text-gray-500'>
                            <TbBath className='h-5 w-5 mr-3' />
                            Bathrooms
                            <span className='ml-auto text-gray-700 text-lg font-semibold'>
                                {property?.bathrooms}
                            </span>
                        </p>
                    </div>

                    <h1 className='text-gray-700 text-2xl lg:text-3xl font-bold mt-3'>₹ {property?.price}</h1>

                    <button className='bg-indigo-700 text-white py-2 rounded-lg text-center w-full mt-7 mb-4'>Contact Agent</button>

                    <div className='flex justify-around my-2'>
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
            </div>

            <div className='pt-10 pb-4 border-b-2 border-gray-400/70 shadow-lg'>
                <Slider {...settings}>
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <p className='text-center cursor-pointer'>
                                {feature.label}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Property