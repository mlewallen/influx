<template>
  <v-app dark>
    <v-app-bar clipped-left fixed class="app-toolbar">
      <div class="d-flex align-center">
        <img :src="require('@/assets/img/icon-group.png')" width="40" />
        <span class="h5 ml-4 mr-2 pr-2 logo">Influx</span>
        <span class="caption">On-boarding Suite</span>
      </div>
      <v-spacer></v-spacer>
      <v-avatar color="grey" size="40">
        <v-icon v-if="user.img == ''" dark>mdi-account</v-icon>
        <img v-else :src="user.img" />
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer" 
      app 
      clipped
      color="primary" 
      dark 
      mini-variant 
      mini-variant-width="100" 
      class="app-nav"
    >
      <v-list dense nav class="d-flex flex-column justify-space-between nav-wrap">
        <div class="top">
          <v-list-item v-for="route in $router.options.routes" :key="route.name" link :to="route.path">
            <v-list-item-icon class="d-flex flex-column justify-center align-center nav-icon">
              <v-icon>{{ route.meta.icon }}</v-icon>
              <p class="nav-title mb-0 mt-1">{{ route.meta.title }}</p>
            </v-list-item-icon>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-layout fill-height>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: true
  }),
  computed: {
    user: function () {
      return this.$store.state.userData
    }
  }
};
</script>

<style lang="stylus">
@import "assets/styles/theme.styl";
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

.v-application {
  font-family: 'Roboto', sans-serif !important;
  font-weight: 500;
  font-size: 16px;
  background: --gray-200 !important;

  .theme--light.v-app-bar.v-toolbar.v-sheet {
    box-shadow: 0px 3px 15px rgba(0,0,0,.12) !important;
  }
  .v-btn--contained {
    box-shadow: 0px 3px 5px rgba(0,0,0,.12) !important;  
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .4s ease;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(-2px);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-2px);
  }
}

.app-toolbar {
  z-index: 101;

  .logo {
    border-right: 1px solid rgba(0,0,0,.25);
  }
}

.app-nav {
  background: linear-gradient(180deg, --primary, lighten(--primary, 15)) !important;
  margin-top: 64px;
  z-index: 100;
  .nav-wrap {
    height: 100vh;
    .nav-icon {
      height: 64px !important;
      margin-left: 0 !important;
      .nav-title {
        font-size: 12px;
        display: block;
        opacity: .7;
        text-align: center;
        line-height: 16px;
      }
    }
    .theme--dark.v-list-item--active:hover::before, .theme--dark.v-list-item--active::before {
      opacity: .14;
    }
  }
}
</style>