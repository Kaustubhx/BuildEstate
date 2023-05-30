import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'suitableProperties',
  title: 'Location Suitable Properties',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Proper Image in winter area',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ],
})
