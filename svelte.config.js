import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */

import node from '@sveltejs/adapter-node';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node(),

		vite: {
			server: {
				https: {
					key: './secure/koumakan-key.pem',
					cert: './secure/koumakan.pem'
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
