<template>
  <main class="flex flex-column align-center justify-center">
    <div class="badge mb-4" id="print">
      <div class="badge--wrapper">
        <div
          class="badge--avatar"
          :style="`background-image: url(${user.img})`"
        ></div>
        <div class="badge--name">
          <h2 class="badge--name-heading">
            <span class="first">{{ user.first }}</span>
            <span class="last">{{ user.last }}</span>
          </h2>
        </div>
        <div class="badge--title">{{ user.title }}</div>
        <div
          class="badge--info flex flex-row align-center justify-space-between text-center"
        >
          <div class="badge--location">
            <span class="label">Location</span>
            {{ user.location }}
          </div>
          <div class="badge--date">
            <span class="label">Hire Date</span>
            {{ user.date }}
          </div>
        </div>
      </div>
    </div>
    <div id="canvas">
      <a v-on:click.prevent="closeCanvas" class="button button--danger">Close</a>
    </div>
    <v-btn :disabled="hasUserInfo" @click.prevent="createCanvas" color="primary" class="mt-4">Download Badge</v-btn>
  </main>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "BadgePreview",
  methods: {
    closeCanvas: function () {
      document.getElementById("canvas").classList.remove("open")
    },
    createCanvas: function () {
      var image = document.getElementById("print");
      html2canvas(image, {
        allowTaint: true,
        height: 505.5,
        width: 318.75
      }).then(canvas => {
        let fileName = "badge--" + this.$store.state.userData.first + '-' + this.$store.state.userData.last;
        this.saveAs(canvas.toDataURL("image/png"), fileName);      
        this.$store.state.dialog = true  
      });
    },
    saveAs: function (uri, filename) {
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;

        if (this.iOS) {
          alert("Instructions...");
          link.target = "_blank";
          link.href = uri
        } else {
          link.href = uri.replace(/^data[:]image\/png[;]/i, "data:application/download;");//force download
        } 
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
      } else {
          window.open(uri);
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.userData
    },
    hasUserInfo () {
      return (this.user.img && this.user.first && this.user.last && this.user.title && this.user.location && this.user.date) == '' ? true : false
    }
  }
};
</script>

<style lang="stylus">
@import "../assets/styles/theme.styl"

.button--block 
  max-width 318.75px
  margin-top --spacing-lg

.badge
  height 505.5px
  width 318.75px
  border-radius 12px
  box-shadow --shadow-sm
  background --gray-900 no-repeat center / cover

  .badge--wrapper
    overflow hidden
    position relative
    height 100%
    width 100%
    background --gray-500 url('../assets/img/employee-badge--bg-002.png') no-repeat center / cover
    z-index 1
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    padding --spacing-lg
    box-sizing border-box

    .badge--logo
      img
        width 100%

    .badge--avatar
      height 140px
      width 140px
      background --white no-repeat center / cover
      border-radius 80px
      margin-top 64px
      border 3px solid --white

    .badge--name
      height 100px
      display flex
      align-items center
      justify-content center
      .badge--name-heading
        margin 0
        padding 0
        text-align center
        text-transform uppercase
        letter-spacing 1px
        line-height 1
        font-size 30px
        color --gray-900
        .first, .last
          display block
        .first
          font-weight bold
        .last
          font-weight 300

    .badge--title, .badge--info
      color #485261

    .badge--title
      text-transform uppercase
      font-weight 500
      letter-spacing 1px
      margin-bottom 24px
      font-weight normal

    .badge--info
      text-transform uppercase
      width 100%
      font-size 16px
      .label
        letter-spacing 1px
        display block
        font-size 11px
        font-weight 500
        color #8695a6

#canvas
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background rgba(0,0,0,0)
  z-index 100
  display flex
  flex-direction column
  align-items center
  justify-content center
  transition --transition
  visibility hidden

  &.open
    background rgba(0,0,0,.5)
    visibility visible

    canvas 
      transform scale(1)

  canvas 
    transition --transition
    transform scale(.75)
</style>