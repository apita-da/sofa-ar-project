import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite' // Importa loadEnv
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => { // Recibe el 'mode'
  const env = loadEnv(mode, process.cwd(), '') // Carga las variables de entorno

  return {
    base: env.NODE_ENV === 'production' ? '/sofa-ar-project/' : '/', // Lógica condicional
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
