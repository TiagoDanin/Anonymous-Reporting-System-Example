module.exports = {
	head: {
		title: 'Anonymous Reporting System Example',
		meta: [
			{charset: 'utf-8'},
			{lang: 'en'},
			{nativeUI: true},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'Anonymous Reporting System Example'},
			{hid: 'keywords', name: 'keywords', content: 'anonymous, database, example, ifpa, mysql, report, reporting, reporting-tool, system'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
			{rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
		]
	},
	manifest: {
		name: 'Anonymous Reporting System Example'
	},
	build: {
		// Vendor: ['axios'],
		extractCSS: false
	},

	css: [
		'~/assets/css/main.css'
	],
	plugins: [
		'~/plugins/axios'
	],
	modules: [
		['@nuxtjs/vuetify', {
			theme: {
				primary: '#009688',
				secondary: '#8bc34a',
				accent: '#03a9f4',
				error: '#ff5722',
				info: '#2196f3',
				success: '#4CAF50',
				warning: '#ffc107'
			}
		}],
		['@nuxtjs/axios', {
			BaseURL: 'http://localhost:3000'
		}]
		// ['@nuxtjs/pwa', { icon: false }]
	],
	serverMiddleware: [
		'~/api/status.js',
		'~/api/blog.js'
	],
	ignorePaths: [
		'/api'
	]
}
