<template>
  <v-main>
    <div class="intro text-center d-flex flex-column justify-center white--text">
      <h1 class="text-h1 font-weight-bold pb-4">Welcome to the team!</h1>
      <h4 class="text-h5">Get started by selecting one of the options below</h4>
    </div>
    <div class="quick-links">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="12" md="6" lg="3">
            <card-button link="/badge" title="Badge Creator" subtitle="Customize your own company issued badge!" icon="icon-badge.png" color="primary"/>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="3">
            <card-button link="/email" title="Email Signature" subtitle="Create your company email signature in seconds!" icon="icon-email.png" color="primary"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import CardButton from "../components/CardButton";

export default {
  name: 'Home',
  components: {
    CardButton
  }
}
</script>

<style lang="stylus">
@import "../assets/styles/theme.styl"

.v-main__wrap {
  margin-top: 64px;
}

// Intro
.intro {
  height: 60vh;
  background: url('https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat center / cover;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(--gray-900, .85);
    z-index: -1;
  }
}

.quick-links {
  margin-top: -80px;
  position: relative;
  z-index: 2;
}
</style>