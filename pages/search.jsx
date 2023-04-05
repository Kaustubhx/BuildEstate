import Header from '@/components/Header'
import SearchPropetyCard from '@/components/SearchPropetyCard';
import { fetchProperties } from '@/utils/fetchProperties';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

function Search({ fakeProperties }) {
    const router = useRouter();
    const location = router.query.q

    return (
        <div className=''>
            <Head>
                <title>Build Estate</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className='lg:flex lg:flex-col max-w-7xl mx-auto'>
                <h1 className='text-2xl border-b border-gray-300 text-gray-500 font-semibold m-5'>Properties in <span className='text-indigo-500'>{location}</span></h1>

                <div className='m-5 lg:flex lg:flex-row-reverse lg:justify-between'>
                    <div className='bg-indigo-100 p-3 rounded-2xl lg:h-96 lg:sticky lg:top-6'>
                        <div className='bg-white p-3 rounded-2xl'>
                            <h2 className='text-xl font-semibold text-gray-500'>
                                Search & Filters
                            </h2>
                            <div className='mt-3'>
                                <div className='flex items-center relative'>
                                    <input className='bg-gray-300 px-6 py-2 rounded-xl w-full placeholder:capitalize' type="text" placeholder='Search page' />
                                    <MagnifyingGlassIcon className='absolute right-1 h-6 w-6 text-indigo-600' />
                                </div>

                                <div>
                                    <select name="" id=""></select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex flex-col grid gap-5 md:grid-cols-2 mt-8 lg:mt-0 flex-grow mr-5'>
                        {fakeProperties?.map((fakeproperty) => (
                            <div key={fakeproperty.id} onClick={() => router.push(`property/${fakeproperty.id}`)}>
                                <SearchPropetyCard fakeproperty={fakeproperty} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Search

export const getServerSideProps = async () => {
    const fakeProperties = await fetchProperties();

    return {
        props: {
            fakeProperties,
        }
    }
}