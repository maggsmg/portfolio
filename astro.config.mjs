import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	site: "https://blahg.netlify.app/",
	base: "/",
	output: 'static',
	adapter: vercel({
	  webAnalytics: { enabled: true }
	}),
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: "material-theme-darker",
			langs: [],
		},
	},
});