<template>
  <v-card class="pa-4 text-center d-flex flex-column justify-center align-center">
    <v-icon :color="color" size="92" class="pa-4 card-button-icon">{{ icon }}</v-icon>
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
  ]
}
</script>

<style lang="stylus">
@import "../assets/styles/theme.styl";

.card-button-icon::after
  background: -webkit-linear-gradient(--primary, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color transparent !important