import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity';

const query = groq`
    *[_type == 'suitableProperties'] {
        ...,
    }
`;

export default async function handler(req, res) {
    const suitableProperties = await sanityClient.fetch(query)
    res.status(200).json({ suitableProperties })
}