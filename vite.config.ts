import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'

import { VitePWA } from 'vite-plugin-pwa'

const commonConfig = {
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'lodash-es', replacement: 'lodash' }
    ]
  },
  css: {
    preprocessorOptions: {
      postcss: { plugins: [autoprefixer] },
      scss: {
        additionalData: `
                  @import "@/assets/scss/abstracts/_variables.scss";
                  @import "@/assets/scss/abstracts/_mixins.scss";
                `
      }
    }
  },
  plugins: [
    vue({
      script: {
        refSugar: true
      },
      template: {
        compilerOptions: {}
      }
    })
  ]
}

export default ({ command }: any) => {
  if (command === 'serve') {
    return {
      // serve specific config
      ...commonConfig,
      plugins: [
        ...commonConfig.plugins
        // eslintPlugin({
        //   fix: false,
        // }),
      ],
      server: {
        host: true,
        port: 8025
      }
    }
  } else {
    return {
      // build specific config
      ...commonConfig,
      plugins: [
        ...commonConfig.plugins,
        VitePWA({
          workbox: {
            runtimeCaching: [
              {
                urlPattern: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'images-cache'
                }
              },
              {
                urlPattern: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'videos-cache'
                }
              },
              {
                urlPattern: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'fonts-cache'
                }
              },
              {
                urlPattern: /\.css$/,
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'css-cache'
                }
              },
              {
                urlPattern: /\.js$/,
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'js-cache'
                }
              }
            ]
          }
        })
      ],
      build: {
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
          plugins: []
        },
        minify: 'esbuild',
        brotliSize: false
        // assetsSubDirectory: '',
        // assetsPublicPath: '/public/',
      }
    }
  }
}
