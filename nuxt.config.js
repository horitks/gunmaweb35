import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  // manifest.json
  manifest: {
    name: "gunmaweb35",
    short_name: "gunmaweb",
    lang: 'ja',
    title: 'gunmaweb35pwa',
    'og:title': 'gunmaweb35pwa',
    description: 'gunmaweb35pwaのデモです。',
    'og:description': 'gunmaweb35pwaのデモです。',
    theme_color: '#f2f7ff',
    background_color: '#ffffff',
    display: "fullscreen",
    "icons": [
      {
        "src": "/images/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "/images/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/images/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "/images/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/images/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "/images/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/images/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "im3age/png"
      },
      {
        "src": "/images/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
