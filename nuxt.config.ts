// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	modules: ['nuxt-vuefire'],

	vuefire: {
		auth: true,
		config: {
			apiKey: 'AIzaSyBRXScBNxg3SOAAsMSCix2KK2GCthvKQ88',
			authDomain: 'nuxt-test-app-64e24.firebaseapp.com',
			projectId: 'nuxt-test-app-64e24',
			appId: '1:775665757454:web:792216742647f38fac3b5f'
		}
	}
})