// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Papillon - L\'app de vie scolaire pour tous',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'initial-scale=1, width=device-width' },
        { name: 'apple-itunes-app', content: 'app-id=1662669707' }
      ]
    }
  }
})
