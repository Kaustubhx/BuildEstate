import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'property_card',
  title: 'Property Card',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the property in (₹)Rupees'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'address',
      title: 'Property Address (with zipcode)',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'bedrooms',
      title: 'Number of Bedrooms',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'bathrooms',
      title: 'Number of Bathrooms',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'room_area',
      title: 'Area of rooms in sq.meter',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'type_of_rental',
      title: 'Type Of Rental',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
  ],
})
