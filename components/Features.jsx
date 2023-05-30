import React from 'react';
import { ArrowsPointingOutIcon, StarIcon } from '@heroicons/react/24/solid';
import { TbBath } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { BanknotesIcon, CheckCircleIcon, CurrencyRupeeIcon, EnvelopeIcon, HeartIcon, HomeModernIcon, MapPinIcon, ReceiptPercentIcon, ShareIcon, Square3Stack3DIcon, TagIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Overview from './Overview';

function Features({ property }) {

    return (
        <div className='mt-10'>
            <section id='highlights'>
                <Overview />
            </section>
        </div>
    )
}

export default Features