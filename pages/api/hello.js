// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import properties from '../../data/data.json'

export default function handler(req, res) {
  const { q } = req.query;
  console.log("At the api", q);

  const property = properties.findMany({
    where: {
      OR: [
        {
          name: {
            contains: q,
            mode: "insensitive"
          }
        },
        {
          price: {
            contains: q,
            mode: "insensitive"
          }
        },
        {
          location: {
            contains: q,
            mode: "insensitive"
          }
        }
      ]
    }
  })

  res.status(200).json({ property });
}
