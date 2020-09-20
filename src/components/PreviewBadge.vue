<template>
  <div class="flex flex-column align-center justify-center">
    <div class="badge" id="print">
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
          class="badge--info d-flex align-center justify-space-around text-center"
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
  </div>
</template>

<script>
export default {
  name: "BadgePreview",
  methods: {
    closeCanvas: function () {
      document.getElementById("canvas").classList.remove("open")
    }
  },
  computed: {
    user () {
      return this.$store.state.userData
    }
  }
};
</script>

<style lang="stylus">
@import "../assets/styles/theme.styl"

.badge {
  height: 505.5px;
  width: 318.75px;
  border-radius: 12px;
  box-shadow: --shadow-sm;
  background: --gray-900 no-repeat center / cover;
  margin-bottom: 24px;

  .badge--wrapper {
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    background: --gray-500 url('../assets/img/employee-badge--bg-002.png') no-repeat center / cover;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items center
    padding: --spacing-lg;
    box-sizing: border-box;

    .badge--logo {
      img {
        width: 100%;
      }
    }

    .badge--avatar {
      height: 140px;
      width: 140px;
      background: --white no-repeat center / cover;
      border-radius: 80px;
      margin-top: 64px;
      border: 3px solid --white;
    }

    .badge--name {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      .badge--name-heading {
        margin: 0;
        padding: 0;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 1;
        font-size: 30px;
        color: --gray-900;

        .first, .last {
          display: block;
        }

        .first {
          font-weight: bold;
        }

        .last {
          font-weight: 300;
        }
      }
    }

    .badge--title, .badge--info {
      color: #485261;
    }

    .badge--title {
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 24px;
      font-weight: normal;
    }

    .badge--info {
      text-transform: uppercase;
      width: 100%;
      font-size: 16px;

      .label {
        letter-spacing: 1px;
        display: block;
        font-size: 11px;
        font-weight: 500;
        color: #8695a6;
      }
    }
  }
}
</style>