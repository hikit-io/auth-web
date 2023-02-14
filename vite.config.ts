import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from "vite-plugin-top-level-await";
// https://vitejs.dev/config/

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig({
    plugins: [vue(), wasm()],
    build: {
        outDir: 'docs',
        rollupOptions:{
            output:{
                sanitizeFileName(fileName) {
                    const match = DRIVE_LETTER_REGEX.exec(fileName);
                    const driveLetter = match ? match[0] : "";
                    return (
                        driveLetter +
                        fileName.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
                    );
                },
            }
        }
    },
    optimizeDeps: {
        exclude: ['@hikit/auth-service/auth_service_bg.wasm', '@hikit/auth-service']
    }
})
