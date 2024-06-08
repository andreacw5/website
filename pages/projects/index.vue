<script setup lang="ts">
useHead({
   title: 'Portfolio',
   meta: [
      { name: 'description', content: 'This is my webpage blog' },
      { name: 'og:title', content: 'My amazing site.' },
      { name: 'og:description', content: 'My amazing site.' },
   ]
})
import { useProjectStore } from "~/stores/portfolio"
import ProjectCard from "~/components/projects/ProjectCard.vue";
import LoadingIndicator from "~/components/shared/Loading.vue";
const projectStore = useProjectStore();
let projects = projectStore.getAllProjects;
const technologies = projectStore.getAllTechs;
let tab = ref('All');
let loading = false;
watch(() => tab.value, async (value) => {
   loading = true;
   if (value === 'All') {
      projects = projectStore.getAllProjects;
   } else {
      projects = projectStore.getProjectByTech(value);
   }
   loading = false;
});
</script>

<template>
   <v-container grid-list-md text-xs-center>
      <v-card class="card">
         <v-card-title class="card-header">
            <h2 class="ml-4" style="font-size: xxx-large; font-weight: bolder">
               {{ $t('sections.projects') }}
            </h2>
         </v-card-title>
         <v-tabs
            v-model="tab"
            :items="technologies"
            align-tabs="center"
            color="white"
            height="60"
            class="mt-3 mb-2"
         >
            <template v-slot:tab="{ item }">
               <v-tab
                  :text="item.name"
                  :value="item.name"
               ></v-tab>
            </template>
         </v-tabs>
         <v-card-text>
            <!-- Loading -->
            <loading-indicator v-if="loading" />
            <!-- Page content -->
            <v-container v-else class="text-center">
               <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
               >
               </v-row>
               <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
               >
                  <v-col cols="12" xl="4" lg="6" md="6" v-for="project in projects" :key="project.id">
                     <project-card :project="project"/>
                  </v-col>
               </v-row>
            </v-container>
         </v-card-text>
      </v-card>
   </v-container>
</template>

<style scoped>

</style>
