export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-windicss', 'nuxt-graphql-client'],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  'graphql-client': {
    clients: {
      default: {
        host: `${process.env.NUXT_API_STRAPI_URL}/graphql`,
        token: {
          name: 'Authorization',
          type: 'Bearer',
          value: process.env.NUXT_API_STRAPI_TOKEN,
        },
        retainToken: true,
      },
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
