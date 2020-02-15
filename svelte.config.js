// tells VS CODE how to handle preprocessed files
// mirrors rollup.config.js preprocess object

const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src']
    },
    postcss: {
      plugins: [require('postcss-custom-media')]
    }
  })
};
