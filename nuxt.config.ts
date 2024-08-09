// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        "nuxt-quasar-ui",
        "nuxt-vuefire"
    ],
	quasar: {
		extras: {
			fontIcons: ['fontawesome-v6', 'mdi-v7', 'material-icons'],
		},
		plugins: ['Dark', 'Notify'],
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
			},
		},
	},
	vuefire: {
		auth: {
			enabled: true,
		},
		config: {
			apiKey: 'AIzaSyD9LDjVbUHKDHBSZ6QUHNPdNsNM8YIUVQM',
			authDomain: 'gaykanyefan.firebaseapp.com',
			projectId: 'gaykanyefan',
			storageBucket: 'gaykanyefan.appspot.com',
			messagingSenderId: '805568462912',
			appId: '1:805568462912:web:837c5f2948159f60d8dfa5',
		}
	},
	ssr: false,
});