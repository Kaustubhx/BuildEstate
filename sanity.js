import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tpkxwqhf',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: "2022-11-16",
    useCdn: false,
}

export const sanityClient = createClient(config);

export const urlFor = (source) =>
    createImageUrlBuilder(config).image(source);