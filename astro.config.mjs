import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  output: 'server',
  adapter: deno(),
});
