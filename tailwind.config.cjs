// const plugin = require('tailwindcss/plugin')

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'sanae-green': "#eeffd3"
			}
		}
	},

	plugins: []
};

module.exports = config;
