<template>
  <v-card class="pa-4 text-center d-flex flex-column justify-center align-center">
    <!-- <v-icon :color="color" size="92" class="pa-4 card-button-icon">{{ icon }}</v-icon> -->
    <v-img src="../assets/img/icon-badge.png" aspect-ratio="1.7"></v-img>
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

<style lang="stylus">
@import "../assets/styles/theme.styl";

.card-button-icon::after
  background: -webkit-linear-gradient(--primary, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color transparent !important