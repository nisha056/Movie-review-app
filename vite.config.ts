// vite.config.js
export default {
  // ...
  build: {
    cssCodeSplit: true,
    minify: true,
  },
  esbuild: {
    // ...
    tsconfig: {
      allowSyntheticDefaultImports: true,
    },
  },
};
