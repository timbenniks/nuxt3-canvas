import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  build: {
    //transpile: ["@uniformdev/canvas"]
  },
  privateRuntimeConfig: {
    UNIFORM_API_KEY: process.env.UNIFORM_API_KEY,
    UNIFORM_PROJECT_ID: process.env.UNIFORM_PROJECT_ID
  }
})
