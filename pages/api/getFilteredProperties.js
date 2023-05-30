import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity';

const query = groq`
    *[_type == 'filtered_property'] {
        ...,
    }
`;

export default async function handler(req, res) {
    const filteredProperties = await sanityClient.fetch(query)
    res.status(200).json({ filteredProperties })
}