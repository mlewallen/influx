import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        error: "#ED3E3B",
        info: "#64B5F6",
        primary: "#2977FF",
        secondary: "#2977FF",
        success: "#45D14C",
        warning: "#FFEE58",
      }
    }
  }
});
