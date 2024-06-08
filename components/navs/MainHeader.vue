<script setup lang="ts">
const drawer = ref(false);

const links = [
   { title: 'Home', value: '/' },
   { title: 'Portfolio', value: '/projects' },
   { title: 'Travels', value: '/travels' },
];

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
   return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
   <v-container grid-list-md text-xs-center>
      <v-row wrap>
         <v-col cols="12">
            <v-app-bar class="secondary-border mt-3 card" style="position: relative">
               <template class="hidden-md-and-up" v-slot:prepend>
                  <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="hidden-md-and-up"  />
               </template>
               <v-divider vertical inset class="mr-4 ml-2 hidden-md-and-up white-text" />
               <v-spacer class="hidden-md-and-up" />
               <v-tooltip location="end" text="Go to homepage">
                  <template v-slot:activator="{ props }">
                     <v-img
                        v-bind="props"
                        class="ml-6 mr-6 home-btn"
                        :max-width="120"
                        :max-height="120"
                        alt="AT Logo"
                        src="/img/atom-web.webp"
                        @click="$router.push('/')"
                     ></v-img>
                  </template>
               </v-tooltip>
               <v-spacer class="hidden-sm-and-down" />
               <v-btn variant="text" to="/" nuxt class="hidden-sm-and-down white-text mr-1">
                  {{ $t('sections.home') }}
               </v-btn>
               <v-btn variant="text" to="/projects" nuxt class="hidden-sm-and-down white-text mr-1">
                  {{ $t('sections.projects') }}
               </v-btn>
               <v-btn variant="text" to="/travels" nuxt class="hidden-sm-and-down white-text mr-1">
                  {{ $t('sections.travels') }}
               </v-btn>
            </v-app-bar>
            <v-navigation-drawer
               v-model="drawer"
               class="gray darken-4"
               :location="$vuetify.display.mobile ? 'bottom' : undefined"
               temporary
            >
               <v-list>
                  <v-list-item v-for="link in links" :key="link.value" nuxt :to="link.value">
                     <v-list-item-title>{{ link.title }}</v-list-item-title>
                  </v-list-item>
               </v-list>
               <template #append>
                  <div class="pa-2">
                     <v-btn block @click="drawer = false">Logout</v-btn>
                  </div>
               </template>
            </v-navigation-drawer>
         </v-col>
      </v-row>
   </v-container>
</template>

<style scoped>
.home-btn {
   cursor: pointer;
}
</style>
