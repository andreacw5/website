<script setup lang="ts">
const links = [
  {
    title: 'Home',
    value: '/',
  },
  {
    title: 'Contact',
    value: '/contact',
  },
  {
    title: 'About',
    value: '/about',
  },
  {
    title: 'Blog',
    value: '/blog',
  },
];
const drawer = ref(false);
</script>

<template>
  <v-app class="area">
    <!--[if lte IE 9]>
    <p class="browserupgrade">
    You are using an <strong>outdated</strong> browser. Please
    <a href="https://browsehappy.com/">upgrade your browser</a> to improve
    your experience and security.
    </p>
    <![endif]-->

    <v-main class="bg-grey-darken-1">
      <v-app-bar :elevation="2" class="bg-grey-darken-4">
        <template v-slot:prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>{{ $t('app_title') }}</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
      >
        <v-list>
          <v-list-item v-for="link in links" :key="link.value" nuxt :to="link.value">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <slot />
      <v-footer class="bg-grey-darken-4" app>
        <v-row justify="center" no-gutters>
          <v-btn
              v-for="link in links"
              :key="links.value"
              class="mx-2"
              variant="text"
              nuxt
              :to="link.value"
          >
            {{ link.title }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>
