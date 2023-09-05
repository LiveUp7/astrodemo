import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base:"/astrodemo",
    buildOptions: {
        site: 'https://liveup7.github.io', // 你的网站URL
        base: '/astrodemo/',
    },
});
