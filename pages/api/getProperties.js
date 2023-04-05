// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    properties: [
      {
        id: "001",
        name: "Cozy Apartment",
        description: "A charming one-bedroom apartment located in the heart of the city",
        address: "123 Main Street",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        price: 1200,
        bedrooms: 1,
        bathrooms: 1,
        image: "https://example.com/images/cozy-apartment.jpg"
      },
      {
        id: "002",
        name: "Spacious House",
        description: "A beautiful three-bedroom house with plenty of room for your family",
        address: "456 Maple Avenue",
        city: "Sometown",
        state: "CA",
        zip: "67890",
        price: 2500,
        bedrooms: 3,
        bathrooms: 2,
        image: "https://example.com/images/spacious-house.jpg"
      },
      {
        id: "003",
        name: "Luxury Condo",
        description: "A high-end two-bedroom condo with stunning views of the city skyline",
        address: "789 Oak Street",
        city: "Metropolis",
        state: "CA",
        zip: "24680",
        price: 4000,
        bedrooms: 2,
        bathrooms: 2,
        image: "https://example.com/images/luxury-condo.jpg"
      }
    ]
  }
  );
}
