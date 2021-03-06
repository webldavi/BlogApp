export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  tailwindcss:{
    config:{
      theme:{
          extend:{
            width:{
              '128': '640px',
              '132': '720px',
              '138': '840px',
              '142': '940px',
            },
            height:{
              '128': '380px'
            }
          }
      }
    }
  },
  
  loading: '~/components/Loading.vue',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    middleware: 'auth'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  server:{
      host: '0'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
