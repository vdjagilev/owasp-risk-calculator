import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: 'owasp-risk-calculator',
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				// @ts-expect-error - modern-compiler is valid but not in types yet
				api: 'modern-compiler'
			}
		}
	}
});
