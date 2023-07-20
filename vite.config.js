import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment' // NEW .env file

//const port = process.env.PORT || 3000

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(
  'VITE_APP_EMAILJS_SERVICE_ID',
  'VITE_APP_EMAILJS_TEMPLATE_ID',
  'VITE_APP_EMAILJS_PUBLIC_KEY')],
})
