// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-quasar-ui',
    '@vesp/nuxt-fontawesome'
  ],
  quasar: {
    extras: {
      fontIcons: ['fontawesome-v6', 'mdi-v7', 'material-icons']
    },
    plugins: ['Dark'],
    config: {
      dark: true,
      brand: {
        text: '#eae9fc',
        primary: '#0f07c3',
        secondary: '#3e37c5',
        accent: '#5af726',
  
        dark: '#060609',
        'dark-page': '#060609',
  
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037',
      }
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  }
})