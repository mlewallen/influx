<template>
  <v-app dark>
      <v-navigation-drawer 
        v-model="drawer" 
        app 
        color="primary" 
        dark 
        mini-variant 
        mini-variant-width="100" 
        class="d-flex flex-column justify-space-between app-nav"
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
          <!-- <div class="bottom">
            <v-list-item link @click.prevent="setThemeDark()">
              <v-list-item-icon class="d-flex flex-column justify-center align-center nav-icon">
                <v-icon>{{ darkTheme ? `mdi-brightness-7` : `mdi-brightness-2` }}</v-icon>
                <p class="nav-title mb-0 mt-1">{{ darkTheme ? `Light` : `Dark` }}</p>
              </v-list-item-icon>
            </v-list-item>
          </div> -->
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
    darkTheme: function () {
      return JSON.parse(sessionStorage.getItem('darkTheme'))
    },
    setThemeDark: function () {
      if (this.darkTheme === false) {
        sessionStorage.setItem('darkTheme', true)
      } else {
        sessionStorage.setItem('darkTheme', false)
      }
      window.location.reload();
    }
  },
  method: {
    },
  mounted () {
    if (this.darkTheme) {
      return;
    } else {
      sessionStorage.setItem('darkTheme', false);
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
    // transform: translateY(4px);
  }
  .fade-leave-to {
    opacity: 0;
    // transform: translateY(4px);
  }
}

.app-nav {
  background: linear-gradient(180deg, --primary, lighten(--primary, 15)) !important;
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