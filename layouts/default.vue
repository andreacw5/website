<script setup lang="ts">
import MainHeader from "~/components/navs/MainHeader.vue";
</script>

<template>
  <v-app class="area" theme="dark">
    <!--[if lte IE 9]>
    <p class="browserupgrade">
    You are using an <strong>outdated</strong> browser. Please
    <a href="https://browsehappy.com/">upgrade your browser</a> to improve
    your experience and security.
    </p>
    <![endif]-->

     <NuxtLoadingIndicator />
    <v-main style="padding-top: 0">
       <main-header />
       <slot />
    </v-main>
  </v-app>
</template>
