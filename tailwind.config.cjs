// const plugin = require('tailwindcss/plugin')

const config = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'sanae-green': "#eeffd3",
				'sanae-dark-green': "#4a4e43"
			},
			backgroundImage: {
				'cirno-fumo': "url('/cirno.png')"
			}
		}
	},

	plugins: [	]
};

module.exports = config;
