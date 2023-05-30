import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

const query = groq`
    *[_type == 'properties'] {
        ...,
    }
`;

export default async function handler(req, res) {
  const properties = await sanityClient.fetch(query)
  res.status(200).json({ properties })
}