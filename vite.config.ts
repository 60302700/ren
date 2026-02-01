
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'figma:asset/ee1013ade33029277d774c9a306bf14696c1bd06.png': path.resolve(__dirname, './src/assets/ee1013ade33029277d774c9a306bf14696c1bd06.png'),
      'figma:asset/e00a7703f818a3e3f25d26bb2d0f7622bba657fa.png': path.resolve(__dirname, './src/assets/e00a7703f818a3e3f25d26bb2d0f7622bba657fa.png'),
      'figma:asset/d6e489760bee7094d058709977f3ad2051251e86.png': path.resolve(__dirname, './src/assets/d6e489760bee7094d058709977f3ad2051251e86.png'),
      'figma:asset/d451e6e49c2813b45cbb28596d902e73809e07b6.png': path.resolve(__dirname, './src/assets/d451e6e49c2813b45cbb28596d902e73809e07b6.png'),
      'figma:asset/bcde49ce921faca89dff5b7a5bb57c6cfb20be6c.png': path.resolve(__dirname, './src/assets/bcde49ce921faca89dff5b7a5bb57c6cfb20be6c.png'),
      'figma:asset/ac24a96a1b5920ec6f9c7be32ffdfc168abaedd5.png': path.resolve(__dirname, './src/assets/ac24a96a1b5920ec6f9c7be32ffdfc168abaedd5.png'),
      'figma:asset/698c412a1f40bc7103185048ead9800fdc43c034.png': path.resolve(__dirname, './src/assets/698c412a1f40bc7103185048ead9800fdc43c034.png'),
      'figma:asset/5f8caf64ef4b3463e5000853feaff0cc7f4d5200.png': path.resolve(__dirname, './src/assets/5f8caf64ef4b3463e5000853feaff0cc7f4d5200.png'),
      'figma:asset/492c2eb79f87f1d6e46824c175a8eae197911577.png': path.resolve(__dirname, './src/assets/492c2eb79f87f1d6e46824c175a8eae197911577.png'),
      'figma:asset/22cb1d14f57fccf95403b98dba3886173e1f8e3e.png': path.resolve(__dirname, './src/assets/22cb1d14f57fccf95403b98dba3886173e1f8e3e.png'),
      'figma:asset/03316042abb937db5a6f7216b3e88b57d8783265.png': path.resolve(__dirname, './src/assets/03316042abb937db5a6f7216b3e88b57d8783265.png'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});
