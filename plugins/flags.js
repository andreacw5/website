import vFlagIcons from 'v-flag-icons'
import 'v-flag-icons/css/ds2/rounded-rectangle.min.css'

export default defineNuxtPlugin((app) => {
   app.vueApp.use(vFlagIcons, {
     component: 'VfIcon'
   })
})
