export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt Example",
      titleTemplate: "%s | nuxt3-vuetify",
    },
  },
  modules: ['@nuxtjs/sitemap', "@nuxtjs/i18n"],
  css: ["vuetify/lib/styles/main.sass", '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ["vuetify"],
  },
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
    ],
    defaultLocale: "en-US",
  },
})
