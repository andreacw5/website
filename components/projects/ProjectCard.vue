<script setup lang="ts">
import ImageItem from "~/components/shared/ImageItem.vue";

defineProps({
   project: {
      type: Object,
      required: true
   }
});
const isLocaleItalian = computed(() => {
   return useI18n().locale.value === "it";
});
</script>

<template>
   <a @click="$router.push('/projects/' + project.slug)">
      <v-card class="atom-card common-card mx-auto card-gradient">
         <image-item
            :image-url="project.preview"
            :alt-text="project.title.it + ' cover image'"
            class="project-image"
            position="absolute"
         />
         <v-list
            subheader
            two-line
            style="background: transparent !important;"
         >
            <v-list-item class="text-left">
               <v-list-item-title>
                  <h2>{{ isLocaleItalian ? project.title.it : project.title.en }}</h2>
               </v-list-item-title>
               <v-list-item-subtitle>
                  {{ project.company }}
               </v-list-item-subtitle>
               <template v-slot:append>
                  <v-tooltip v-if="project.technical.main" location="top" :text="project.technical.main.name">
                     <template v-slot:activator="{ props }">
                        <v-btn
                           variant="text"
                           tile
                           class="transition pb-1 cursor-default"
                           :icon="true"
                           v-bind="props"
                        >
                           <v-img :src="project.technical.main.path" width="40" height="40" />
                        </v-btn>
                     </template>
                  </v-tooltip>
               </template>
            </v-list-item>
         </v-list>
      </v-card>
   </a>
</template>

<style scoped>

</style>
