import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'properties',
    title: 'All Properties',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Property Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'short_address',
            title: 'Short Address',
            type: 'string',
        }),
        defineField({
            name: 'street',
            title: 'Street Address',
            type: 'string',
        }),
        defineField({
            name: 'city',
            title: 'City Address',
            type: 'string',
        }),
        defineField({
            name: 'short_description',
            title: 'Short Decription',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Property Price',
            type: 'string',
        }),
        defineField({
            name: 'minSize',
            title: 'Min. Room Size',
            type: 'number',
        }),
        defineField({
            name: 'maxSize',
            title: 'Max. Room Size',
            type: 'number',
        }),
        defineField({
            name: 'bedrooms',
            title: 'No. of bedrooms',
            type: 'string',
        }),
        defineField({
            name: 'bathrooms',
            title: 'No. of bathrooms',
            type: 'number',
        }),
        defineField({
            name: 'isNew',
            title: 'Newly Constructed',
            type: 'boolean',
        }),
        defineField({
            name: 'images',
            title: 'Property Images',
            type: 'array',
            of: [{ type: 'image' }]
        }),
    ]
})