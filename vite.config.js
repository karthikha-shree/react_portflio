export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'docs', // 👈 important
  },
})
