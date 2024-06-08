import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://github.com/viandwi24/nuxt3-awesome-starter/blob/v2/nuxt.config.ts

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Home",
      titleTemplate: "%s | Andrea Tombolato"
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n'
  ],
  css: [
     resolve('./assets/scss/global.scss'),
    'vuetify/lib/styles/main.sass',
    resolve('./assets/scss/variables.scss'),
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: 'no_prefix',
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        icon: 'gb',
        name: "English",
        file: "en-US.json",
      },{
        code: "it-IT",
        iso: "it-IT",
        icon: 'it',
        name: "Italiano",
        file: "it-IT.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: false
    },
    defaultLocale: "it-IT",
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
