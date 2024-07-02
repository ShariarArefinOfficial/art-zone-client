import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  chunkSizeWarningLimit: 1600,

  plugins: [react()],
})
