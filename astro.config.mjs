// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Deployed as a GitHub user site (repo: sairohan0.github.io), so no `base` is needed
	site: 'https://sairohan0.github.io',
	integrations: [mdx(), sitemap()],
});
