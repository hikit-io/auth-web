import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from 'vite-plugin-wasm'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import {VarletUIResolver} from 'unplugin-vue-components/resolvers'

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig({
    plugins: [
        vue(),
        wasm(),
        components({
            resolvers: [VarletUIResolver()]
        }),
        autoImport({
            resolvers: [VarletUIResolver({autoImport: true})]
        })
    ],
    build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
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
