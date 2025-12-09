import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Jika Anda meng-host ke GitHub Pages pada repository 'Portofolio-Ize',
// set `base` ke '/Portofolio-Ize/' sehingga asset yang di-build memakai path yang benar.
// Untuk hosting di domain root (mis. Vercel atau custom domain), ubah `base` ke '/' atau hapus.
export default defineConfig({
  base: '/Portofolio-Ize/',
  plugins: [react()],
})
