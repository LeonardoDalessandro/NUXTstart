export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'pt-BR'
    },
    titleTemplate: 'Title template',
    title: 'Title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'descripption' },
      { hid: 'keywords', name: 'keywords', content: 'keywords, keywords' },
      //{ name: 'msapplication-square70x70logo', content: '/favicon/android-chrome-512x512.png' },
      //{ name: 'msapplication-square150x150logo', content: '/favicon/android-chrome-512x512.png' },
      //{ name: 'msapplication-wide310x150logo', content: '/favicon/android-chrome-512x512.png' },
      //{ name: 'msapplication-square310x310logo', content: '/favicon/android-chrome-512x512.png' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:determiner', name: 'og:determiner', content: 'the' },
      { hid: 'og:locale', name: 'og:locale', content: 'pt_BR' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      //{ hid: 'twitter:site', name: 'twitter:site', content: '@account' },
      //{ hid: 'twitter:creator', name: 'twitter:creator', content: '@account' }
    ],
    link: [
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap' },
      { rel: 'shortcut icon', href: 'favicon/favicon.ico', type: 'image/x-icon' },
      // { rel: 'apple-touch-icon', sizes: '512x512', href: '/favicon/android-chrome-192x192.png' },
      // { rel: 'apple-touch-icon', sizes: '384x384', href: '/favicon/android-chrome-384x384.png' },
      // { rel: 'apple-touch-icon', sizes: '192x192', href: '/favicon/android-chrome-192x192.png' },
      // { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/android-chrome-152x152.png' },
      // { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/android-chrome-144x144.png' },
      // { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/android-chrome-120x120.png' },
      // { rel: 'apple-touch-icon', sizes: '64x64', href: '/favicon/android-chrome-64x64.png' },
      // { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon/android-chrome-16x16.png' },
      // { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon/android-chrome-32x32.png' },
      // { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/favicon/android-chrome-96x96.png' },
      // { rel: 'icon', sizes: '384x384', type: 'image/png', href: '/favicon/android-chrome-384x384.png' },
      // { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/favicon/android-chrome-192x192.png' },
      // { rel: 'icon', sizes: '152x152', type: 'image/png', href: '/favicon/android-chrome-152x152.png' },
      // { rel: 'icon', sizes: '144x144', type: 'image/png', href: '/favicon/android-chrome-144x144.png' },
      // { rel: 'icon', sizes: '120x120', type: 'image/png', href: '/favicon/android-chrome-120x120.png' },
      // { rel: 'icon', sizes: '64x64', type: 'image/png', href: '/favicon/android-chrome-64x64.png' }
    ],
    script:[
      // { hid: 'fontawesome', src:"...", crossorigin:"anonymous" },
      // { hid: 'rdstation', src:"...", crossorigin:"anonymous" }
    ],
    bodyAttrs: {
      class: 'lt'
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/Vuelidate'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_BASE_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // https://pwa.nuxtjs.org/manifest/
  pwa: {
    manifest: {
      name: 'Name app',
      short_name: 'Shortname',
      description: 'description',
      lang: 'pt',
      start_url: 'url',
      display: 'standalone',
      background_color: '#63162d',
      theme_color: '#63162d',
      dir: 'ltr',
      useWebmanifestExtension: false,
      // icons: [
      //   {
      //     "src": "/favicon/android-chrome-64x64.png",
      //     "sizes": "64x64",
      //     "type": "image/png"
      //   }, {
      //     "src": "/favicon/android-chrome-120x120.png",
      //     "sizes": "120x120",
      //     "type": "image/png"
      //   }, {
      //     "src": "/favicon/android-chrome-144x144.png",
      //     "sizes": "144x144",
      //     "type": "image/png"
      //   }, {
      //     "src": "/favicon/android-chrome-152x152.png",
      //     "sizes": "152x152",
      //     "type": "image/png"
      //   }, {
      //     "src": "/favicon/android-chrome-192x192.png",
      //     "sizes": "192x192",
      //     "type": "image/png"
      //   }, {
      //     "src": "/favicon/android-chrome-384x384.png",
      //     "sizes": "384x384",
      //     "type": "image/png"
      //   }
      // ],
    },
    icon: {
      source: '~/static/icon.png',
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  }
}
