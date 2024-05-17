<script setup lang="ts">
useHead({
  title: 'My WebPage',
  meta: [
    { name: 'description', content: 'This is my webpage blog' },
    { name: 'og:title', content: 'My amazing site.' },
    { name: 'og:description', content: 'My amazing site.' },
  ]
})
const show = ref(false)
</script>

<template>
  <v-layout>
    <v-main>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="n in 12" :key="n" cols="12" sm="6" md="4" lg="3">
            <v-card variant="elevated" color="#424242">
              <v-img
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  cover
              ></v-img>
              <v-card-item>
                <div>
                  <div class="text-overline mb-1">
                    ELEVATED
                  </div>
                  <div class="text-h6 mb-1">
                    Card {{ n }}
                  </div>
                </div>
                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>
              </v-card-item>
              <v-card-actions>
                <v-btn
                    color="orange-lighten-2"
                    text="Explore"
                ></v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="show = !show"
                ></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>
