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
        primary: "#0D86E7",
        secondary: "#0D86E7",
        success: "#45D14C",
        warning: "#FFEE58"
      },
      dark: {
        error: "#ED3E3B",
        info: "#64B5F6",
        primary: "#0D86E7",
        secondary: "#0D86E7",
        success: "#45D14C",
        warning: "#FFEE58"
      }
    }
  }
});
