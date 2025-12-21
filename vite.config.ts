import path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/dist/',
    plugins: [
        vue(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
