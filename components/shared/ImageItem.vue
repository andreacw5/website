<script setup lang="ts">
defineProps({
   imageUrl: {
      type: String,
      required: true
   },
   altText: {
      type: String,
      default: 'Image'
   },
   height: {
      type: Number,
      default: 300
   },
   position: {
      type: String,
      default: 'center center'
   }
})
</script>

<template>
  <v-img
    :alt="altText"
    :height="height"
    :src="imageUrl"
    lazy-src="/img/loading.webp"
    :aspect-ratio="1"
    :position="position"
    cover
    class="grey darken-3 image-transition"
  >
    <template #placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>
