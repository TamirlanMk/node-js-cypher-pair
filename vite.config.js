import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    root: './src',
    base: './',
    css: {
        devSourcemap: true,
    },
    build: {
        base: './',
        emptyOutDir: false,
        outDir: '../build/',
        rollupOptions: {
            // lib: {
            //     // Could also be a dictionary or array of multiple entry points
            //     entry: resolve(__dirname, 'lib/main.js'),
            //     name: 'Swiper',
            //     // the proper extensions will be added
            //     fileName: 'my-lib',
            // },
            input: {
                main: resolve(__dirname, 'src/index.html')
                // For add new page, change path and page name
                // pages: resolve(__dirname, 'src/pages/index.html'),
            },
            output: {
                entryFileNames: `js/[name].js`,
                assetFileNames: chunk => {
                    if (chunk.name.endsWith('.woff2')) {
                        return 'fonts/[name].[ext]'
                    }

                    if (chunk.name.endsWith('.woff')) {
                        return 'fonts/[name].[ext]'
                    }

                    return 'css/[name].[ext]'
                },
            }
        }
    },
});
