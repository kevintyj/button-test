import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import unocssPlugin from 'unocss/vite';

export default defineConfig({
	plugins: [
		unocssPlugin(),
		solid(),
	],
});
