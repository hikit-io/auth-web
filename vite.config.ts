import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from 'vite-plugin-wasm'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), wasm()],
    build: {
        outDir: 'docs',
    },
    optimizeDeps: {
        exclude: ['@hikit/auth-service/auth_service_bg.wasm']
    }
})