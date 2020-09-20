<template>
  <v-card class="pa-4 text-center d-flex flex-column justify-center align-center">
    <img class="my-4" :src="require(`@/assets/img/${icon}`)" />
    <v-card-title class="headline mb-2">{{ title }}</v-card-title>
    <v-card-subtitle class="subtitle-2">{{ subtitle }}</v-card-subtitle>
    <v-card-actions>
      <v-btn :to="link" text :color="color">Start here</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardButton',
  props: [
    'link',
    'title',
    'subtitle',
    'icon',
    'color'
  ],
  computed: {
    imageSource: function () {
      return this.icon == "mdi-at" ? "../assets/img/icon-email.png" : "../assets/img/icon-badge.png"
    }
  }
}
</script>