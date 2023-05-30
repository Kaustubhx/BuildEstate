import React from 'react'
import Head from 'next/head';
import Header from '@/components/Header';
import Features from '@/components/Features';
import Property from '@/components/Property'
import { sanityClient, urlFor } from '../../../sanity';
import { groq } from 'next-sanity';

function PropertyDetails({ property }) {

    return (
        <div>
            <Head>
                <title>Build Estate</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className='flex flex-col max-w-7xl mx-auto p-3 lg:p-5'>
                <Property property={property} />
                <Features property={property} />
            </div>
        </div>
    )
}

export default PropertyDetails

export const getStaticPaths = async () => {
    const query = groq`*[_type == 'properties'] {
        slug {
            current
        }
    }
    `;

    const properties = await sanityClient.fetch(query);

    const paths = properties.map((property) => ({
        params: {
            slug: property.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == 'properties' && slug.current == '${slug}'][0]`;

    const property = await sanityClient.fetch(query);

    return {
        props: {
            property,
        },
    }
}