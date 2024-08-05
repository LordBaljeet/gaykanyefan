// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-quasar-ui',
    '@vesp/nuxt-fontawesome'
  ],
  quasar: {
    extras: {
      fontIcons: ['fontawesome-v6', 'mdi-v7', 'material-icons']
    },
    plugins: ['Dark'],
    config: {
      dark: "auto",
      brand: {
        text: '#eae9fc',
        primary: '#0f07c3',
        secondary: '#5851cf',
        accent: '#5af726',
  
        dark: '#060609',
        'dark-page': '#060609',
  
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037',
      }
    }
  }
})