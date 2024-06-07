<script setup lang="ts">
useHead({
   title: 'Portfolio',
   meta: [
      { name: 'description', content: 'This is my webpage blog' },
      { name: 'og:title', content: 'My amazing site.' },
      { name: 'og:description', content: 'My amazing site.' },
   ]
})

const technologies = [
   { icon: 'mdi-expand-all-outline', name: 'All' },
   { icon: 'devicon-javascript-plain', name: 'Javascript' },
   { icon: 'devicon-nestjs-plain', name: 'Nest.js' },
   { icon: 'devicon-nuxtjs-plain', name: 'Nuxt.js' },
   { icon: 'devicon-nodejs-plain', name: 'Node.js' }
];
const value = 0;
const projects = [
   {
      id: 1,
      title: 'Sito web per i gamer',
      description: 'Applicazione web di gestione di una associazione no-profit operante nel campo e-sport. I giocatori iscritti possono partecipare ad eventi, creare team',
      image: 'https://harbor.andreacw.dev/api/v1/files/6b319d775a8a9be85142abfbd612054b',
   },
   {
      id: 2,
      title: 'Project 2',
      description: 'Project 2 description',
      image: 'https://via.placeholder.com/300',
   },
   {
      id: 3,
      title: 'Project 3',
      description: 'Project 3 description',
      image: 'https://via.placeholder.com/300',
   },
   {
      id: 4,
      title: 'Project 4',
      description: 'Project 4 description',
      image: 'https://via.placeholder.com/300',
   },
   {
      id: 5,
      title: 'Project 5',
      description: 'Project 5 description',
      image: 'https://via.placeholder.com/300',
   },
];
</script>

<template>
   <v-container grid-list-md text-xs-center>
      <v-card class="card">
         <v-card-title class="card-header">
            <h2 class="ml-4" style="font-size: xxx-large; font-weight: bolder">
               {{ $t('sections.projects') }}
            </h2>
         </v-card-title>
         <v-card-text>
            <v-btn-toggle
               background-color="primary"
               dark
               multiple
            >
               <v-btn>
                  <v-icon>mdi-format-bold</v-icon>
               </v-btn>

               <v-btn>
                  <v-icon>mdi-format-italic</v-icon>
               </v-btn>

               <v-btn>
                  <v-icon>mdi-format-underline</v-icon>
               </v-btn>

               <v-btn>
                  <v-icon>mdi-format-color-fill</v-icon>
               </v-btn>
            </v-btn-toggle>
            <v-container class="text-center">
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
                     <v-card class="atom-card common-card mx-auto card-gradient">
                        <v-img
                           :src="project.image"
                           height="200px"
                           class="grey lighten-2"
                        ></v-img>
                        <v-card-title class="text-h5">
                           {{ project.title }}
                        </v-card-title>
                        <v-card-text>
                           {{ project.description }}
                        </v-card-text>
                        <v-card-actions>
                           <v-btn
                              color="primary"
                           >
                              {{ $t('sections.view') }}
                           </v-btn>
                        </v-card-actions>
                     </v-card>
                  </v-col>
               </v-row>
            </v-container>
         </v-card-text>
      </v-card>
   </v-container>
</template>

<style scoped>

</style>
