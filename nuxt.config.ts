import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  privateRuntimeConfig: {
    contentful: {
      SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
      CDA_ACCESS_TOKEN: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
      CPA_ACCESS_TOKEN: process.env.CONTENTFUL_CPA_ACCESS_TOKEN,
    },
    uniform: {
      API_KEY: process.env.UNIFORM_API_KEY,
      PROJECT_ID: process.env.UNIFORM_PROJECT_ID,
    }
  }
})
