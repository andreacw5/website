// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { en, it } from "vuetify/locale";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    locale: {
      locales: { it, en },
      current: 'it'
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            primary: '#00a86b',
            secondary: '#9c9d9e'
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})
