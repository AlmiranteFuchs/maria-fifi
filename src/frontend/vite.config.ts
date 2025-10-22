import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from "node:path";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/variables.scss" as *;`,
            },
        },
    },
    server: {
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
});
