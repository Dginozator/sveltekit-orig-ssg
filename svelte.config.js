import preprocess from "svelte-preprocess";
//import adapter from '@sveltejs/adapter-auto';

// svelte.config.js
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

//export default config;

export default {
  kit: {
    adapter: adapter({
      fallback: "200.html",
    }),
  },

  preprocess: [preprocess({})],
};
