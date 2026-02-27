import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers
  head: {
    titleTemplate: '%s - user_guide_sic_app',
    title: 'user_guide_sic_app',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Router base for GitHub Pages
  router: {
    base: '/User_guide_app_cus/', // must match your repo name
  },

  // Build configuration
  build: {
    publicPath: '/User_guide_app_cus/_nuxt/', // fixes _nuxt assets
  },

  // Global CSS
  css: [],

  // Plugins
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: ['@nuxtjs/vuetify'],

  // Modules
  modules: ['@nuxtjs/axios'],

  // Axios configuration
  axios: {
    baseURL: '/',
  },

  // Vuetify config
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
}
