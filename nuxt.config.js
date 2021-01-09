export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa'
    // '@nuxtjs/firebase'
  ],
  auth: {
    // Options
  },
  router: {
    middleware: ['auth']
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyCloAKfVjfn7XSYnvioBs4dNVldutK38sk',
      authDomain: 'publicidad-bd03a.firebaseapp.com',
      databaseURL: 'https://publicidad-bd03a.firebaseio.com',
      projectId: 'publicidad-bd03a',
      storageBucket: 'publicidad-bd03a.appspot.com',
      messagingSenderId: '863833917213',
      appId: '1:863833917213:web:d8c30ff56ad6a6fb9283f4',
      measurementId: 'G-13LZJ7CB2Y'
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  },
  pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,
    // if you omit a module key form configuration sensible defaults will be applied
    // manifest: false,

    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: false
    }
  },
  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}
