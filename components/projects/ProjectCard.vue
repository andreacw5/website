<script setup lang="ts">
defineProps({
   project: Object as PropType<{
      id: number;
      title: string;
      description: string;
      image: string;
   }>,
});
</script>

<template>
   <v-card class="atom-card common-card mx-auto card-gradient">
      <v-card-title class="text-h5">
         <nuxt-link :to="`/portfolio/${project.id}`">{{ project.title }}</nuxt-link>
      </v-card-title>
      <v-img :src="project.image" height="200" />
      <v-card-text>
         {{ project.description }}
      </v-card-text>
   </v-card>
</template>

<style scoped>

</style>
