import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signOff: "",
    signOffName: "",
    name: "",
    certs: "",
    title: "",
    mobile: "",
    office: "",
    email: "",
    hasNoData: true,
    showInstructions: false,
    activeCta: false,
    dialog: {
      badge: false,
      email: false
    },
    copied: false,
    userData: {
      first: "",
      last: "",
      title: "",
      location: "",
      date: "",
      img: "",
      imgName: ""
    },
    drawer: true
  },
  mutations: {
    updateSignOff(state, message) {
      state.signOff = message;
    },
    updateSignOffName(state, message) {
      state.signOffName = message;
    },
    updateName(state, message) {
      state.name = message;
    },
    updateCerts(state, message) {
      state.certs = message;
    },
    updateTitle(state, message) {
      state.title = message;
    },
    updateMobile(state, message) {
      state.mobile = message;
    },
    updateOffice(state, message) {
      state.office = message;
    },
    updateEmail(state, message) {
      state.email = message;
    },
    updateSocial(state, value, type) {
      state.accounts.find(type).url = value
    }
  },
  getters: {
    getUserData: state => {
      return state.userData
    }
  },
  actions: {},
  modules: {}
});
