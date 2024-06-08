<script setup lang="ts">
const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
const { slug } = route.params
</script>


<template>
   <div>
      <h1>{{ slug }}</h1>
   </div>
</template>

<style scoped>

</style>
