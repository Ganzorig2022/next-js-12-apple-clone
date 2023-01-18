import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defineConfig} from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'apple-sanity',

  projectId: '7izx0rql',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
