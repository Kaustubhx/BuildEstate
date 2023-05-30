import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'filtered_property',
  title: 'Filtered Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Filtered Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'short_address',
      title: 'Short Address',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Property Price (Units in CR, L)',
      type: 'string',
    }),
  ],
})
